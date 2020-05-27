import React from "react";


export default ({type, onClick, className, noStyle, children, ...props}) => {


    if(!noStyle) {

        switch(type) {
            case "error":
                className += "  focus:outline-none bg-red-500 text-white p-2 rounded-sm flex flex-row justify-center items-center ";
                break;
            case "primary":
            default:

                className += " bg-btn-primary text-white p-2  rounded-sm flex flex-row justify-center items-center";
                break;
        }

        className += " hover:opacity-75 hover:scale-110 transform"

    }

    return(
        <button className={className} onClick={onClick}>{children}</button>
    )
}
