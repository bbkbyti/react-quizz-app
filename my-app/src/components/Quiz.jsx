import React, { useState, useCallback } from 'react'

import QUESTIONS from '../questions.js'
import Question from './Question.jsx'

//task:

export default function Quiz() {

    const [userAns, setUserAns] = useState([]);


    // instead of using more state, more state could be derived from existing ones.
    const activeQuestionIndex = userAns.length;

    const quizComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer
    ) {
        setUserAns((prevState) => {
            return [...prevState, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizComplete) {
        return (
            <div id='summary'>
                <h2>Quiz Completed!</h2>
            </div>
        )
    }


    return (
        <div id='quiz'>
            <div id='question'>
                <Question
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnswer}
                />
            </div>
        </div>
    )
}
