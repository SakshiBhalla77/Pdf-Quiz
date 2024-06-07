// src/Quiz.js
import React, { useState, useEffect } from "react";
import questionsData from "../components/questions.json";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleCheckboxChange = (questionId, optionId) => {
    setSelectedOptions((prevState) => {
      const updatedOptions = { ...prevState };
      // If the option is already selected, deselect it
      if (updatedOptions[questionId] === optionId) {
        delete updatedOptions[questionId];
      } else {
        // If the option is not selected, select it
        updatedOptions[questionId] = optionId;
      }
      return updatedOptions;
    });
    // Prevent default checkbox behavior
    return false;
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
  };

  return (
    <div>
      <h2>Quiz</h2>
      <form style={{ fontSize: "1.2rem" }}>
        {questions.map((question) => (
          <div key={question.question_id} style={{ marginBottom: "20px" }}>
            <h3>{question.question_text}</h3>
            {question.options.map((option) => (
              <div key={option.option_id}>
                <label style={{ fontSize: "1.1rem" }}>
                  <input
                    type="checkbox"
                    checked={
                      selectedOptions[question.question_id] === option.option_id
                    }
                    onChange={() =>
                      handleCheckboxChange(
                        question.question_id,
                        option.option_id
                      )
                    }
                    style={{ marginRight: "10px", transform: "scale(1.5)" }}
                  />
                  {option.text}
                </label>
              </div>
            ))}
          </div>
        ))}
      </form>
      <button
        onClick={calculateScore}
        style={{
          backgroundColor: "#4B0082",
          color: "#fff",
          border: "none",
          padding: "1rem 2rem",
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Submit
      </button>
      {score !== null && (
        <p style={{ color: "#333", marginTop: "20px", fontSize: "1.2rem" }}>
          Your score is: <span style={{ fontWeight: "bold" }}>{score}</span> out
          of <span style={{ fontWeight: "bold" }}>{questions.length}</span>
        </p>
      )}
    </div>
  );
};

export default Quiz;
