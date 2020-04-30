import React, { useState, useEffect } from "react";
import {connectMqtt} from "../services/connectMqtt";
import Button from "./button";



const DisplayOnlineUsers = ({}) => {


    const [ mqtt, setMqtt ] = useState(null);


    const [ onlineUsers, setOnlineUsers ] = useState([]);


    useEffect(() => {

        connectMqtt({}).then((client) => {
                setMqtt(client);
                console.log("in display connected");
                client.subscribe("chat/admin/user/#");
                client.onMessageArrived = (msg) => {
                    let topic = msg.topic;
                    console.log("message arrived: ", msg);
                    if (topic.includes("chat/admin/user/") && msg.payloadString === "online") {
                        console.log("users++");
                        let user = topic.substr(16, topic.length - 1);
                        console.log("users++ ", user);
                        if (!onlineUsers.includes(user)) {
                            onlineUsers.push(user);
                            setOnlineUsers(onlineUsers);
                        }
                    }
                }



            }).catch(e => console.error(e));

    }, []);

    let chatUsers = onlineUsers.map((x) => (
            <ul>
                <li className="mt-1 mb-1 bg-menu-secondary">
                    <div className="flex justify-between items-center">
                        <p>{x}</p>
                        <Button className="float-right" onCLick={() => this.setState()}>start chat</Button>
                    </div>
                </li>
            </ul>
        )
    );

    return(
        <>
            <p className="text-xl "> {onlineUsers.length} users online</p>
            {chatUsers}
        </>
    )
};

export default DisplayOnlineUsers;