import React, { useState, useEffect } from "react";
import rawQuestionsData from "../response/formattedQuestions.json";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setQuestions(rawQuestionsData);
  }, []);

  const handleOptionClick = (questionId, optionId) => {
    setSelectedOptions((prevState) => {
      const updatedOptions = { ...prevState };
      if (updatedOptions[questionId] === optionId) {
        delete updatedOptions[questionId];
      } else {
        updatedOptions[questionId] = optionId;
      }
      return updatedOptions;
    });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (
        selectedOptions[question.question_id] === question.correct_option_id
      ) {
        score++;
      }
    });
    setScore(score);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        textAlign: "left",
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>Quiz</h2>
      <form style={{ fontSize: "1.2rem" }}>
        {questions.map((question) => (
          <div
            key={question.question_id}
            style={{
              marginBottom: "20px",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <h3>{question.question_text}</h3>
            </div>

            {question.options.map((option) => {
              const isSelected =
                selectedOptions[question.question_id] === option.option_id;
              const isCorrect = option.option_id === question.correct_option_id;

              let backgroundColor = "transparent";
              if (submitted) {
                if (isSelected) {
                  backgroundColor = isCorrect ? "#DCF3E9" : "#FFE4E7";
                } else if (isCorrect) {
                  backgroundColor = "#DCF3E9";
                }
              } else if (isSelected) {
                backgroundColor = "#FF9F66"; // Change this to your desired selected color
                // backgroundColor = "#FF610"; // Change this to your desired selected color
              }

              return (
                <div
                  key={option.option_id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "19px",
                    padding: "15px",
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor,
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onClick={() =>
                    handleOptionClick(question.question_id, option.option_id)
                  }
                >
                  <span style={{ marginLeft: "10px" }}>{option.text}</span>
                </div>
              );
            })}
          </div>
        ))}
      </form>
      {!submitted && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "70px",
          }}
        >
          <button
            onClick={calculateScore}
            style={{
              backgroundColor: "#FF7A01",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s, transform 0.3s",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FF5C00";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#FF7A01";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            Submit
          </button>
        </div>
      )}
      {submitted && (
        <div>
          <p style={{ color: "#333", marginTop: "20px", fontSize: "1.2rem" }}>
            Your score is: <span style={{ fontWeight: "bold" }}>{score}</span>{" "}
            out of{" "}
            <span style={{ fontWeight: "bold" }}>{questions.length}</span>
          </p>
          <p style={{ marginTop: "20px", marginBottom: "100px", fontSize: "1.2rem", fontWeight: "bold", color: "#DC3545" }}>
            {score >= questions.length / 2
              ? "Congratulations! You passed the quiz."
              : "Unfortunately, you did not pass the quiz. Please try again."}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
