'use client'

import { useState, useEffect } from "react"


export default function TalkTimer() {

  const [timer, setTimer] = useState(0);
  const [startTimer, setStartTimer] = useState(false) 
  
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
        <button onClick={() => setStartTimer(true)}>Start talk timer</button>
        <button onClick={onPause}>Pause</button>
        <button onClick={onReset}>Reset</button>
        <br />    
        <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-1) + ":"}</span>
        <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span> 
        <br /> 
      </>
      
  )
}  


