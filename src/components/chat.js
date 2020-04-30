import React, { useState, useEffect } from "react";
import CommentOutlined from "@ant-design/icons/es/icons/CommentOutlined";
import SendOutlined from "@ant-design/icons/es/icons/SendOutlined";
import RunningChat from "./runningChat";
import DisplayOnlineUsers from "./displayOnlineUsers";
import ChooseUser from "./chooseUser";
import {isLoggedIn} from "../services/auth";
import LoadingOutlined from "@ant-design/icons/es/icons/LoadingOutlined";

export default ({}) => {


    let renderContent;

    const [ expanded, setExpanded ] = useState(false);

    const [ mqtt, setMqtt ] = useState(null);


    const [ renderState, setRenderState ] = useState(0);




    switch (renderState + (isLoggedIn() ? 0 : 100)) {
        case 0:
        case 1:
        case 101:
        case 102:
            renderContent = <ChooseUser loading={(renderState === 1 || renderState === 102)}
                                        renderState={renderState}
                                        setRenderState={setRenderState}
                                        setMqtt={setMqtt}
            />;
            break;
        case 2:

            break;

        case 100:
            renderContent = (<DisplayOnlineUsers/>);
            break;
        default:
            renderContent = (
                <div className="h-full w-full flex items-center justify-center ">
                    <LoadingOutlined className="text-2xl font-bold"/>
                    <p className="text-2xl font-bold ml-3">loading...</p>
                </div>
            )
            break;
    }


    return(
        <div className="w-full absolute z-40 bottom-0 right-0 lg:pl-2 lg:pr-2 ">

            <div className="flex justify-between items-center bg-accent w-full border-t border-r border-l border-primary rounded-t h-12 cursor-pointer "
                 onClick={() => setExpanded(!expanded)}>

                <CommentOutlined className="text-2xl ml-3"/>

                <p className="text-2xl">Chat</p>

                <p className="text-2xl mr-3">(0)</p>

            </div>

            <div className={"bg-primary  transform duration-100 " + (!expanded ? " h-0" : "")}>
                <div className="overflow-hidden">
                    <div className={"flex flex-col-reverse border border-primary border-collapse transform duration-100  p-1 message-wrapper overflow-auto " + (expanded ? "h-64" : "h-0")}>

                        {renderContent}

                    </div>
                </div>
                <div className=" w-full  border-r border-l  border-primary ">

                    <form onSubmit={(event) => this.handleCHatMessageSubmit(event)}>

                        <div className="flex justify-between items-center h-8">

                            <input type="text " placeholder="schreibe eine Nachricht..." className="focus:outline-none pl-2 w-full h-full bg-primary"/>
                            <button type="submit" className="text-2xl mb-2" >
                                <SendOutlined />
                            </button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    )

}