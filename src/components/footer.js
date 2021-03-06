import React from "react";
import ToolTip from "./tooltip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

export default () => (
    <div className="flex justify-center bottom-0 w-full bg-accent h-16 border-t border-primary shadow shadow-all  text center  flex-shrink-0">

        <ToolTip
            position="top"
            text="Der Code auf GitHub"
        >
            <FontAwesomeIcon icon={['fab', 'github']} className="mt-4 text-2xl cursor-pointer" onClick={() => window.open("https://github.com/dav-bro/stugase-website")}/>
        </ToolTip>


    </div>
)