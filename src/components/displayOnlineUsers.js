import React, { useState, useEffect, useMemo } from "react";
import {connectMqtt} from "../services/connectMqtt";
import Button from "./button";
import {isLoggedIn} from "../services/auth";



const DisplayOnlineUsers = ({renderState, setRenderState, setOtherUser, mqtt, setMqtt}) => {


    const [ _mqtt, _setMqtt ] = useState(null);

    const [ count, setCount ] = useState(0);

    const [ onlineUsers, setOnlineUsers ] = useState([]);


    let currentClient = mqtt ? mqtt : _mqtt;


    if (currentClient) {
        console.log("setting handler");
        currentClient.onMessageArrived = (msg) => {
            let topic = msg.topic;
            console.log("message arrived: ", msg);
            let includeTopic = isLoggedIn() ? "chat/user/" : "chat/admin/user/";
            if (topic.includes(includeTopic)) {

                let from = isLoggedIn() ? 10 : 16;
                let length = topic.length - (from + 7);

                let user = topic.substr(from, length);
                if (msg.payloadString === "online") {
                    if (!onlineUsers.includes(user)) {
                        console.log("users++ ", user);
                        setCount(count + 1);
                        setOnlineUsers(onlineUsers.concat(user));
                    }
                } else {
                    setOnlineUsers(onlineUsers.filter(x => x !== user));
                }
            }
        };
    }



    useEffect(() => {

        if (!(mqtt && mqtt.isConnected())) {
            connectMqtt({}).then((client) => {
                _setMqtt(client);
                console.log("in display connected");
                client.subscribe("chat/admin/user/#");


            }).catch(e => console.error(e));
        } else {
            mqtt.subscribe("chat/user/#")
        }

    }, []);


    let chatUsers = isLoggedIn() ?
        onlineUsers[0] ?
        <div className="mt-1 mb-1 bg-menu-secondary" key={"user-" + onlineUsers[0]}>
            <div className="flex justify-between items-center">
                <p>{onlineUsers[0]}</p>
                <Button className="float-right"
                        onClick={() => {
                            console.log("setting render to: ", renderState + 1);
                            setRenderState(renderState + 1);
                            setOtherUser(onlineUsers[0]);
                        }}>start chat</Button>
            </div>
        </div>
            : null
        : onlineUsers.map((x) => (
            <ul>
                <li className="mt-1 mb-1 bg-menu-secondary" key={"user-" + x}>
                    <div className="flex justify-between items-center">
                        <p>{x}</p>
                        <Button className="float-right"
                                onClick={() => {
                                    console.log("setting render to: ", renderState + 1);
                                    setRenderState(renderState + 1);
                                    setOtherUser(x);
                                }}>start chat</Button>
                    </div>
                </li>
            </ul>
    ));


    let text = isLoggedIn() ? (onlineUsers[0] ? onlineUsers[0] + " möchte mit dir chatten" : "keine Chatanfrage") : onlineUsers.length + " User online";

    return(
        <>
            <p className="text-xl "> { text } </p>
            {chatUsers}
        </>
    )
};

export default DisplayOnlineUsers;