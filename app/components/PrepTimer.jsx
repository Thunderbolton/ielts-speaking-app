'use client'

import { useState, useEffect } from "react"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import useWindowResize from "./useWindowResize"
import SmallScreenControls from "./SmallScreenControls"


export default function PrepTimer () {

    const { deviceSize, isSmallScreen, setIsSmallScreen } = useWindowResize()

    useEffect(() => {
        if(deviceSize <= 950)
            setIsSmallScreen(true)
        if(deviceSize > 950)
            setIsSmallScreen(false)
      });


    const renderTime = ({ remainingTime }) => {
    
        return <div>
                    <div className="prep-timer-time">{remainingTime}</div>
                </div>;
        }

    const [showTimer, setShowTimer] = useState(false);
    const [startTimer, setStartTimer] = useState(false); 
    const [key, setKey] = useState(0);

    const toggleTimer = () => {
            setShowTimer(!showTimer);
        };

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
    
    
    return (        
        <>
              <div className="toggle-timer-parent">
                 <button onClick={toggleTimer}>{!showTimer ? 'Show Prep Timer' : 'Hide Prep Timer'}</button>
              </div>
            
            {showTimer && 
                <>
                    {isSmallScreen ?
                    
                             <SmallScreenControls className="small-screen-controls left-[6%] sm:left-[7.7%]" onStart={onStart} onPause={onPause} onReset={onReset}/>
                       
                        : 
                        
                            <div className="fixed top-[335px] left-[6%]">
                                <button className="btn-controls" onClick={onStart}>Start</button>
                                <button className="btn-controls" onClick={onPause}>Pause</button>
                                <button className="btn-controls" onClick={onReset}>Reset</button>
                            </div> 
                    }
                        
                            <div className="fixed top-[405px] left-[6%]">
                                <CountdownCircleTimer 
                                    isPlaying={startTimer ? true : false}
                                    duration={60}
                                    key={key}
                                    size={deviceSize >= 950 ? 180 : deviceSize >= 650 ? 120 : deviceSize >= 500 ? 90 : 60}
                                    strokeWidth={deviceSize >= 500 ? 6 : 4}
                                    colors="green"
                                >
                                {renderTime}
                                </CountdownCircleTimer> 
                            </div>
                </>    
            }
        </> 
    )
}