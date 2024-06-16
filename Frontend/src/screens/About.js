import React, { useState } from "react";
import "../index.css";

const About = () => {
  // State to track which card is being hovered over
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.card,
          ...(hoveredCard === 1 ? styles.cardHover : {}),
        }}
        onMouseEnter={() => handleCardHover(1)}
        onMouseLeave={handleCardLeave}
      >
        <div style={styles.cardBody}>
          <h2 style={styles.title}>About PDF2Quiz</h2>
          <p style={styles.text}>
            Welcome to PDF Uploader, your premier solution for converting PDF
            documents into interactive quizzes. Our web application simplifies
            the process of transforming PDFs into engaging quizzes, making it
            effortless for educators, students, and professionals alike to
            convert educational materials into interactive assessments.
          </p>
        </div>
      </div>

      <div
        style={{
          ...styles.card,
          ...(hoveredCard === 2 ? styles.cardHover : {}),
        }}
        onMouseEnter={() => handleCardHover(2)}
        onMouseLeave={handleCardLeave}
      >
        <div style={styles.cardBody}>
          <h2 style={styles.subtitle}>Overview</h2>
          <p style={styles.text}>
            Our platform's core functionality enables users to seamlessly upload
            PDF files and automatically generate quizzes based on their content.
            This feature is particularly advantageous in educational settings,
            empowering educators to efficiently create assessments from their
            existing teaching materials.
          </p>
        </div>
      </div>

      <div
        style={{
          ...styles.card,
          ...(hoveredCard === 3 ? styles.cardHover : {}),
        }}
        onMouseEnter={() => handleCardHover(3)}
        onMouseLeave={handleCardLeave}
      >
        <div style={styles.cardBody}>
          <h2 style={styles.subtitle}>Technologies Used</h2>
          <p style={{ ...styles.text, fontFamily: "lightFont" }}>
            Our platform integrates advanced technologies to deliver a seamless
            user experience:
          </p>
          <ul style={styles.list}>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ fontFamily: "boldFont" }}>React.js</strong>: A
              robust JavaScript library for building responsive and dynamic user
              interfaces.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ fontFamily: "boldFont" }}>FastAPI</strong>: A
              high-performance web framework for Python 3.7+ that facilitates
              rapid API development using standard Python type hints.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ fontFamily: "boldFont" }}>Amazon S3</strong>:
              Amazon Simple Storage Service provides scalable, secure, and
              high-performance object storage, ensuring reliable data
              availability.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ fontFamily: "boldFont" }}>Amazon EC2</strong>:
              Amazon Elastic Compute Cloud offers resizable compute capacity in
              the cloud, simplifying web-scale computing for developers.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ fontFamily: "boldFont" }}>Python</strong>: A
              versatile programming language renowned for its simplicity and
              versatility, extensively used in web development, scientific
              computing, and artificial intelligence.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ fontFamily: "boldFont" }}>Axios</strong>: A
              promise-based HTTP client for making efficient HTTP requests from
              browsers and Node.js to servers.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ fontFamily: "boldFont" }}>OpenAI GPT</strong>:
              OpenAI's state-of-the-art Generative Pre-trained Transformer
              model, employed for natural language understanding, generation,
              and various NLP tasks.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ fontFamily: "boldFont" }}>Langchain</strong>: A
              blockchain platform specializing in language-related applications
              like translation, localization, and language learning solutions.
            </li>
          </ul>
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
    position: "relative",
    marginBottom: "1.5rem",
    border: "1px solid #ccc",
    borderRadius: "18px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardBody: {
    padding: "1.5rem",
  },
  title: {
    fontSize: "1.75rem",
    color: "#FFA500",
    marginBottom: "0.5rem",
    fontFamily: "boldFont",
  },
  subtitle: {
    fontSize: "1.75rem",
    color: "#FFA500",
    marginTop: "1.5rem",
    marginBottom: "0.5rem",
    fontFamily: "boldFont",
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
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.3)",
  },
};

export default About;
