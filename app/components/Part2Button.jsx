'use client'

import { useState, useEffect } from "react"

export default function Part2Button () {

    let [countdown, setCountdown] = useState(60);
    const [showTimer, setShowTimer] = useState(false)
    const [startTimer, setStartTimer] = useState(false)

   
    useEffect(() => {
        if(startTimer) {
            const timer = setInterval(() => { 
            setCountdown(countdown - 1)
        
            if (countdown === 0) {
                setCountdown(0)
                clearInterval(timer)
            }
        }, 1000)

        return () => {
            clearInterval(timer)
        }   
    }

    }, [countdown, startTimer]);

    const onStart = () => {
       setStartTimer(true); 
      };

    const onPause = () => {
        setStartTimer(!startTimer);
    };  

    const onReset = () => {
        setStartTimer(false);
        setCountdown(60)
    }; 
    
    const toggleTimer = () => {
        setShowTimer(!showTimer)
    };

    return (        
        <>
            {!showTimer ? <button onClick={toggleTimer}>Show timer</button> : <button onClick={toggleTimer}>Hide timer</button> }

            {showTimer && (
                <div>                    
                    <button onClick={onStart}>Start&nbsp;</button>
                    <button onClick={onReset}>Reset&nbsp;</button>
                    <button onClick={onPause}>Pause&nbsp;</button>
                    <h2>{countdown}</h2>
                </div>
                
            )}

        </>
        
    )
}