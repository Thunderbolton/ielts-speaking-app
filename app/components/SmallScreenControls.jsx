import useWindowResize from "./useWindowResize"

export default function SmallScreenControls ({ onStart, onPause, onReset, className }) {


    const { deviceWidth } = useWindowResize()

    return (
        <div className={className}>     
                <img
                    src="play-svg.svg"
                    width={deviceWidth >= 650 ? 30 : deviceWidth >= 500 ? 25 : 20 }
                    height="20"
                    onClick={onStart}
                />         
                <img
                    src="pause-svg.svg"
                    width={deviceWidth >= 650 ? 30 : deviceWidth >= 500 ? 25 : 20 }
                    height="20"                                  
                    onClick={onPause}
                />
                <img
                    src="refresh-svg.svg"
                    width={deviceWidth >= 650 ? 30 : deviceWidth >= 500 ? 25 : 20 }
                    height="20"
                    onClick={onReset}
                />            
        </div>
        
    )
}