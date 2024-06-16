import React from "react";
import "./ErrorPage.css"; // Import the CSS file for styling
import cat from "../assets/cat.jpg"; // Import the image file

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <img src={cat} alt="Error Icon" className="error-icon" />
        {/* <h1>404</h1> */}
        <p className="page-not-found">Page Not Found</p>
        <p>
          Looks like you are lost! But don't let that stop you, head back to the
          home page right away!
        </p>
        <button onClick={() => (window.location.href = "/")}>Go Back</button>
      </div>
    </div>
  );
};

export default ErrorPage;
