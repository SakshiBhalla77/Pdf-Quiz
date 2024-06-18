import React from "react";
import boldFont from "./fonts/bold.ttf"; 
import lightFont from "./fonts/light.ttf"; 

function MainContent() {
  const styles = {
    mainContent: {
      textAlign: "center",
      marginTop: "4.2rem",
      fontFamily: "LightFont", 
    },
    heading: {
      fontSize: "2rem",
      color: "#333", 
      marginBottom: "1rem", 
      fontFamily: "BoldFont", 
    },
    orangeText: {
      color: "#FF7A01", 
    },
    paragraph: {
      fontSize: "1.2rem", 
      color: "#555", 
      margin: "0 auto", 
      maxWidth: "600px", 
      lineHeight: "1.6", 
    },
  };

  const fontStyles = `
    @font-face {
      font-family: 'BoldFont';
      src: url(${boldFont}) format('truetype');
    }

    @font-face {
      font-family: 'LightFont';
      src: url(${lightFont}) format('truetype');
    }
  `;

  return (
    <div style={styles.mainContent}>
      <style>{fontStyles}</style> {/* Inline style for @font-face */}
      <h2 style={styles.heading}>
        Convert Your PDFs into Engaging <span style={styles.orangeText}>Quizzes</span>
      </h2>
      <p style={styles.paragraph}>Please upload your PDF file to extract the text.</p>
    </div>
  );
}


export default MainContent;
