import React, { useState } from 'react'

import QUESTIONS from '../questions.js'


export default function Quiz() {
    const [userAns, setUserAns] = useState([]);

    // instead of using more state, more state could be derived from existing ones.
    const activeQuestionIndex = userAns.length;

    const handleSelectAnswer = (selectedAnswer) => {
        setUserAns((prevState) => {
            return [...prevState, selectedAnswer];
        });
    }

    //task: switching between questions and get the answer from the user
    return (
        <div id='quiz'>
            <div id='question'>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
