from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import aiofiles
import os
import subprocess
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)

UPLOAD_DIRECTORY = "/Users/shashankdubey/PDF2Quiz/backend/uploads"

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_location = f"{UPLOAD_DIRECTORY}/{file.filename}"
    
    async with aiofiles.open(file_location, 'wb') as out_file:
        content = await file.read()
        await out_file.write(content)
    subprocess.run(['python3', 'runLLm.py'])

    return {"info": f"file '{file.filename}' saved at '{file_location}'"}

@app.get("/response")
async def get_response():
    response_json_path = os.path.join(UPLOAD_DIRECTORY, 'response.json')
    if os.path.exists(response_json_path):
        with open(response_json_path, 'r') as json_file:
            response = json.load(json_file)
        return response
    else:
        return {"error": "No response found. Please upload a PDF first."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
