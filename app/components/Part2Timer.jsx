'use client'

import { useState } from "react"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


export default function Part2Timer () {
    
    const renderTime = ({ remainingTime }) => {
    
        return <div>
                    <div className="timer">{remainingTime}</div>
                </div>;
        }

    const [showTimer, setShowTimer] = useState(false);
    const [startTimer, setStartTimer] = useState(false);    
    const [key, setKey] = useState(0);


    const onStart = () => {
       setStartTimer(true);
    };

    const onPause = () => {
        setStartTimer(!startTimer);
    };  

    const onReset = () => {
        setStartTimer(false);
        setKey(prevKey => prevKey + 1)
    }; 
    
    const toggleTimer = () => {
        setShowTimer(!showTimer);
        setStartTimer(false);
    };

    return (        
        <>
            <button onClick={toggleTimer}>{!showTimer ? 'Show prep timer' : 'Hide prep timer'}</button> 
            
            {showTimer && (
                <div>                    
                    <button className="btn-controls" onClick={onStart}>Start</button>
                    <button className="btn-controls" onClick={onPause}>Pause</button>
                    <button className="btn-controls" onClick={onReset}>Reset</button>
                        
                    <CountdownCircleTimer
                        isPlaying={startTimer ? true : false}
                        duration={60}
                        key={key}
                        colors="green"
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                    
                </div> 
            )}
        </> 
    )
}