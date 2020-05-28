import React from "react";
import ContextConsumer from "./context";

export default ({ children, header, footer}) => {

    // const { t } = props;

    return(
        <ContextConsumer>
            {({  }) => (

            <div className={"max-w-sm  overflow-hidden border border-primary shadow-lg mt-3 card"} >

                <div className={"text-sm sm:text-lg font-bold mb-2 border-b border-primary "} >
                    {header}
                </div>
                <div>
                    {children}
                </div>
                <div className={"px-6 py-4 border-t border-primary border-top"}>
                    {footer}
                </div>

            </div>
            )}
        </ContextConsumer>
            )};






