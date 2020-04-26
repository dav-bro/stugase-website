import React from 'react';
import {Trans, useTranslation, withTranslation} from "react-i18next";
import Card from "../components/Card";
import MQTT from "mqtt";

import roomPlan from '../static/images/room.jpg';
import campusPlan from '../static/images/campus.jpg';
import {Link} from "gatsby";
import LayoutContent from "../components/LayoutContent";
import ContextConsumer from "../components/Context";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import {ReCAPTCHA} from "react-google-recaptcha";
import "../static/styles/main.css"
import LinkOutlined from "@ant-design/icons/es/icons/LinkOutlined";
import CommentOutlined from "@ant-design/icons/es/icons/CommentOutlined";
import SendOutlined from "@ant-design/icons/es/icons/SendOutlined";

const floorPlanLink = "https://oracle-web.zfn.uni-bremen.de/web/p_ebenen_ansicht?haus=IW&raum=1310&pi_anz=0";
const campusPlanLink = "https://www.uni-bremen.de/universitaet/campus/lageplan/";

const mqttUrl = "wss://m20.cloudmqtt.com";


const options={
        port: 39860,
        clientId:"StugA-Chat_" + Math.random().toString(16).substr(2, 8),
        username:"jrhikesy",
        password:"LhELPlShfq2s",
};




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



        )

    }

}



class Chat extends React.Component {

    mqtt = null;

    componentDidMount() {



        /* let con = async ({ target }) => {
             const mqtt = await connectMQTT({
                 server: {host: "stpush.startsupport.com", port: 443}
             });

             console.log(mqtt);
         }
         con();*/

       /* this.mqtt = MQTT.connect(mqttUrl, options);

        const client = this.mqtt;



        console.log("connecting to mqtt...");

        client.publish("test", "test");

        client.subscribe("#");



        client.on('connect', function(m) {
            console.log("connected", m);
        });

        client.on('error', function(e) {
            console.log("connection error", e);
        })

        client.on('message', (m) => {

            console.log(m);

        })*/

    }

    state={
        expanded: false,
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



    render() {

        const { expanded, messages } = this.state;

        let chatMessages;

        if (!this.mqtt) {

            chatMessages = (
                <div className="bg-menu-secondary w-full h-full">

                    <div className="flex flex-col w-full border-t">
                        <form
                            method="post"
                            onSubmit={event => {

                            }}>
                            <div className="flex w-full mb-3 mt-3">


                                <div className="w-full pr-2 ">

                                    <input
                                        className="bg-input border-primaryd shadow appearance-none border rounded w-full py-2 px-3 leading-tight  "
                                        id={"mqtt-username"}
                                        name={"mqtt-username"}
                                        type={"text"}
                                        placeholder={"username"}
                                        onChange={this.handleUpdate}
                                    />

                                </div>
                            </div>

                            <div className="flex w-full mb-3 mt-3">

                                <div className="w-full pr-2 ">

                                    <input
                                        className="bg-input border-primaryd shadow appearance-none border rounded w-full py-2 px-3 leading-tight  "
                                        id={"mqtt-password"}
                                        name={"mqtt-password"}
                                        type={"password"}
                                        placeholder={"password"}
                                        onChange={this.handleUpdate}/>


                                </div>
                            </div>

                            <div className="flex w-full mb-3 mt-3">
                                <div className="w-0 sm:w-1/3 invisible sm:visible text-right pt-2 pr-4 font-bold">



                                </div>
                                <div className="w-full pr-2 sm:w-2/3">

                                    <input type={"submit"} value={"login"} className="float-right bg-blue-600 text-white p-2 -ml-3 rounded-sm flex flex-row justify-center items-center pl-4 pr-4"/>



                                </div>


                            </div>

                        </form>
                    </div>



                </div>
            )

        } else {
            chatMessages = messages.map(x => {
                let position = x.author === 0 ? "left" : "right";



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
        }


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
                            <div className={"flex flex-col border border-primary border-collapse transform duration-100  p-1 message-wrapper overflow-auto " + (expanded ? "h-64" : "h-0")}>

                                {chatMessages}

                            </div>
                        </div>
                        <div className=" w-full  border-r border-l  border-primary ">

                            <form onSubmit={(event) => this.handleSubmit(event)}>

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


    handleSubmit(e) {
        e.preventDefault();


    }


}


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


class Collapse extends React.Component {

    collapse = {
        scrollHeight: "100%"
    };

    state = {
        collapsed: !this.props.defaultCollapsed,
        height: null
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
        if (this.collapse) {
            this.setState({height: this.collapse.scrollHeight});
        }
    }

    render() {

        const { title, extra, children } = this.props;


        return (
            <div className="border-collapse">
                <div className=" w-full border-b border-primary  flex h-10 collapse-header cursor-pointer" onClick={() => this.setState(s => ({collapsed: !s.collapsed}))}>

                    <span className={"image-wrapper"}>
                        <RightOutlined   rotate={this.state.collapsed ? 0 : 90} className="image-center-vertical"/>
                    </span>


                    <div className="text-sm sm:text-lg relative ml-6 w-full">
                        <p className=" text-center-vertical float-left"> {title} </p>
                        <p className={" float-right text-center-vertical mr-6 overflow-hidden"}> {extra} </p>
                    </div>

                </div>


                <div className="w-full h-full border-b border-primary collapse-content transform duration-100" style={{height: this.state.collapsed ? "0" : this.state.height + "px"}}
                     ref={ (el) => {this.collapse = el ? el : {scrollHeight: "100%"} } }
                >
                        {children}
                </div>
            </div>
        );
    }

}



function LinkButton(props) {
    const { t } = useTranslation();
    return <button className="bg-btn-primary text-white p-2 -ml-3 rounded-sm flex flex-row justify-center items-center" onClick={() => window.open(props.link)}>
               <LinkOutlined />
                <p className="ml-2">{t('contact.find-us.link-button')}</p>
           </button>;
}

const Contact = withTranslation()(ContactClass);

export default Contact;