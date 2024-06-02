// src/Quiz.js
import React, { useState, useEffect } from 'react';
import questionsData from './components/questions.json';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        setQuestions(questionsData);
    }, []);

    const handleCheckboxChange = (questionId, optionId) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [questionId]: optionId
        }));
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach(question => {
            if (selectedOptions[question.question_id] === question.correct_option_id) {
                score++;
            }
        });
        setScore(score);
    };

    return (
        <div>
            <h2>Quiz</h2>
            <form>
                {questions.map(question => (
                    <div key={question.question_id}>
                        <h3>{question.question_text}</h3>
                        {question.options.map(option => (
                            <div key={option.option_id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedOptions[question.question_id] === option.option_id}
                                        onChange={() => handleCheckboxChange(question.question_id, option.option_id)}
                                    />
                                    {option.text}
                                </label>
                            </div>
                        ))}
                    </div>
                ))}
            </form>
            <button onClick={() => calculateScore()}>
                Submit
            </button>
            {score !== null && (
                <p>Your score is: {score} out of {questions.length}</p>
            )}
        </div>
    );
};

export default Quiz;
