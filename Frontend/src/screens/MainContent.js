import React from "react";
import boldFont from "./fonts/bold.ttf"; // Import the bold font file
import lightFont from "./fonts/light.ttf"; // Import the light font file

// Define MainContent component
function MainContent() {
  const styles = {
    mainContent: {
      textAlign: "center",
      marginTop: "4.2rem",
      fontFamily: "LightFont", // Apply light font family to everything else
    },
    heading: {
      fontSize: "2rem",
      color: "#333", // Improved readability with a darker color
      marginBottom: "1rem", // Added margin for spacing
      fontFamily: "BoldFont", // Apply bold font family to h2
    },
    orangeText: {
      color: "#FF7A01", // Orange color for "Quizzes"
    },
    paragraph: {
      fontSize: "1.2rem", // Slightly adjusted font size for better readability
      color: "#555", // A lighter shade for contrast
      margin: "0 auto", // Center the paragraph
      maxWidth: "600px", // Restrict width for better readability
      lineHeight: "1.6", // Improve readability with increased line height
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

// Export MainContent component
export default MainContent;
