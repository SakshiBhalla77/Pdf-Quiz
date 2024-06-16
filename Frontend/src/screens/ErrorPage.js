import React from "react";
import "./ErrorPage.css"; 
import cat from "../assets/cat.jpg"; 

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <img src={cat} alt="Error Icon" className="error-icon" />
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
