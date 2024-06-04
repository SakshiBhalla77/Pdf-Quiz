import os
import PyPDF2 as pdf
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI  # <-- Corrected import

os.environ['OPENAI_API_KEY']= "sk-proj-6BWDTDaGs4ulJSkT9S2sT3BlbkFJYKsskXdic6VLfHsDpvFJ"

import os
folder_path = '/Users/shashankdubey/PDF2Quiz/backend/uploads'
files = os.listdir(folder_path)
pdf_files = [file for file in files if file.lower().endswith('.pdf')]
if pdf_files:
    first_pdf_path = os.path.join(folder_path, pdf_files[0])
    print("The path of the first PDF file is:", first_pdf_path)
else:
    print("No PDF files found in the folder.")

def getTextFromPDF()->str:
    with open(first_pdf_path,mode='rb') as contentFile:
        convertedText = ""
        pdf_reader = pdf.PdfReader(contentFile)
        for i in range(0,len(pdf_reader.pages)):
            page = pdf_reader.pages[i]
            pageText = page.extract_text()
            convertedText+=pageText
        file_path = '/Users/shashankdubey/PDF2Quiz/backend/uploads/loader.txt'
        with open(file_path, "w+") as file:
            file.write(convertedText)
            file.seek(0)
        return file_path
    
loader = TextLoader(getTextFromPDF())
documents = loader.load()
text_splitter  =  RecursiveCharacterTextSplitter(chunk_size=400,chunk_overlap=50)
texts = text_splitter.split_documents(documents)
embeddings = OpenAIEmbeddings()
store = Chroma.from_documents(texts,embeddings,collection_name="Quiz-PDF")

llm = ChatOpenAI(temperature=0.8, model="gpt-3.5-turbo")
chain = RetrievalQA.from_chain_type(llm,retriever=store.as_retriever())

prompt = """
You are given a document consisting of questions and multiple choice options.
Return a response in JSON format. Each JSON object should contain the following fields:
- question_number
- question
- options (list of options)
- answer (the most contextually correct answer)

Format your response as follows:
[
  {
    "question_number": Automatically increment from 1,
    "question": "<question_text>",
    "options": ["<option1>", "<option2>", "<option3>", "<option4>"],
    "answer": "<correct_option>"
  },
  ...
]
"""
response = chain.run(prompt)
print(response)
os.remove(first_pdf_path)