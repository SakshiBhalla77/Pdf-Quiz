import React from "react";

function MainContent() {
  return (
    <div style={styles.mainContent}>
      <h2>Convert Your PDFs into Engaging Quizzes</h2>
      <p>Please upload your PDF file to extract the text.</p>
    </div>
  );
}

const styles = {
  mainContent: {
    textAlign: "center",
    marginTop: "4.2rem",
  },
  heading: {
    fontSize: "2rem", 
  },
  paragraph: {
    fontSize: "1.4rem",
  },
};

export default MainContent;
