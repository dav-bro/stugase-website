import React, { useState, useEffect } from 'react';
import {Trans, useTranslation, withTranslation} from "react-i18next";
import Card from "../components/Card";

import roomPlan from '../static/images/room.jpg';
import campusPlan from '../static/images/campus.jpg';
import {Link} from "gatsby";
import LayoutContent from "../components/LayoutContent";
import ContextConsumer from "../components/Context";
import {ReCAPTCHA} from "react-google-recaptcha";
import Chat from "../components/chat";
import "../static/styles/main.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

import Button  from "../components/button";

const floorPlanLink = "https://oracle-web.zfn.uni-bremen.de/web/p_ebenen_ansicht?haus=IW&raum=1310&pi_anz=0";
const campusPlanLink = "https://www.uni-bremen.de/universitaet/campus/lageplan/";

const mqttUrl = "wss://m20.cloudmqtt.com";







const form = [

    {
        type: 'text',
        name: 'name',
        label: 'Name',
        placeholder: 'name'
    },
    {
        type: 'text',
        name: 'mail',
        label: 'E-Mail',
        placeholder: 'mail'
    },
    {
        type: 'text',
        name: 'betreff',
        label: 'betreff',
        placeholder: 'Betreff'
    },
    {
        type: 'textarea',
        name: 'nachricht',
        label: 'Nachricht',
        placeholder: 'Bitte gib eine Nachricht ein'
    },
    {
        type: 'submit',
        name: 'senden',

    },



];


class ContactClass extends React.Component {



    render() {
        const { t } = this.props;



        return(
            <ContextConsumer>
                {({ data }) => {
                    let theme = data.theme;
                    let mqtt = data.mqtt;

                    return (
                    <LayoutContent theme={theme} title={t('contact.header.title')} text={t('contact.header.text')}>
                        <div key="main-content" className="">

                            <Collapse
                                title={t('contact.office.title')} extra={"IW 1+2, " + t('general.room') + " 1310"}
                                // defaultCollapsed={true}

                            >
                                <div className="m-5">
                                    <Trans i18nKey="contact.office.detail">
                                        you can find us in the <strong>IW 1+2</strong>.
                                    </Trans>


                                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">

                                        <Card
                                            header={<p className="ml-2 ">{t('contact.find-us.room.title')}</p>}
                                            footer={<LinkButton link={floorPlanLink}/>}
                                        >
                                            <img alt="unser StugA Raum im IW 1+2" src={roomPlan}/>
                                        </Card>
                                        <Card
                                            header={t('contact.find-us.campus.title')}
                                            footer={<LinkButton link={campusPlanLink}/>}
                                        >
                                            <img alt="unser StugA Raum auf dem Campus" src={campusPlan}/>
                                        </Card>
                                    </div>


                                </div>
                            </Collapse>

                            <Collapse
                                title={t('contact.consultings.title')}
                            >
                                <div className="m-5">
                                    <Trans i18nKey="contact.consultings.text">
                                    Jede zweite, ungerade Woche <strong>Donnerstags</strong> bieten wir
                                        von <strong> 13:00-15:00 Uhr </strong>
                                        eine Sprechstunde an. In dieser Zeit könnt ihr uns Fragen rund ums Studium
                                        stellen.
                                        Die genauen Termine findet ihr natürlich auch bei <Link
                                            to="dates">Termine</Link>
                                </Trans></div>

                            </Collapse>

                            <Collapse
                            title={t('contact.formula.title')}
                            defaultCollapsed={true}>

                                <Form
                                    theme={theme}
                                >
                                    {form}
                                </Form>

                            </Collapse>


                            <ReCAPTCHA
                                sitekey="6LfdyeAUAAAAAKMaiwzy-V0alf1Cszr2vFUdIXzo"

                                onChange={() => console.log("captcha completed")}
                            />
                        </div>


                        <div key="right-content" className="h-full">

                           <Chat/>

                        </div>

                    </LayoutContent>
                )}}
            </ContextConsumer>

                                    <FontAwesomeIcon icon="comment-alt" className="text-2xl"/>



        )

    }

}



/*
class Chat extends React.Component {





    state={
        mqtt: null,
        expanded: false,
        renderContent: "loading...",
        renderState: 0,
        user: {
            me: "",
            other: ""
        },
        onlineUsers: [],
        messages: [
            {
                author: 0,
                time: "10:07",
                message: "Hallo"
            },
            {
                author: 1,
                time: "10:08",
                message: "hi"
            },
            {
                author: 1,
                time: "10:08",
                message: "ein ganz langer Text mit hoffentlich 2 Zeilen."
            },
            {
                author: 0,
                time: "10:08",
                message: "ein ganz langer Text mit hoffentlich 2 Zeilen."
            },
            {
                author: 1,
                time: "10:08",
                message: "ein ganz langer Text mit hoffentlich 2 Zeilen."
            }
        ]
    }


    componentDidMount() {


    }


    render() {

        let { expanded, messages, renderContent, renderState, onlineUsers, user } = this.state;

        // let chatMessages;

            switch (renderState + (10 * isLoggedIn() ? 0 : 10)) {
                case 0:
                case 1:
                case 101:
                    renderContent = this.renderChooseUser(renderState === 1 || renderState === 102);
                    break;
                case 2:

                    break;
                default:
                    let time = new Date().getSeconds();
                    renderContent = (
                        <div className="h-full w-full flex items-center justify-center ">
                            <LoadingOutlined className="text-2xl font-bold"/>
                            <p className="text-2xl font-bold ml-3">loading...</p>
                        </div>
                    )
                    break;
            }




            /!*

             <ContextConsumer>
            {({loginMqtt, data}) => {
                let mqtt = data.mqtt;

            if (renderState === 2){
                    let subscription = !isLoggedIn() ? ("chat/admin/user/" + user.other) : ("chat/user/" + user.other);
                    mqtt.subscribe(subscription);
                    mqtt.onMessageArrived = (msg) => {
                        console.log("chat message arrived: ", msg.payloadString);
                        if (msg.topic.includes(subscription)){

                            let message = JSON.parse(msg.payloadString);

                            messages.push({
                                author: 0,
                                time: message.time,
                                message: message.message
                            });
                            this.setState({messages: messages});
                        }

                    };

                    return messages.map(x => {

                            switch (x.author) {
                                case 0:
                                    return (
                                        <div className=" ">
                                            <div className="float-left mr-4 mt-1">
                                                <div className="rounded-lg p-1 pl-2 pr-2 message-left" >
                                                    {x.message}
                                                </div>
                                                <p className="text-xs text-gray-500 float-right">{x.time}</p>
                                            </div>
                                        </div>
                                    );
                                case 1:
                                    return (
                                        <div >
                                            <div className="float-right ml-4 mt-1">
                                                <div className="rounded-lg p-1 pl-2 pr-2 message-right" >
                                                    {x.message}
                                                </div>
                                                <p className="text-xs text-gray-600 float-left">{x.time}</p>
                                            </div>
                                        </div>
                                    );
                            }

                        });
                } else {
                    if (isLoggedIn()) {
                        return (
                            null
                        )
                    } else {

                        console.log("mqttttt: ", mqtt);

                        if (mqtt && mqtt.isConnected()) {
                            mqtt.subscribe("chat/admin/user/#");
                            mqtt.onMessageArrived = (msg) => {
                                let topic = msg.topic;
                                if (topic.includes("chat/admin/user/") && msg.payloadString !== "offline") {
                                    console.log("users++");
                                    let user = topic.substr(16, topic.length - 1);
                                    console.log("users++ ", user);
                                    if (!onlineUsers.includes(user)) {
                                        onlineUsers.push(user);
                                        this.setState({onlineUsers: onlineUsers});
                                    }


                                }

                                // mqtt.unsubscribe("chat/admin/user/#");
                            };

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

                            return (
                                <>
                                    <p className="text-xl "> {onlineUsers.length} users online</p>
                                    {chatUsers}
                                </>
                            )
                        } else {


                            return (<p>not connected</p>)
                        }


                    }
                }
            }}
        </ContextConsumer>);


*!/


        return(
            <div className="w-full absolute z-40 bottom-0 right-0 lg:pl-2 lg:pr-2 ">

                <div className="flex justify-between items-center bg-accent w-full border-t border-r border-l border-primary rounded-t h-12 cursor-pointer "
                     onClick={() => this.setState({expanded: !expanded})}>

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

    renderChooseUser(loading) {
        return (
            <div className="p-3 w-full">

                <form
                    method="post"
                    onSubmit={e => this.handleSetUserNameSubmit(e)}
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
                                onChange={this.handleUpdate}
                            />

                        </div>
                    </div>

                    <Button className="w-full text-left">
                        {
                            !loading ?
                                (
                                    <>
                                        <CheckCircleOutlined className=""/>
                                        <p className="ml-4"> {isLoggedIn() ? "als Online setzen" : "chatten"} </p>
                                    </>
                                ) : (
                                    <>
                                        <LoadingOutlined className=""/>
                                        <p className="ml-4"> verbinde </p>
                                    </>
                                )
                        }
                    </Button>

                </form>

            </div>
        )
    }


    handleSetUserNameSubmit(e) {
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

/!*

        if (isLoggedIn())
            this.handleMQTTAdminLogin(username, mqtt, loginMqtt);
        else
            this.handleMQTTLogin(e, mqtt, loginMqtt);;
*!/


    }

    increaseRenderState() {
        this.setState(state => ({
            renderState: state.renderState + 1
        }))
    }


    handleMQTTAdminLogin(username, mqtt, loginMqtt) {



    }

    handleCHatMessageSubmit(event) {

    }

    handleMQTTLogin(e, mqtt, loginMqtt) {

        this.setState({renderState: 1});

        let username = null;

        const connected = () => {
            console.log("connected mqtt admin");

            let topic = "chat/" + (isLoggedIn() ? "admin/" : "") + "user/" + username;

            mqtt.publish("chat/admin/user/" + username, "online", 2, true);
            this.setState({renderState: 2, user: username});
        };


        // console.log("usser: ", e.target["mqtt-username"].value);

        isMqttAdmin(mqtt).then(() =>{
            connected();
        }).catch(() => {
            let user = getUser();
            console.log(user);
            mqtt = loginMqtt(user.username, user.password);

            mqtt.onConnected = () => connected();

        });



    }
}
*/





class Form extends React.Component {



    render() {


        const { children } = this.props;


        let formChildren =  children.map(child => {


            let input;
            let type = child.type;
            let name = child.name;
            let labelText = child.label;
            let placeholder = child.placeholder;
            let id = type + "-" + name;

            let label = child.label ?  <label htmlFor={id}>{labelText}</label> : null;


            switch (type) {
                case "textarea":
                    input = (
                        <textarea
                            className={"h-48 shadow appearance-none border border-accent rounded w-full py-2 px-3 bg-input leading-tight"}
                            id={id}
                            placeholder={placeholder}/>
                    );
                    break;
                case "submit":
                    input = (
                        <input type={type} value={name} className="float-right bg-blue-600 text-white p-2 -ml-3 rounded-sm flex flex-row justify-center items-center pl-4 pr-4"/>
                    );
                    break;
                default:
                case "password":
                case "text":
                    input = (
                        <input
                            className="bg-input  shadow appearance-none border border-accent rounded w-full py-2 px-3 leading-tight  "
                            id={id}
                            type={type}
                            placeholder={placeholder}/>
                    );
                    break;

            }

            return (
                <div className="flex w-full mb-3">
                    <div className="w-0 sm:w-1/3 invisible sm:visible text-right pt-2 pr-4 font-bold">
                        {label}
                    </div>
                    <div className="w-full pr-2 sm:w-2/3">
                        {input}
                    </div>
                </div>
            )

        });

        return(
            <div className="w-full sm:w-1/2 ">
                <form className="m-4 ">
                    <div className="flex flex-col w-full ">

                            {formChildren}


                    </div>


                </form>
            </div>
        );
    }


}




/**
 * Diese Funktion hat Michi gemacht
 * @param title
 * @param extra
 * @param children
 * @returns {*}
 * @constructor
 */
const Collapse = ({ title, extra, children }) =>  {

        const { title, extra, children } = this.props;

        return (
            <div className="border-collapse">
                <div className=" w-full border-b border-primary  flex h-10 collapse-header cursor-pointer" onClick={() => this.setState(s => ({collapsed: !s.collapsed}))}>

                    <span className={"image-wrapper"}>
                        <FontAwesomeIcon icon="chevron-right"  rotate={this.state.collapsed ? 0 : 90} className="image-center-vertical"/>
                    </span>


                    <div className="text-sm sm:text-lg relative ml-6 w-full">
                        <p className=" text-center-vertical float-left"> {title} </p>
                        <p className={" float-right text-center-vertical mr-6 overflow-hidden"}> {extra} </p>
                    </div>
    const [open, setOpen] = useState(false);

    return (
        <div className="border-collapse">
            <div className="w-full border-b border-primary  flex h-10 collapse-header cursor-pointer" onClick={() => setOpen(!open)}>
                <span className="image-wrapper">
                    <RightOutlined rotate={ open ? 0 : 90 } className="image-center-vertical"/>
                </span>
                <div className="text-sm sm:text-lg relative ml-6 w-full">
                    <p className="text-center-vertical float-left">{ title }</p>
                    <p className="float-right text-center-vertical mr-6 overflow-hidden">{ extra }</p>
                </div>
            </div>
            <div className="w-full h-full border-b border-primary overflow-auto transition-all duration-500 h-auto"
                 style={{ maxHeight: open ? "1000px" : "0" }}>
                { children }
            </div>
        </div>
    )
};



function LinkButton(props) {
    const { t } = useTranslation();
    return <button className="bg-btn-primary text-white p-2 -ml-3 rounded-sm flex flex-row justify-center items-center" onClick={() => window.open(props.link)}>
               <FontAwesomeIcon icon="external-link-alt"/>
                <p className="ml-2">{t('contact.find-us.link-button')}</p>
           </button>;
}

const Contact = withTranslation()(ContactClass);

export default Contact;