import React, { useEffect, useState } from "react";
import TimePickerClock24 from "./timePickerClock24";
import TimePickerClock60 from "./timePickerClock60";
import Modal from "./modal";



const TimePicker = ({setTime}) => {


    const [ minutes, setMinutes ] = useState(0);
    const [ hours, setHours ] = useState(0);
    const [ renderState, setRenderState ] = useState(0);


    useEffect(() => {
        setTime({hours: hours, minutes: minutes})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[minutes ,hours]);

    return(
        <div className={" flex flex-row  items-center  " } >
            {/* eslint jsx-a11y/click-events-have-key-events: "off", jsx-a11y/no-noninteractive-element-interactions: "off"  */}
            <p className={"cursor-pointer"}
               onClick={() => setRenderState(1)}
            >
                {hours < 10 ? "0" + hours : hours}
            </p>
            <p className=" -mt-1 mx-1">:</p>
            {/* eslint jsx-a11y/click-events-have-key-events: "off", jsx-a11y/no-noninteractive-element-interactions: "off"  */}
            <p className={" cursor-pointer " }
               onClick={() => setRenderState(2)}
            >
                {minutes < 10 ? "0" + minutes : minutes}
            </p>
            <Modal enabled={renderState > 0} setEnabled={(x) => setRenderState(x ? renderState : 0)}>
                <div className="relative bg-primary rounded-full" style={{width: 402, height: 402}}>
                    <div className={"absolute top-0 left-0 transform duration-300 overflow-hidden z-10 " + (renderState === 1 ? "scale-100" : "scale-0")}>
                        <TimePickerClock24 max={12} setHours={setHours} setRenderState={setRenderState}/>
                    </div>
                    <div className={"absolute top-0 left-0 transform duration-300 z-10 " + (renderState === 2 ? "scale-100" : "scale-0")}>
                        <TimePickerClock60 setMinutes={setMinutes} setRenderState={setRenderState} />
                    </div>
                    <div className="absolute flex flex-row  items-center justify-center -ml-12 -mt-16 z-10" style={{top: "50%", left: "50%"}}>
                        {/* eslint jsx-a11y/click-events-have-key-events: "off", jsx-a11y/no-noninteractive-element-interactions: "off"  */}
                        <p className={"text-3xl text-primary font-bold transform duration-300 cursor-pointer  " + (renderState === 1 ? "scale-100 mr-2" : "scale-75 opacity-50") }
                           onClick={() => setRenderState(1)}
                        >
                            {hours < 10 ? "0" + hours : hours}
                        </p>
                        <p className="text-3xl text-primary font-bold -mt-2">:</p>
                        <p className={"text-3xl text-primary font-bold cursor-pointer transform duration-300 " + (renderState === 2 ? "scale-100 ml-2" : "scale-75 opacity-50") }
                           onClick={() => setRenderState(2)}
                        >
                            {minutes < 10 ? "0" + minutes : minutes}
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    )


};


export default TimePicker;