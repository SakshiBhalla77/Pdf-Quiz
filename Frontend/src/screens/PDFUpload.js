import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const PDFUpload = ({ onFileAccepted }) => {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfSrc, setPdfSrc] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate(); 

  const uploadFile = async () => {
    if (!selectedFile) {
      alert("No file selected to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    navigate("/loading"); 

    try {
      await axios.post("http://localhost:8000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("File uploaded successfully");
      navigate("/quiz");
    } catch (error) {
      console.error("Error uploading file", error);
      navigate("/loading");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      onFileAccepted(file);
      setSelectedFile(file);
      setPdfSrc(URL.createObjectURL(file));
    } else {
      alert("Please upload a PDF file.");
      setSelectedFile(null);
      setPdfSrc(null);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      onFileAccepted(file);
      setSelectedFile(file);
      setPdfSrc(URL.createObjectURL(file));
    } else {
      alert("Please upload a PDF file.");
      setSelectedFile(null);
      setPdfSrc(null);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleCancel = () => {
    setPdfSrc(null);
    setSelectedFile(null);
  };

  return (
    <div> 
      {!selectedFile && (
        <div
          style={{
            ...styles.dropZone,
            borderColor: dragOver ? "#dda0dd" : "#4B0082",
            backgroundColor: dragOver ? "#f3e5f5" : "transparent",
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
          role="button"
          tabIndex="0"
          aria-label="Upload a PDF file"
        >
          <input
            type="file"
            accept="application/pdf"
            ref={fileInputRef}
            style={styles.input}
            onChange={handleFileChange}
          />
          <p>
            {selectedFile
              ? `Selected file: ${selectedFile.name}`
              : "Drag and drop a PDF file here, or click to select a file"}
          </p>
        </div>
      )}

      {pdfSrc && (
        <div>
          <iframe
            src={pdfSrc}
            width="100%"
            height="500px"
            title="Uploaded PDF"
          ></iframe>
          <button style={styles.button} onClick={uploadFile}>
            Upload
          </button>
          <button style={styles.button} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  dropZone: {
    width: "100%",
    height: "50vh",
    border: "2px dashed #4B0082",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px auto",
    padding: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s, border-color 0.3s",
  },
  input: {
    display: "none",
  },
  button: {
    backgroundColor: "#4B0082",
    color: "white",
    border: "none",
    padding: "1rem 2rem",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "20px",
    alignSelf: "center",
    marginRight: "10px",
  },
};

export default PDFUpload;
