from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import aiofiles
import os
import subprocess

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)

current_dir = os.path.dirname(os.path.abspath(__file__))
UPLOAD_DIRECTORY = os.path.join(current_dir, 'uploads')

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_location = os.path.join(UPLOAD_DIRECTORY, file.filename)
    
    async with aiofiles.open(file_location, 'wb') as out_file:
        content = await file.read()
        await out_file.write(content)

    run_llm_path = os.path.join(current_dir, 'runLLm.py')
    subprocess.run(['python3', run_llm_path])
    

    return {"info": f"file '{file.filename}' saved at '{file_location}'"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
