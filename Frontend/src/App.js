// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import MainContent from './MainContent';
import PDFUpload from './PDFUpload';
import UploadButton from './UploadButton';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Quiz from './Quiz'; // Import the Quiz component
import './index.css';

function App() {
  const [file, setFile] = useState(null);

  const handleFileAccepted = (file) => {
    setFile(file);
  };

  const handleUpload = () => {
    if (file) {
      console.log('Uploading file:', file);
    } else {
      alert('Please select a file first!');
    }
  };

  return (
    <Router>
      <div style={styles.app}>
        <Navbar />
        <main style={styles.main}>
          <Routes>
            <Route
              path="/"
              element={
                <div style={styles.contentContainer}>
                  <MainContent />
                  <PDFUpload onFileAccepted={handleFileAccepted} />
                  <UploadButton onClick={handleUpload} />
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quiz" element={<Quiz />} /> {/* Add Quiz route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
};

export default App;
