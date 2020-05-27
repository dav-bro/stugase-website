import React, { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";


const Modal = ({ enabled, setEnabled, children }) => {

    const [ close, setClose ] = useState(false);
    const [ innerEnabled, setInnerEnabled ] = useState(false);

    useEffect(() => {

        setInnerEnabled(enabled)



    }, [enabled]);


    return(
        enabled ?
            (
                <div className={"bg-disabled"}>
                        <div className="flex flex-col h-full justify-between items-center">

                            <div className="h-20 w-full flex  justify-center" onMouseOver={() => setClose(true)} onMouseLeave={() => setClose(false)}>
                                <FontAwesomeIcon icon="times-circle" className={"overflow-hidden duration-300 transition-all text-6xl cursor-pointer " + (close ? "h-20" : innerEnabled ? "h-20 md:h-0" : "h-0")}
                                onClick={() => {
                                    setInnerEnabled(false);
                                    setTimeout(() => (setEnabled(false)), 300);

                                }}/>
                            </div>

                            <div className={"transform duration-300 " + (innerEnabled ? "scale-100" : "scale-0")}>{children}</div>

                            <div className="h-20"/>

                        </div>
                </div>
            ) : null
    )
};



export default Modal;