import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './screens/Navbar';
import MainContent from './screens/MainContent';
import PDFUpload from './screens/PDFUpload';
import UploadButton from './components/UploadButton';
import Footer from './components/Footer';
import About from './screens/About';
import Contact from './screens/Contact';
import Quiz from './screens/Quiz';
import LoadingPage from './screens/LoadingPage'; 
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
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="*" element={<Navigate to="/" />} /> 
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
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
};

export default App;
