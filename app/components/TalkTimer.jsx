'use client'

import { useState, useEffect } from "react"
import useWindowResize from "./useWindowResize"
import SmallScreenControls from "./SmallScreenControls"
import TalkOn from "/public/talkOn-svg.svg"
import TalkOff from "/public/talkOff-svg.svg" 


export default function TalkTimer() {

  const { deviceWidth, deviceScroll,isSmallScreen, setIsSmallScreen } = useWindowResize()

    useEffect(() => {
        if(deviceWidth <= 950)
            setIsSmallScreen(true)
        if(deviceWidth > 950)
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

<></>
  return (
      <>
        <button className="toggle-timer-parent" 
        onClick={toggleTimer} >{!showTimer ? 'Show talk timer' : <TalkOff className="timer-icons-hide"/>}</button>
                                
        {showTimer ?
        <>
          {!isSmallScreen && <button className="btn-controls fixed top-[335px] translate-x-[-68px] right-[6%] " onClick={toggleTimer}>Hide</button>}
            {isSmallScreen ? 
              <>
                <SmallScreenControls className="small-screen-controls right-[6%] sm:right-[7.7%]" onStart={onStart} onPause={onPause} onReset={onReset}/>
                <img
                        src="hide-svg.svg"
                        width={deviceWidth >= 650 ? 30 : deviceWidth >= 500 ? 25 : 20 }
                        height="20"
                        className="fixed top-[390px] sm:top-[370px] mx-4 right-[6.7%] sm:right-[6.4%] sm:mx-8 md:right-[7.4%]"
                        onClick={toggleTimer}
                    /> 
                        
                </>
              :  
                <div className="fixed top-[405px] right-[6%]">
                  <button className="btn-controls" onClick={() => setStartTimer(true)}>Start</button>
                  <button className="btn-controls" onClick={onPause}>Pause</button>
                  <button className="btn-controls" onClick={onReset}>Reset</button>
                </div>
                }
            
              <div className="fixed top-[465px] right-[7%]">
                <span className="talk-timer">{("0" + Math.floor((timer / 60000) % 60)).slice(-1) + ":"}</span>
                <span className="talk-timer">{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
              </div>                  
        </> 

            :     
                        
            deviceScroll > 326 && <TalkOn alt="talk icon" height="100" width={deviceWidth >= 950 ? 100 : deviceWidth >= 650 ? 80 : deviceWidth >= 500 ? 65 : 55} fill="#d6e9eb" className="fixed top-[340px] mx-8 right-[0%] sm:mx-12 lg:top-[325px] lg:right-[2%] lg:mx-24" onClick={toggleTimer}></TalkOn>
        }
      </> 
  )
}  


