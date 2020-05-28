import React, { useState, useEffect } from "react";
import getMqttPrefix from "../services/getMqttPrefix";


export default ({ mqtt, otherUser, ownMessages }) => {


    const subscription = getMqttPrefix() + otherUser + "/messages";

    const [ otherMessages, setOtherMessages ] = useState([]);

    mqtt.onMessageArrived = (msg) => {
        console.log("message in running chat received: ", msg);
        if (msg.topic === subscription){
            let message = JSON.parse(msg.payloadString);
            console.log("set message", message);
            setOtherMessages(otherMessages.concat(message))
        }
    };

    useEffect(() => {

        mqtt.subscribe(subscription);
        console.log("subscribed to: " + subscription);

    });

    ownMessages.forEach(val => (
        val.author = 1
    ));


    let messages = otherMessages.concat(ownMessages);

    messages.sort((a, b) => {
       return b.exactTime - a.exactTime;
    });

    return (messages.map(x => {

        switch (x.author) {
            default:
            case 0:
                return (
                    <div className=" ">
                        <div className="float-left mr-4 mt-1">
                            <div className="rounded-lg p-1 pl-2 pr-2 message-left">
                                {x.message}
                            </div>
                            <p className="text-xs text-gray-500 float-right">{x.time}</p>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <div className="float-right ml-4 mt-1">
                            <div className="rounded-lg p-1 pl-2 pr-2 message-right">
                                {x.message}
                            </div>
                            <p className="text-xs text-gray-600 float-left">{x.time}</p>
                        </div>
                    </div>
                );
        }
    }))

}