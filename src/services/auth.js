import {connectMqtt} from "../services/connectMqtt";

export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("gatsbyUser")
        ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
        : {};

const setUser = user =>
    window.localStorage.setItem("gatsbyUser", (user));

export const handleLogin = async (credentials) => {

    return new Promise((resolve, reject) => {

        connectMqtt(credentials).then((mqtt) => {
            mqtt.publish("user", JSON.stringify(credentials), 2, true);
            mqtt.subscribe("user");

            mqtt.onMessageArrived = (msg) => {

                if (msg.topic === "user") {
                    // console.log("message arrived: ", msg.payloadString, msg.topic);
                    setUser(msg.payloadString);
                    mqtt.disconnect();
                    resolve();
                }
            }
        }).catch(e => reject(e));


    })




};


export const isMqttAdmin = async (mqtt) => {


    return new Promise((resolve, reject) => {
        if (!mqtt)
            reject();

            mqtt.subscribe("user");

            mqtt.onMessageArrived = (msg) => {

                console.log("message in auth arrived", msg);

                if (msg.topic === "user") {
                    resolve();
                    mqtt.unsubscribe("user");
                }
            };
        setTimeout(() => (
            reject("error")
        ), 1000)

    })





};

export const isLoggedIn = () => {
    const user = getUser();

    return !!user.username
};

export const logout = callback => {
    setUser("{}");
    callback()
};