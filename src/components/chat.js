import React, { useState } from "react";
import RunningChat from "./runningChat";
import DisplayOnlineUsers from "./displayOnlineUsers";
import ChooseUser from "./chooseUser";
import {isLoggedIn} from "../services/auth";
import getMqttPrefix from "../services/getMqttPrefix";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default () => {


    let renderContent;

    const [ expanded, setExpanded ] = useState(false);

    const [ mqtt, setMqtt ] = useState(null);

    let  header = "chat";

    let chatHint = "not connected";

    const [ ownUser, setOwnUser ] = useState(null);

    const [ ownMessages, setOwnMessages ] = useState([]);

    const [ otherUser, setOtherUser ] = useState(null);

    const [ renderState, setRenderState ] = useState(0);



    const switchRenderState = renderState + (isLoggedIn() ? 0 : 100);

    switch (switchRenderState) {
        case 101:
        case 102:
            header = "chat mit " + otherUser;
        /* falls through */
        case 0:
        case 1:

            renderContent = <ChooseUser loading={(switchRenderState === 1 || switchRenderState === 102)}
                                        renderState={renderState}
                                        setRenderState={setRenderState}

                                        setOwnUser={setOwnUser}

                                        setMqtt={setMqtt}
            />;
            break;
        case 2:


            header = "angemeldet als " + ownUser;

            chatHint = "chatte als " + ownUser;

            renderContent = (
              <DisplayOnlineUsers renderState={renderState} setRenderState={setRenderState}
                                  setOtherUser={setOtherUser}
                                  mqtt={mqtt}
                                  setMqtt={setMqtt}
              />
            );

            break;

        case 100:
            renderContent = (<DisplayOnlineUsers renderState={renderState} setRenderState={setRenderState}
                                                 setOtherUser={setOtherUser}

            />);
            break;

        case 3:
        case 103:

            header = "chat mit " + otherUser;

            chatHint = "chatte als " + ownUser;

            renderContent = (<RunningChat mqtt={mqtt} ownUser={ownUser} otherUser={otherUser} ownMessages={ownMessages}/>);

            break;
        default:
            renderContent = (
                <div className="h-full w-full flex items-center justify-center ">
                    <FontAwesomeIcon icon="spinner" className="fa-spin"/>
                    <p className="text-2xl font-bold ml-3">loading...</p>
                </div>
            );
            break;
    }


    const handleChatMessageSubmit = (e) => {
        e.preventDefault();

        let msg = e.target["chat-text"].value;
        const date = new Date();

        e.target["chat-text"].value = "";

        let sendMessage = {
            author: 0,
            time: date.getHours() + ":" + date.getMinutes(),
            exactTime: date.getTime(),
            message: msg
        };

        setOwnMessages(ownMessages.concat(sendMessage));

        console.log("publishing message: ", sendMessage, " to: ", getMqttPrefix(true) + ownUser + "/messages");

        mqtt.publish(getMqttPrefix(true) + ownUser + "/messages", JSON.stringify(sendMessage), 2, false);



    };


    return(
        <div className="w-full absolute z-40 bottom-0 right-0 lg:pl-2 lg:pr-2 ">
            {/* eslint jsx-a11y/click-events-have-key-events: "off",  jsx-a11y/no-static-element-interactions: "off" */}
            <div className="flex justify-between items-center bg-accent w-full border-t border-r border-l border-primary rounded-t h-12 cursor-pointer "
                 onClick={() => setExpanded(!expanded)}>

                <FontAwesomeIcon icon="comment-dots" className="text-3xl"/>

                <p className="text-2xl">{header}</p>

                <p className="text-2xl mr-3">(0)</p>

            </div>

            <div className={"bg-primary  transform duration-100 " + (!expanded ? " h-0" : "")}>
                <div className="overflow-hidden">
                    <div className={"flex flex-col-reverse border border-primary border-collapse transform duration-100  p-1 message-wrapper overflow-auto " + (expanded ? "h-64" : "h-0")}>

                        {renderContent}

                    </div>
                </div>
                <div className=" w-full  border-r border-l  border-primary ">

                    <form onSubmit={(event) => handleChatMessageSubmit(event)} >

                        <div className="flex justify-between items-center h-8">

                            <input type="text " placeholder={chatHint}
                                   id="chat-text"
                                   name="chat-text"
                                   className="focus:outline-none pl-2 w-full h-full bg-primary" disabled={!(renderState === 3 || renderState === 103)}/>
                            <button type="submit" className="text-2xl mb-2 focus:outline-none" disabled={!(renderState === 3 || renderState === 103)}>

                                <FontAwesomeIcon icon="paper-plane" className=""/>
                            </button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    )


}