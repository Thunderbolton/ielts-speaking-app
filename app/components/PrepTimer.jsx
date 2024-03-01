'use client'

import { useState, useEffect } from "react"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import useWindowResize from "./useWindowResize"
import SmallScreenControls from "./SmallScreenControls"


export default function PrepTimer () {

    const { deviceWidth, isSmallScreen, setIsSmallScreen } = useWindowResize()

    useEffect(() => {
        if(deviceWidth <= 950)
            setIsSmallScreen(true)
        if(deviceWidth > 950)
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
            <button className="toggle-timer-parent" 
           onClick={toggleTimer} >{!showTimer ? 'Show prep timer' : isSmallScreen ?  'Hide' : 'Hide'}</button>
            
            {showTimer && 
                <>
                    {isSmallScreen ?
                        <>
                            <SmallScreenControls className="small-screen-controls left-[6%] sm:left-[7.7%]" onStart={onStart} onPause={onPause} onReset={onReset}/>
                            <img
                                src="hide-svg.svg"
                                width={deviceWidth >= 650 ? 30 : deviceWidth >= 500 ? 25 : 20 }
                                height="20"
                                className="fixed top-[390px] sm:top-[370px] mx-4 left-[6.9%] sm:left-[6.5%] sm:mx-8 md:left-[7.5%]"
                                onClick={toggleTimer}
                            /> 
                        </>        
                        
                       
                        : 
                        
                            <div className="fixed top-[405px] left-[6%]">
                                <button className="btn-controls" onClick={onStart}>Start</button>
                                <button className="btn-controls" onClick={onPause}>Pause</button>
                                <button className="btn-controls" onClick={onReset}>Reset</button>
                            </div> 
                    }
                        
                            <div className="fixed top-[455px] md:top-[465px] lg:top-[475px] left-[6%]">
                                <CountdownCircleTimer 
                                    isPlaying={startTimer ? true : false}
                                    duration={60}
                                    key={key}
                                    size={deviceWidth >= 950 ? 180 : deviceWidth >= 650 ? 120 : deviceWidth >= 500 ? 90 : 60}
                                    strokeWidth={deviceWidth >= 500 ? 6 : 4}
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