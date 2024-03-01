import useWindowResize from "./useWindowResize"

export default function SmallScreenControls ({ onStart, onPause, onReset, className }) {


    const { deviceWidth } = useWindowResize()

    const resizeWidth = deviceWidth >= 650 ? 30 : deviceWidth >= 500 ? 25 : 20;
    

    return (
        <div className={className}> 
                <img
                    src="play-svg.svg"
                    width={resizeWidth}
                    height="20"
                    onClick={onStart}
                />         
                <img
                    src="pause-svg.svg"
                    width={resizeWidth}
                    height="20"                                  
                    onClick={onPause}
                />
                <img
                    src="refresh-svg.svg"
                    width={resizeWidth}
                    height="20"
                    onClick={onReset}
                />            
        </div>
        
    )
}