import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

/**
 * Diese Funktion hat Michi gemacht
 * @param title
 * @param extra
 * @param children
 * @returns {*}
 * @constructor
 */
const Collapse = ({ title, extra, children }) =>  {

    const [open, setOpen] = useState(false);

    return (
        <div className="border-collapse">
            <div className="w-full border-b border-primary  flex h-10 collapse-header cursor-pointer" onClick={() => setOpen(!open)}>
                <span className="image-wrapper">
                    <FontAwesomeIcon icon="chevron-right" className={"transform image-center-vertical transition-all duration-300 " + (open ? "rotate-90" : "")}/>
                </span>
                <div className="text-sm sm:text-lg relative ml-6 w-full">
                    <p className="text-center-vertical float-left">{ title }</p>
                    <p className="float-right text-center-vertical mr-6 overflow-hidden">{ extra }</p>
                </div>
            </div>
            <div className="w-full h-full border-b border-primary overflow-auto transition-all duration-500 h-auto"
                 style={{ maxHeight: open ? "1000px" : "0" }}>
                { children }
            </div>
        </div>
    )
};

export default Collapse;