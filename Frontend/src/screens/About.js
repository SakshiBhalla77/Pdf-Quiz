import React from "react";
import "../index.css";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.cardBody}>
          <h2 style={styles.title}>About PDF2Quiz</h2>
          <p style={styles.text}>
            Welcome to PDF Uploader, your go-to solution for converting PDF
            documents into interactive quizzes. PDF Uploader is a web
            application designed to simplify the process of creating quizzes
            from PDF documents. Whether you're a teacher, student, or
            professional, our platform offers a convenient solution for
            converting your educational materials into interactive assessments.
          </p>
        </div>
      </div>

      <div style={styles.card}>
        <div style={styles.cardBody}>
          <h2 style={styles.subtitle}>Overview</h2>
          <p style={styles.text}>
            The primary functionality of our website is to allow users to upload
            PDF files and automatically generate quizzes based on the content.
            This can be particularly useful for educational purposes, enabling
            teachers to quickly create assessments from existing materials.
          </p>
        </div>
      </div>

      <div style={styles.card}>
        <div style={styles.cardBody}>
          <h2 style={styles.subtitle}>Technologies Used</h2>
          <p style={styles.text}>
            Our platform leverages a range of cutting-edge technologies to
            provide a seamless user experience:
          </p>
          <ul style={styles.list}>
            <li>
              <strong>React.js</strong>: A powerful JavaScript library for
              building user interfaces, which ensures a responsive and dynamic
              user experience.
            </li>
            <br/>
            <li>
              <strong>FastAPI</strong>: A modern, fast (high-performance), web
              framework for building APIs with Python 3.7+ based on standard Python
              type hints.
            </li>
            <br />
            <li>
              <strong>Amazon S3</strong>: Amazon Simple Storage Service (Amazon S3)
              is an object storage service that offers industry-leading scalability,
              data availability, security, and performance.
            </li>
            <br />
            <li>
              <strong>Amazon EC2</strong>: Amazon Elastic Compute Cloud (Amazon EC2)
              provides secure and resizable compute capacity in the cloud. It is
              designed to make web-scale cloud computing easier for developers.
            </li>
            <br />
            <li>
              <strong>Python</strong>: A versatile programming language known for
              its simplicity and readability, widely used for web development,
              scientific computing, artificial intelligence, and more.
            </li>
            <br />
            <li>
              <strong>Axios</strong>: A promise-based HTTP client for the browser
              and Node.js, used to make HTTP requests from the browser or Node.js to
              the server.
            </li>
            <br />
            <li>
              <strong>OpenAI GPT</strong>: OpenAI's Generative Pre-trained
              Transformer (GPT) is a state-of-the-art language processing AI model,
              used for natural language understanding, generation, and many other
              NLP tasks.
            </li>
            <br />
            <li>
              <strong>Langchain</strong>: A blockchain platform that provides
              solutions for language-related applications, such as translation,
              localization, and language learning.
            </li>
          </ul>
        </div>
      </div>

      {/* Repeat similar structure for other sections */}

      {/* Contact Us Section */}
      <div style={styles.card}>
        <div style={styles.cardBody}>
          <h2 style={styles.subtitle}>Contact Us</h2>
          <p style={styles.text}>
            If you have any questions, feedback, or need support, please don't
            hesitate to. We're here to help and continuously improve your
            experience with PDF Uploader.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  card: {
    marginBottom: "1.5rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
  },
  cardBody: {
    padding: "1.5rem",
  },
  title: {
    fontSize: "1.75rem",
    color: "#4B0082",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1.75rem",
    color: "#4B0082",
    marginTop: "1.5rem",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333",
  },
  list: {
    paddingLeft: "1.5rem",
    listStyleType: "none",
  },
};

export default About;
