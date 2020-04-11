import React from 'react';
import {Trans, useTranslation, withTranslation} from "react-i18next";
import Card from "../components/Card"

import roomPlan from '../static/images/room.jpg';
import campusPlan from '../static/images/campus.jpg';
import {Link} from "gatsby";
import LayoutContent from "../components/LayoutContent";
import ContextConsumer from "../components/Context";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import {ReCAPTCHA} from "react-google-recaptcha";
import "../static/styles/main.css"
import LinkOutlined from "@ant-design/icons/es/icons/LinkOutlined";

const floorPlanLink = "https://oracle-web.zfn.uni-bremen.de/web/p_ebenen_ansicht?haus=IW&raum=1310&pi_anz=0";
const campusPlanLink = "https://www.uni-bremen.de/universitaet/campus/lageplan/";


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
                    </LayoutContent>
                )}}
            </ContextConsumer>



        )

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
                            className={"h-48 shadow appearance-none border border-primary rounded w-full py-2 px-3 bg-input leading-tight"}
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
                            className="bg-input border-primaryd shadow appearance-none border rounded w-full py-2 px-3 leading-tight  "
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


    state = {
        collapsed: !this.props.defaultCollapsed
    };

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


                <div className="w-full border-b border-primary collapse-content" style={{display: this.state.collapsed ? "none" : "flex"}}>
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