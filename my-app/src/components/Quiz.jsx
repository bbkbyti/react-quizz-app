import React, { useState } from 'react'

import QUESTIONS from '../questions.js'

//task: Shuffle the answers, and add a limit to the number of answers that they they app does not gives error
export default function Quiz() {
    const [userAns, setUserAns] = useState([]);

    // instead of using more state, more state could be derived from existing ones.
    const activeQuestionIndex = userAns.length;

    const quizComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = (selectedAnswer) => {
        setUserAns((prevState) => {
            return [...prevState, selectedAnswer];
        });
    }

    if (quizComplete) {
        return (
            <div id='summary'>
                <h2>Quiz Completed!</h2>
            </div>
        )
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
    return (
        <div id='quiz'>
            <div id='question'>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
