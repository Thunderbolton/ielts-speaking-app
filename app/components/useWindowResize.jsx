import { useState, useEffect } from "react";


export default function useWindowResize() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [deviceWidth, setDeviceWidth] = useState(0)

    const handleWindowResize = () => {
      setDeviceWidth(window.innerWidth);
    }


    useEffect(() => {    
        handleWindowResize();      
    
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
      }, );

      return { deviceWidth, isSmallScreen, setIsSmallScreen }
}