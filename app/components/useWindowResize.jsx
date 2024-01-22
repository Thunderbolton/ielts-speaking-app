import { useState, useEffect } from "react";


export default function useWindowResize () {

    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    useEffect(() => {
        const resizeW = () => changeDeviceSize(window.innerWidth);
    
        window.addEventListener("resize", resizeW);

        // if(deviceSize <= 640)
        //     setIsSmallScreen(true)
        // if(deviceSize > 640)
        //     setIsSmallScreen(false)

        return () => window.removeEventListener("resize", resizeW);
      });

      return { deviceSize, isSmallScreen, setIsSmallScreen }
}