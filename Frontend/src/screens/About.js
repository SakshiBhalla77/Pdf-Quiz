// src/About.js
import React from "react";
import "../index.css";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About PDF2Quiz</h1>
      <p style={styles.text}>
        Welcome to PDF Uploader, your go-to solution for converting PDF
        documents into interactive quizzes. PDF Uploader is a web application
        designed to simplify the process of creating quizzes from PDF documents.
        Whether you're a teacher, student, or professional, our platform offers
        a convenient solution for converting your educational materials into
        interactive assessments.
      </p>

      <h2 style={styles.subtitle}>Overview</h2>
      <p style={styles.text}>
        The primary functionality of our website is to allow users to upload PDF
        files and automatically generate quizzes based on the content. This can
        be particularly useful for educational purposes, enabling teachers to
        quickly create assessments from existing materials.
      </p>

      <h2 style={styles.subtitle}>Technologies Used</h2>
      <p style={styles.text}>
        Our platform is built using a modern web development stack to ensure
        high performance, scalability, and ease of use:
      </p>
      <ul style={styles.list}>
        <li>
          <strong>React</strong>: A powerful JavaScript library for building
          user interfaces, which ensures a responsive and dynamic user
          experience.
        </li>
        <li>
          <strong>Node.js</strong>: Our backend is powered by Node.js, providing
          a robust and scalable server environment to handle file uploads and
          processing.
        </li>
        <li>
          <strong>Express</strong>: A minimal and flexible Node.js web
          application framework that facilitates server-side logic and API
          development.
        </li>
        <li>
          <strong>MongoDB</strong>: A NoSQL database that stores user data, quiz
          information, and PDF metadata, allowing for efficient data retrieval
          and management.
        </li>
        <li>
          <strong>PDF.js</strong>: A library for parsing and rendering PDFs,
          which we use to extract text and images from uploaded files.
        </li>
        <li>
          <strong>Font Awesome</strong>: A popular icon library that enhances
          the visual appeal of our user interface with a variety of customizable
          icons.
        </li>
      </ul>

      <h2 style={styles.subtitle}>Features</h2>
      <p style={styles.text}>
        PDF Uploader offers a range of features designed to streamline the quiz
        creation process:
      </p>
      <ul style={styles.list}>
        <li>Upload PDFs directly from your device.</li>
        <li>Automatic quiz generation with customizable question formats.</li>
        <li>
          Interactive interface for editing and reviewing generated quizzes.
        </li>
        <li>Download quizzes in various formats for offline use.</li>
        <li>
          User accounts for saving and managing uploaded PDFs and created
          quizzes.
        </li>
      </ul>

      <h2 style={styles.subtitle}>Contact Us</h2>
      <p style={styles.text}>
        If you have any questions, feedback, or need support, please don't
        hesitate to. We're here to help and continuously improve your experience
        with PDF Uploader.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "1.75rem",
    marginBottom: "1rem",
    color: "#4B0082",
  },
  subtitle: {
    fontSize: "1.75rem",
    marginTop: "1.5rem",
    marginBottom: "1rem",
    color: "#4B0082",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333",
    textAlign: "justify", // Text alignment set to justify
    marginRight: "0.5rem", // Adding margin to the right side of paragraphs
  },
  list: {
    paddingLeft: "1.5rem",
    listStyleType: "disc",
  },
};

export default About;
