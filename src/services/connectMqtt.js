import MQTT from "paho-mqtt";

const DEFAULT_OPTIONS = {
    url: "m20.cloudmqtt.com",
    port: 39860,
    clientId:"StugA-Chat_" + Math.random().toString(16).substr(2, 8),
    username: "user",
    password: "{6pU|N+dRW9#t73S",
};



export const connectMqtt = async (customOpts, will) => {

    let client = new MQTT.Client(customOpts.url ? customOpts.url : DEFAULT_OPTIONS.url, customOpts.port ? customOpts.port : DEFAULT_OPTIONS.port, "", customOpts.clientId ? customOpts.clientId : DEFAULT_OPTIONS.clientId);


    console.log("connecting to mqtt: ", customOpts, will, client);

    let options = {
        userName: customOpts.username ? customOpts.username : DEFAULT_OPTIONS.username,
        password: customOpts.password ? customOpts.password : DEFAULT_OPTIONS.password,
        useSSL: true,
    };

    if (will)
        options.willMessage = will;


    return new Promise((resolve, reject) => {

        client.connect({
            ...options,
            onSuccess: () => {
                console.log("connected!!!!!!!");
                resolve(client);
            },
            onFailure: (error) => {
                console.error(error);
                reject(error);
            }
        });
    })



}

/**
 * @param {object} args
 * @param {{id?: string, host: string, port: number, username: string, password: string}} args.server
 * @param {string} args.willMessage
 * @return {Promise<MQTT>}
 */
/*
export default function connectMqtt({ server, willMessage }) {
    return new Promise((resolve, reject) => {
        const client = mqtt.connectMqtt({
            ...DEFAULT_OPTIONS,
            host: server.host,
            port: server.port,
            username: server.username,
            password: server.password,
            will: willMessage
        });
        client.on("connectMqtt", () => resolve(client));
        client.on("close", () => reject(new Error("failed connectMqtt!")));
        client.on("error", err => reject(err));
    });
}*/
