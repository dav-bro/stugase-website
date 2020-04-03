import React from 'react';
import {Trans, useTranslation, withTranslation} from "react-i18next";
import LinkOutlined from '@ant-design/icons';
import '@ant-design/compatible/assets/index.css';
import Card from "../components/Card"

import roomPlan from '../static/images/room.jpg';
import campusPlan from '../static/images/campus.jpg';
import {Link} from "gatsby";
import LayoutContent from "../components/LayoutContent";
import ContextConsumer from "../components/Context";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import {ReCAPTCHA} from "react-google-recaptcha";

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
        label: 'Betreff',
        placeholder: 'Betreff'
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
                        <div key="main-content" className="inherit">

                            <Collapse
                                title={t('contact.office.title')} extra={"IW 1+2, " + t('general.room') + " 1310"}
                                defaultCollapsed={true}
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
                            title={t('contact.formula.title')}>

                                <Form
                                    theme={theme}
                                >
                                    {form}
                                </Form>

                            </Collapse>


                          {/*  <Collapse defaultActiveKey={['1']} className={"panel-" + theme} >
                                <Panel header={t('contact.office.title')} extra={"IW 1+2, " + t('general.room') + " 1310"} key={1} className={"panel-" + theme}>
                                    <Trans i18nKey="contact.office.detail" >
                                        you can find us in the <strong>IW 1+2</strong>.
                                    </Trans>
                                    <Row style={{marginTop: "30px", marginRight: 0}}>
                                        <Col span={12}>
                                            <Card
                                                title={t('contact.find-us.room.title')}
                                                style={{width: "300px"}}
                                                cover={<img alt="unser StugA Raum im IW 1+2" src={roomPlan}/>}
                                            >
                                                <LinkButton link={floorPlanLink}/>
                                            </Card>
                                        </Col>

                                        <Col span={12}>
                                            <Card
                                                title={t('contact.find-us.campus.title')}
                                                style={{width: "400px", float: "right"}}
                                                cover={<img alt="unser StugA Raum auf dem Campus" src={campusPlan}/>}
                                            >
                                                <LinkButton link={campusPlanLink}/>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header={t('contact.consultings.title')} key={2}>
                                    <Trans i18nKey="contact.consultings.text">
                                        Jede zweite, ungerade Woche <strong>Donnerstags</strong> bieten wir von <strong> 13:00-15:00 Uhr </strong>
                                        eine Sprechstunde an. In dieser Zeit könnt ihr uns Fragen rund ums Studium stellen.
                                        Die genauen Termine findet ihr natürlich auch bei <Link to="dates">Termine</Link>
                                    </Trans>
                                </Panel>
                                <Panel header={t('contact.formula.title')} key={3}>
                                    <Row>
                                        <Col span={12}>
                                            <ContactForm/>
                                        </Col>
                                    </Row>
                                </Panel>

                            </Collapse>*/}

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

        const { children, theme } = this.props;


        let formChildren =  children.map(child => {

            if (child.type && child.type === 'password') {
                return (
                    <div className="flex items-center w-full mb-3">
                        <div className="w-1/3 block text-right pr-4 font-bold">
                            <label htmlFor={"password-" + child.name}>{child.label}</label>
                        </div>
                        <div className="w-2/3">
                            <input
                                className={"input-" + theme}
                                id={"password-" + child.name} type="password" placeholder={child.placeholder}/>
                        </div>
                    </div>
                )
            } else {
                return(
                    <div className="flex items-center w-full mb-3">
                        <div className="w-1/3 block sm:text-right pr-4 font-bold">
                            <label htmlFor={child.type + "-" + child.name}>{child.label}</label>
                        </div>
                        <div className="w-2/3">
                            <input
                                className={"input-" + theme}
                                id={child.type + "-" + child.name} type="text" placeholder={child.placeholder}/>
                        </div>
                    </div>
                )
            }

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
            <div className="border-collapse inherit">
                <div className=" w-full border-b flex h-10 collapse-header inherit" onClick={() => this.setState(s => ({collapsed: !s.collapsed}))}>

                    <span className={"image-wrapper"}>
                        <RightOutlined   rotate={this.state.collapsed ? 0 : 90} className="image-center-vertical"/>
                    </span>


                    <div className="text-sm sm:text-lg text-wrapper ml-6 w-full">
                        <p className=" text-center-vertical float-left"> {title} </p>
                        <p className={" float-right text-center-vertical mr-6 overflow-hidden"}> {extra} </p>
                    </div>

                </div>


                <div className="w-full border-b collapse-content inherit" style={{display: this.state.collapsed ? "none" : "flex"}}>
                    {children}
                </div>
            </div>
        );
    }

}



function LinkButton(props) {
    const { t } = useTranslation();
    return <button className="bg-blue-600 text-white p-2 -ml-3 rounded-sm flex flex-row justify-center items-center" onClick={() => window.open(props.link)}>
               {<LinkOutlined />}
                <p className="ml-2">{t('contact.find-us.link-button')}</p>
           </button>;
}

const Contact = withTranslation()(ContactClass);

export default Contac