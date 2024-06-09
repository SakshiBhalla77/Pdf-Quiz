import os
import json
import PyPDF2 as pdf
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI

os.environ['OPENAI_API_KEY'] = "sk-proj-6BWDTDaGs4ulJSkT9S2sT3BlbkFJYKsskXdic6VLfHsDpvFJ"

folder_path = '/Users/shashankdubey/PDF2Quiz/backend/uploads'
files = os.listdir(folder_path)
pdf_files = [file for file in files if file.lower().endswith('.pdf')]
if pdf_files:
    first_pdf_path = os.path.join(folder_path, pdf_files[0])
    print("The path of the first PDF file is:", first_pdf_path)
else:
    print("No PDF files found in the folder.")
    exit()

def getTextFromPDF() -> str:
    with open(first_pdf_path, mode='rb') as contentFile:
        convertedText = ""
        pdf_reader = pdf.PdfReader(contentFile)
        for i in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[i]
            pageText = page.extract_text()
            convertedText += pageText
        file_path = '/Users/shashankdubey/PDF2Quiz/backend/uploads/loader.txt'
        with open(file_path, "w+") as file:
            file.write(convertedText)
            file.seek(0)
        return file_path

loader = TextLoader(getTextFromPDF())
documents = loader.load()
text_splitter = RecursiveCharacterTextSplitter(chunk_size=400, chunk_overlap=50)
texts = text_splitter.split_documents(documents)
embeddings = OpenAIEmbeddings()
store = Chroma.from_documents(texts, embeddings, collection_name="Quiz-PDF")

llm = ChatOpenAI(temperature=0.8, model="gpt-3.5-turbo")
chain = RetrievalQA.from_chain_type(llm, retriever=store.as_retriever())

prompt = """
You are given a document consisting of questions and multiple choice options.
Return a response in JSON format. Each JSON object should contain the following fields:
- question_id
- question_text
- options (list of options)
- correcrt_option_id (the most contextually correct answer)

Example format of the response that is expected:
[
  {
    "question_id": 1,
    "question_text": "What is the capital city of Australia?",
    "options": [
      {"option_id": 1, "text": "Sydney"},
      {"option_id": 2, "text": "Melbourne"},
      {"option_id": 3, "text": "Canberra"},
      {"option_id": 4, "text": "Brisbane"}
    ],
    "correct_option_id": 3
  },
  {
    "question_id": 2,
    "question_text": "Which planet in our solar system is known as the 'Red Planet'?",
    "options": [
      {"option_id": 1, "text": "Venus"},
      {"option_id": 2, "text": "Mars"},
      {"option_id": 3, "text": "Jupiter"},
      {"option_id": 4, "text": "Saturn"}
    ],
    "correct_option_id": 2
  },
]
Strictly adhere to this format only, give the response in exactly one line, the need for '\n' is not required.
"""
response = chain.run(prompt)
print(response)
store_path= "/Users/shashankdubey/PDF2Quiz/Frontend/src/response"
response_json_path = os.path.join(store_path, 'response.txt')
with open(response_json_path, 'w') as json_file:
    json.dump(response, json_file, indent=4)
os.remove(first_pdf_path)
os.remove('/Users/shashankdubey/PDF2Quiz/backend/uploads/loader.txt')
