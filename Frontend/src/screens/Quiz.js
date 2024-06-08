import React, { useState, useEffect } from "react";
import questionsData from "../components/questions.json";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);
  const [answersCorrectness, setAnswersCorrectness] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
    // Update answers correctness only if the quiz has been submitted
    if (submitted) {
      updateAnswersCorrectness();
    }
    // Prevent default checkbox behavior
    return false;
  };

  const updateAnswersCorrectness = () => {
    const answers = {};
    questions.forEach((question) => {
      if (
        selectedOptions[question.question_id] === question.correct_option_id
      ) {
        answers[question.question_id] = true;
      } else {
        answers[question.question_id] = false;
      }
    });
    setAnswersCorrectness(answers);
  };

  const calculateScore = () => {
    let score = 0;
    updateAnswersCorrectness(); // Update answers correctness before calculating score
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
    <div>
      <h2>Quiz</h2>
      <form style={{ fontSize: "1.2rem" }}>
        {questions.map((question) => (
          <div
            key={question.question_id}
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              //width: "100%",
            }}
          >
            <div
            // style={{
            //   marginBottom: "20px",
            //   background: "#fff",
            //   padding: "20px",
            //   borderRadius: "10px",
            //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            //   width: "fit-content",
            // }}
            >
              <h3>{question.question_text}</h3>
            </div>

            {question.options.map((option) => {
              const isSelected =
                selectedOptions[question.question_id] === option.option_id;
              const isCorrect = option.option_id === question.correct_option_id;
              const isSubmitted = submitted;

              let backgroundColor = "transparent";

              if (isSubmitted) {
                if (isSelected && isCorrect) {
                  backgroundColor = "#DCF3E9"; // Highlight correct and selected option in green
                } else if (isSelected && !isCorrect) {
                  backgroundColor = "#FFE4E7"; // Highlight incorrect and selected option in red
                } else if (!isSelected && isCorrect) {
                  backgroundColor = "#DCF3E9"; // Highlight correct but not selected option in green
                }
              }

              return (
                <div
                  key={option.option_id}
                  style={{
                    border: "1px solid #ccc", // Border style
                    borderRadius: "19px", // Rounded corners
                    padding: "15px", // Increased padding for spacing
                    marginBottom: "15px", // Spacing between options
                    width: "fit-content", // Adjust the width to fit the content
                    backgroundColor,
                    padding: "13px",
                  }}
                >
                  <label
                    style={{
                      fontSize: "1.1rem",
                      display: "flex",
                      alignItems: "center",
                      //width: "100%",
                    }}
                  >
                    <span style={{ width: "200px", display: "inline-block" }}>
                      {option.text}
                    </span>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() =>
                        handleCheckboxChange(
                          question.question_id,
                          option.option_id
                        )
                      }
                      style={{
                        marginLeft: "150px",
                        transform: "scale(1.5)",
                      }}
                    />
                  </label>
                </div>
              );
            })}
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
