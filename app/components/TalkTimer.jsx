'use client'

import { useState, useEffect } from "react"


export default function TalkTimer() {

  const [timer, setTimer] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  
  const toggleTimer = () => {
    setShowTimer(!showTimer);
    setStartTimer(false);
  };

  const onPause = () => {
    setStartTimer(!startTimer);
  };  

  const onReset = () => {
    setStartTimer(false);
    setTimer(0)
  }; 

  useEffect(() => {
      let interval;

      if(startTimer) {
          interval = setInterval(() => { 
          setTimer(prevTime => prevTime + 10)
      }, 10)
    } 
      return () => 
          clearInterval(interval)
          
  }, [startTimer]);


  return (
      <>
      <br />
      <button onClick={toggleTimer}>{!showTimer ? 'Show talk timer' : 'Hide talk timer'}</button>
        {showTimer &&
          <>
            <br />
            <button className="btn-controls" onClick={() => setStartTimer(true)}>Start</button>
            <button className="btn-controls" onClick={onPause}>Pause</button>
            <button className="btn-controls" onClick={onReset}>Reset</button>
            <br />    
            <span className="timer">{("0" + Math.floor((timer / 60000) % 60)).slice(-1) + ":"}</span>
            <span className="timer">{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span> 
            <br /> 
          </> 
        }
      </> 
  )
}  


