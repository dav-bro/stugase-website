import React from "react";

export default ({children, position, text}) => (
    <div className={"mr-2 tooltip tooltip-" + position}>
        {children}
        <span className={"hidden lg:block tooltip-text tooltip-text-" + position }>
            {text }
        </span>
    </div>
)
