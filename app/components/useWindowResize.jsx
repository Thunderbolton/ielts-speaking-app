import { useState, useEffect } from "react";


export default function useWindowResize() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [deviceWidth, setDeviceWidth] = useState(0)
    const [deviceHeight, setDeviceHeight] = useState(0)


    const handleWindowResize = () => {
      setDeviceWidth(window.innerWidth);
      setDeviceHeight(window.innerHeight);
    }


    useEffect(() => {    
        handleWindowResize();      
    
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
      }, );

      return { deviceWidth, deviceHeight, isSmallScreen, setIsSmallScreen }
}