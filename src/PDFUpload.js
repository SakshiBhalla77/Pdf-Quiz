import React, { useRef, useState } from 'react';

const PDFUpload = ({ onFileAccepted }) => {
    const [dragOver, setDragOver] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [pdfSrc, setPdfSrc] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            onFileAccepted(file);
            setSelectedFile(file.name);
            setPdfSrc(URL.createObjectURL(file)); // Set PDF source for rendering
        } else {
            alert('Please upload a PDF file.');
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
        if (file && file.type === 'application/pdf') {
            onFileAccepted(file);
            setSelectedFile(file.name);
            setPdfSrc(URL.createObjectURL(file)); // Set PDF source for rendering
        } else {
            alert('Please upload a PDF file.');
            setSelectedFile(null);
            setPdfSrc(null);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <div
                style={{
                    ...styles.dropZone,
                    borderColor: dragOver ? '#dda0dd' : '#4B0082',
                    backgroundColor: dragOver ? '#f3e5f5' : 'transparent',
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
                <p>{selectedFile ? `Selected file: ${selectedFile}` : 'Drag and drop a PDF file here, or click to select a file'}</p>
            </div>
            {pdfSrc && <iframe src={pdfSrc} width="100%" height="500px" title="Uploaded PDF"></iframe>}
        </div>
    );
};

const styles = {
    dropZone: {
        width: '80%',
        height: '200px',
        border: '2px dashed #4B0082',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '20px auto',
        cursor: 'pointer',
        transition: 'background-color 0.3s, border-color 0.3s',
    },
    input: {
        display: 'none',
    },
};

export default PDFUpload;
