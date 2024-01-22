import useWindowResize from "./useWindowResize"


export default function SmallScreenControls ({ onStart, onPause, onReset, className }) {


    const { deviceSize } = useWindowResize()

    return (
        <div className={className}>     
                <img
                    src="play-svg.svg"
                    width={deviceSize >= 650 ? 30 : deviceSize >= 500 ? 25 : 20 }
                    height="20"
                    onClick={onStart}
                />         
                <img
                    src="pause-svg.svg"
                    width={deviceSize >= 650 ? 30 : deviceSize >= 500 ? 25 : 20 }
                    height="20"                                  
                    onClick={onPause}
                />
                <img
                    src="refresh-svg.svg"
                    width={deviceSize >= 650 ? 30 : deviceSize >= 500 ? 25 : 20 }
                    height="20"
                    onClick={onReset}
                />            
        </div>
        
    )
}