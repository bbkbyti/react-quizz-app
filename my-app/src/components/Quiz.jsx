import React, { useState, useCallback } from 'react'

import QUESTIONS from '../questions.js'
import Question from './Question.jsx'

//task: As the user picks an answer first highlight that answer and then after a second the color of the answer
// changes to green if it was the correct answer and red if it wasn't

export default function Quiz() {

    const [userAns, setUserAns] = useState([]);
    const [answerState, setAnswerState] = useState('')

    // instead of using more state, more state could be derived from existing ones.
    const activeQuestionIndex = answerState === '' ? userAns.length : userAns.length - 1;

    const quizComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer
    ) {
        setAnswerState('answered');
        setUserAns((prevState) => {
            return [...prevState, selectedAnswer];
        });
        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                // first option of the questions is the correct answer in questions.js questions.
                setAnswerState('correct')
            } else {
                setAnswerState('wrong');
            }
            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

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
                    questionText={QUESTIONS[activeQuestionIndex].text}
                    answers={QUESTIONS[activeQuestionIndex].answers}
                    onSelectAnswer={handleSelectAnswer}
                    answerState={answerState}
                    selectedAnswer={userAns[userAns.length - 1]}
                    onSkipAnswer={handleSkipAnswer}
                />
            </div>
        </div>
    )
}
