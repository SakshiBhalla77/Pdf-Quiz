import React, { useState, useEffect } from "react";
//import rawQuestionsData from "../components/questions.json";
import rawQuestionsData from "/Users/shashankdubey/PDF2Quiz/Frontend/src/response/formattedQuestions.json"

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(null);
  const [answersCorrectness, setAnswersCorrectness] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setQuestions(rawQuestionsData);
  }, []);

  const handleCheckboxChange = (questionId, optionId) => {
    setSelectedOptions((prevState) => {
      const updatedOptions = { ...prevState };
      if (updatedOptions[questionId] === optionId) {
        delete updatedOptions[questionId];
      } else {
        updatedOptions[questionId] = optionId;
      }
      return updatedOptions;
    });
    if (submitted) {
      updateAnswersCorrectness();
    }
  };

  const updateAnswersCorrectness = () => {
    const answers = {};
    questions.forEach((question) => {
      if (selectedOptions[question.question_id] === question.correct_option_id) {
        answers[question.question_id] = true;
      } else {
        answers[question.question_id] = false;
      }
    });
    setAnswersCorrectness(answers);
  };

  const calculateScore = () => {
    let score = 0;
    updateAnswersCorrectness();
    questions.forEach((question) => {
      if (selectedOptions[question.question_id] === question.correct_option_id) {
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
            }}
          >
            <div>
              <h3>{question.question_text}</h3>
            </div>

            {question.options.map((option) => {
              const isSelected = selectedOptions[question.question_id] === option.option_id;
              const isCorrect = option.option_id === question.correct_option_id;
              const isSubmitted = submitted;

              let backgroundColor = "transparent";

              if (isSubmitted) {
                if (isSelected && isCorrect) {
                  backgroundColor = "#DCF3E9";
                } else if (isSelected && !isCorrect) {
                  backgroundColor = "#FFE4E7";
                } else if (!isSelected && isCorrect) {
                  backgroundColor = "#DCF3E9";
                }
              }

              return (
                <div
                  key={option.option_id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "19px",
                    padding: "15px",
                    marginBottom: "15px",
                    width: "fit-content",
                    backgroundColor,
                  }}
                >
                  <label
                    style={{
                      fontSize: "1.1rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ width: "200px", display: "inline-block" }}>
                      {option.text}
                    </span>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleCheckboxChange(question.question_id, option.option_id)}
                      style={{
                        marginLeft: "150px",
                        transform: "scale(1.5)",
                      }}
                    />
                  </label>
                </div>
              );
            })}
            {submitted && (
              <p style={{ color: answersCorrectness[question.question_id] ? "green" : "red" }}>
                {answersCorrectness[question.question_id] ? "Correct" : "Incorrect"}
              </p>
            )}
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