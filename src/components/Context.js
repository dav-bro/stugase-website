// import MQTT from "mqtt"
import React from "react"
import "../utils/i18n"
import { library } from '@fortawesome/fontawesome-svg-core';

// import connectMqtt from "../services/connectMqtt";
import MQTT from "paho-mqtt"

import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

import { faGlassCheers, faUsers, faCalendarCheck,
    faQuestion, faTimesCircle, faPlusCircle,
    faUserCircle, faAdjust, faBars, faCommentAlt, faChevronRight,
    faChevronLeft, faExternalLinkAlt, faCalendar, faChevronUp, faChevronDown, faCheck, faCommentDots, faCheckCircle, faPaperPlane, faSpinner, faRedo, faSignInAlt } from "@fortawesome/free-solid-svg-icons";



library.add(faGlassCheers, faUsers, faCalendarCheck,
    faQuestion, faTimesCircle, faPlusCircle, faGithub,
    faUserCircle, faAdjust, faBars, faCommentAlt, faChevronRight,
    faChevronLeft, faExternalLinkAlt, faCalendar, faChevronUp, faChevronDown, faCheck,
    faCommentDots, faCheckCircle, faPaperPlane, faSpinner, faRedo, faSignInAlt);



const defaultMqttOptions={
    url: "m20.cloudmqtt.com",
    port: 39860,
    clientId:"StugA-Chat_" + Math.random().toString(16).substr(2, 8),
    username: "user",
    password: "{6pU|N+dRW9#t73S",
};

const locales = ["de", "en"];

const defaultContextValue = {
    data: {
        // set your initial data shape here
        theme: "light",
        locale: locales[0],
        mqtt: null
    },
    set: () => {},
    setTheme: () => {},
    loginMqtt: () => {}
};

const { Provider, Consumer } = React.createContext(defaultContextValue);

const themes = [
    "light",
    "dark"
];

class ContextProviderComponent extends React.Component {
    constructor() {
        super();

        this.setData = this.setData.bind(this);
        this.setTheme = this.setTheme.bind(this);
        this.loginMqtt = this.loginMqtt.bind(this);
        this.state = {
            ...defaultContextValue,
            set: this.setData,
            setTheme: this.setTheme,
            loginMqtt: this.loginMqtt
        }
    }


    componentDidMount() {
        // i18next.init();
        let d = document.documentElement;
        d.classList.add("theme-light");
        // this.loginMqtt();
    }

    setData(newData) {
        this.setState(state => ({
            data: {
                ...state.data,
                ...newData,
            },
        }))
    }

    setTheme(newTheme) {
        if (!newTheme) {
            const ind = themes.indexOf(this.state.data.theme);
            newTheme = (ind === themes.length - 1) ? themes[0] : themes[ind + 1];
        }
        let d = document.documentElement;


        console.log("removing: ", "theme-" + this.state.data.theme);


        d.classList.remove(("theme-" + this.state.data.theme));

        d.classList.add("theme-" + newTheme);



        // d.classList.add("theme-light");
        this.setState(state => ({
            data: {
                ...state.data,
                theme: newTheme
            },
        }));
        console.log(this.state)
    }

    loginMqtt(username, password) {

        console.log("connecting mqtt:: ");


        if (this.state.mqtt)
            this.state.mqtt.disconnect();


        let client = new MQTT.Client(defaultMqttOptions.url, defaultMqttOptions.port, "", defaultMqttOptions.clientId);

        client.connect({
            userName: username ? username : defaultMqttOptions.username,
            password: password ? password : defaultMqttOptions.password,
            useSSL: true,
            onSuccess: () => {
                console.log("connected! ", client);
                this.setState(state => ({
                    data: {
                        ...state.data,
                        mqtt: client
                    },
                }));
            }
        })

        return client;

        // connectMqtt();

/*

            let mqtt = MQTT.connectMqtt(mqttUrl, options);


            mqtt.on('connectMqtt', (m) => {
                console.log("connected: ", m);
                this.setState(state => ({
                    data: {
                        ...state.data,
                        mqtt: mqtt
                    },
                }));
            })
*/



    }


    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>
    }
}

export { Consumer as default, ContextProviderComponent }