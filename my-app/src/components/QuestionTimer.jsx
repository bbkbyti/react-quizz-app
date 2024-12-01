import React, { useState, useEffect } from 'react'

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        console.log('Setting Timeout')
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearInterval(timer);
        }

    }, [timeout, onTimeout]);


    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Setting Interval')
            setRemainingTime((prevState) => prevState - 100);
        }, 100);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <progress id='question-time' max={timeout} value={remainingTime} />
    )
}
