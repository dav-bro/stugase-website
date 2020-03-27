import React from 'react';
import {Trans, useTranslation, withTranslation} from "react-i18next";
import {LinkOutlined, LoginOutlined, MailOutlined, QuestionOutlined, UserOutlined} from '@ant-design/icons';
import '@ant-design/compatible/assets/index.css';
import {Button, Card, Col, Collapse, Form, Input, Row} from "antd";

import roomPlan from '../static/images/room.jpg';
import campusPlan from '../static/images/campus.jpg';
import {Link} from "gatsby";
import LayoutContent from "../components/LayoutContent";
import ContextConsumer from "../components/Context";

const { Panel } = Collapse;
const { TextArea } = Input;
const floorPlanLink = "https://oracle-web.zfn.uni-bremen.de/web/p_ebenen_ansicht?haus=IW&raum=1310&pi_anz=0";
const campusPlanLink = "https://www.uni-bremen.de/universitaet/campus/lageplan/";

class ContactClass extends React.Component {




    render() {
        const { t } = this.props;



        return(
            <ContextConsumer>
                {({ data }) => {
                    let theme = data.theme;
                    return (
                    <LayoutContent theme={theme} title={t('contact.header.title')} text={t('contact.header.text')}>
                        <div key="main-content">
                          {/*  <div className="w-full border flex">

                                <span style={{fontSize: 12, top: "50%"}}>
                                <RightOutlined   className="align-middle"/>
                                </span>
                                <p className=" align-middle pt-2 pb-2 top-auto"> Collapse </p>
                            </div>
*/}

                            <Collapse defaultActiveKey={['1']} className={"panel-" + theme} >
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

                            </Collapse>
                        </div>
                    </LayoutContent>
                )}}
            </ContextConsumer>



        )

    }

}


class ContactFormClass extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }


    render() {

        const { t } = this.props;
        const transPrefix = "contact.formula.validation-messages.";

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };

        const validateMessages = {
            required: {
                types: {
                    name: 't(transPrefix + "name")',
                    email: t(transPrefix + "email"),
                    topic: t(transPrefix + "topic"),
                    message: t(transPrefix + "message"),
                }
            },

        };

        return (
            <Form {...layout} name="contact-form" onFinish={this.handleSubmit} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="Name" rules={[{required: true, type: 'name'}]}>
                    <Input
                        prefix={<UserOutlined className="form-icon" />}
                        placeholder="Name"
                    />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="E-Mail" rules={[{ type: 'email' }]} >
                    <Input
                        prefix={<MailOutlined className="form-icon" />}
                        placeholder="E-Mail"
                    />
                    )}
                </Form.Item>
                <Form.Item name={['user', 'topic']} label="Betreff" rules={[{ required: true, type: 'topic' }]} >
                    {/*validateStatus={topicError ? 'warning' : ''} help={topicError || ''}>
                    {getFieldDecorator('topic', {
                        rules: [{ required: true, message: 'Bitte gib einen Betreff ein!' }],
                    })(*/}
                    <Input
                        prefix={<QuestionOutlined className="form-icon" />}
                        placeholder="Betreff"
                    />)}
                </Form.Item>
                <Form.Item name={['user', 'message']} label="Nachricht" rules={[{ required: true, type: 'message' }]} >
                    {/*validateStatus={messageError ? 'error' : ''} help={messageError || ''}>
                    {getFieldDecorator('message', {
                        rules: [{ required: true, message: 'Bitte gib eine Nachricht ein!' }],
                    })(*/}
                    <TextArea
                        placeholder="Deine Nachricht"
                        rows={4}
                    />)}
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button icon={<LoginOutlined />} type="primary" htmlType="submit">
                        Absenden
                    </Button>
                </Form.Item>
              {/*  <Form.Item>
                    <ReCAPTCHA
                        sitekey="6LfdyeAUAAAAAKMaiwzy-V0alf1Cszr2vFUdIXzo"
                        onChange={() => console.log("captcha completed")}
                    />
                </Form.Item>*/}
            </Form>
        );
    }


    handleSubmit(values) {
        console.log(values);

    }

}




const ContactForm = withTranslation()(ContactFormClass);


function LinkButton(props) {
    const { t } = useTranslation();
   return <Button type="primary" icon={<LinkOutlined />} onClick={() => window.open(props.link)}>{t('contact.find-us.link-button')}</Button>;
}

const Contact = withTranslation()(ContactClass);

export default Contact;