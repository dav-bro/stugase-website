import React, { useEffect, useState } from "react";
import {getUser, isLoggedIn} from "../services/auth";
import Button from "./button";
import {connectMqtt} from "../services/connectMqtt";
import MQTT from "paho-mqtt";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




const chooseUser = ({ loading, renderState, setRenderState, setMqtt, setOwnUser }) => {

    const handleSetUserNameSubmit = (e) => {
        e.preventDefault();

        setRenderState(renderState + 1);

        let username = e.target["mqtt-username"].value;

        let credentials = isLoggedIn() ? getUser() : {};

        let willTopic = "chat/" + (isLoggedIn() ? "admin/" : "") + "user/" + username + "/status";

        let will = new MQTT.Message("");
        will.destinationName = willTopic;
        will.qos = 2;
        will.retained = true;

        connectMqtt(credentials, will).then((mqtt) => {
            mqtt.publish(willTopic, "online", 2, true);
            setMqtt(mqtt);
            setRenderState(renderState + 2);
            setOwnUser(username);


        }).catch(e => console.log(e));

    };

    return (
        <div className="p-3 w-full">

            <form
                method="post"
                onSubmit={e => handleSetUserNameSubmit(e, renderState, setRenderState, setMqtt)}
            >

                <div className="flex flex-col w-full mb-3 ">


                    <div className="w-full text-left pt-2 pr-4 font-bold mb-2">

                        <label htmlFor={"user-name"}>Benutzername</label>

                    </div>
                    <div className="w-full pr-2 ">

                        <input
                            className={"bg-input shadow appearance-none border rounded w-full py-2 px-3 leading-tight "}
                            id={"mqtt-username"}
                            name={"mqtt-username"}
                            type={"text"}
                            placeholder={"username"}
                            // onChange={this.handleUpdate}
                        />

                    </div>
                </div>

                <Button className="w-full text-left">
                    {
                        !loading ?
                            (
                                <>
                                    <FontAwesomeIcon icon="check-circle" className=""/>
                                    <p className="ml-4"> {isLoggedIn() ? "als Online setzen" : "chatten"} </p>
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon="spinner" className="fa-spin"/>
                                    <p className="ml-4"> verbinde </p>
                                </>
                            )
                    }
                </Button>

            </form>

        </div>
    );




};
/*
handleSetUserNameSubmit = (e) =>{
    e.preventDefault();

    this.increaseRenderState();

    let username = e.target["mqtt-username"].value;

    let credentials = isLoggedIn() ? getUser() : {};

    let willTopic = "chat/" + (isLoggedIn() ? "admin/" : "") + "user/" + username + "/status";

    let will = new MQTT.Message("");
    will.destinationName = willTopic;
    will.qos = 2;
    will.retained = true;

    connectMqtt(credentials, will).then((mqtt) => {
        mqtt.publish(willTopic, "online", 2, true);
        this.setState({renderState: this.state.renderState + 1, mqtt: mqtt});

    }).catch(e => console.log(e));

}*/
export default chooseUser;