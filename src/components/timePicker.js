import React, { useEffect, useState } from "react";
import TimePickerClock24 from "./timePickerClock24";
import TimePickerClock60 from "./timePickerClock60";



const TimePicker = ({}) => {


    const [ minutes, setMinutes ] = useState(0);
    const [ hours, setHours ] = useState(0);
    const [ renderState, setRenderState ] = useState(0);

    return(
        <div className="relative" style={{width: 402, height: 402}}>
            <div className={"absolute top-0 left-0 transform duration-300 overflow-hidden z-10 " + (renderState === 0 ? "scale-100" : "scale-0")}>
                <TimePickerClock24 max={12} setHours={setHours} setRenderState={setRenderState}/>
            </div>
            <div className={"absolute top-0 left-0 transform duration-300 z-10 " + (renderState === 1 ? "scale-100" : "scale-0")}>
                <TimePickerClock60 setMinutes={setMinutes} setRenderState={setRenderState} />
            </div>
            <div className="absolute flex flex-row  items-center justify-center -ml-12 -mt-16 z-10" style={{top: "50%", left: "50%"}}>
                <p className={"text-3xl font-bold transform duration-300 cursor-pointer  " + (renderState === 0 ? "scale-100 mr-2" : "scale-75 opacity-25") }
                    onClick={() => setRenderState(0)}
                    >
                        {hours < 10 ? "0" + hours : hours}
                    </p>
                <p className="text-3xl font-bold -mt-2">:</p>
                <p className={"text-3xl font-bold cursor-pointer transform duration-300 " + (renderState === 1 ? "scale-100 ml-2" : "scale-75 opacity-25") }
                   onClick={() => setRenderState(1)}
                >
                    {minutes < 10 ? "0" + minutes : minutes}
                </p>
            </div>
        </div>
    )


};

export default TimePicker;