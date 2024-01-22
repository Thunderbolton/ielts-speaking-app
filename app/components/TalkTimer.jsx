'use client'

import { useState, useEffect } from "react"
import useWindowResize from "./useWindowResize"
import SmallScreenControls from "./SmallScreenControls"


export default function TalkTimer() {

  const { deviceSize, isSmallScreen, setIsSmallScreen } = useWindowResize()

    useEffect(() => {
        if(deviceSize <= 950)
            setIsSmallScreen(true)
        if(deviceSize > 950)
            setIsSmallScreen(false)
      });

  const [timer, setTimer] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  
  const toggleTimer = () => {
    setShowTimer(!showTimer);
    setStartTimer(false);
  };


  const onStart = () => {
    setStartTimer(true);
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
      <div className="toggle-timer-parent">
        <button onClick={toggleTimer}>{!showTimer ? 'Show talk timer' : 'Hide talk timer'}</button>
      </div>
      
        {showTimer &&
        <>
          {isSmallScreen ? 

            <SmallScreenControls className="small-screen-controls right-[6%] sm:right-[7.7%]" onStart={onStart} onPause={onPause} onReset={onReset}/> 
            
          :  
            <div className="fixed top-[335px] right-[6%]">
              <button className="btn-controls sticky h-full" onClick={() => setStartTimer(true)}>Start</button>
              <button className="btn-controls sticky h-full" onClick={onPause}>Pause</button>
              <button className="btn-controls sticky h-full" onClick={onReset}>Reset</button>
            </div>
            }
            
              <div className="fixed top-[405px] right-[7%]">
                <span className="talk-timer">{("0" + Math.floor((timer / 60000) % 60)).slice(-1) + ":"}</span>
                <span className="talk-timer">{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
              </div>                  
        </> 
        }
      </> 
  )
}  


