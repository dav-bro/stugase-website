import mqtt from "mqtt";

const DEFAULT_OPTIONS = {
    protocol: "wss",
    protocolId: "MQIsdp",
    protocolVersion: 3,
    reconnectPeriod: 0,
    keepalive: 10
};

/**
 * @param {object} args
 * @param {{id?: string, host: string, port: number, username: string, password: string}} args.server
 * @param {string} args.willMessage
 * @return {Promise<MQTT>}
 */
export default function connect({ server, willMessage }) {
    return new Promise((resolve, reject) => {
        const client = mqtt.connect({
            ...DEFAULT_OPTIONS,
            host: server.host,
            port: server.port,
            username: server.username,
            password: server.password,
            will: willMessage
        });
        client.on("connect", () => resolve(client));
        client.on("close", () => reject(new Error("failed connect!")));
        client.on("error", err => reject(err));
    });
}