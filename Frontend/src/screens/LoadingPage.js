import React from "react";

const LoadingPage = () => {
  return (
    <div style={loadingContainerStyle}>
      <div style={loadingCircleStyle}></div>
      <div style={loadingTextStyle}>Preparing Quiz</div>
    </div>
  );
};

export default LoadingPage;

const loadingContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  //backgroundColor: "#f0f0f0",
  overflow: "hidden", // Prevent scrolling
};

const loadingCircleStyle = {
  border: "16px solid #f3f3f3", // Light grey
  borderTop: "16px solid #4B0081", // Purple
  borderRadius: "50%",
  width: "120px",
  height: "120px",
  animation: "spin 2s linear infinite",
};

const loadingTextStyle = {
  marginTop: "20px",
  fontSize: "1.5em",
  color: "#4B0081",
};

// CSS Keyframes for spinning animation
const spinKeyframes = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Add CSS Keyframes to head of document
const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(spinKeyframes));
document.head.appendChild(style);
