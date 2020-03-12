import React from 'react';
import {Trans, useTranslation, withTranslation} from "react-i18next";
import Header from "../components/header";
import Title from "../components/title";
import {Row, Col, Collapse, Card, Button, Form, Input, Icon} from "antd";

import roomPlan from '../static/images/room.jpg';
import campusPlan from '../static/images/campus.jpg';
import {Link} from "gatsby";
import {ReCAPTCHA} from "react-google-recaptcha";

const { Panel } = Collapse;
const { TextArea } = Input;
const floorPlanLink = "https://oracle-web.zfn.uni-bremen.de/web/p_ebenen_ansicht?haus=IW&raum=1310&pi_anz=0";
const campusPlanLink = "https://www.uni-bremen.de/universitaet/campus/lageplan/";

class ContactClass extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {
        const { t } = this.props;
        return(
            <div className="content">
            <Header siteIndex="contact"/>
            <Title title={t('contact.header.title')} text={t('contact.header.text')}/>
                <Row style={{marginTop: "30px"}}>
                    <Col span={14} offset={5}>

                        <Collapse defaultActiveKey={['1']} >
                            <Panel header={t('contact.office.title')} extra={"IW 1+2, " + t('general.room') + " 1310"} key={1}>
                                <Trans i18nKey="contact.office.detail">
                                    you can find us in the <strong>IW 1+2</strong>.
                                </Trans>
                                <Row style={{marginTop: "30px", marginRight: 0}}>
                                    <Col span={12}>
                                    <Card
                                        title={t('contact.find-us.room.title')}
                                        style={{width: "300px"}}
                                        cover={ <img alt="unser StugA Raum im IW 1+2" src={roomPlan} />}
                                    >
                                    <LinkButton link={floorPlanLink}/>
                                    </Card>
                                    </Col>

                                    <Col span={12}>
                                    <Card
                                        title={t('contact.find-us.campus.title')}
                                        style={{width: "400px", float: "right"}}
                                        cover={ <img alt="unser StugA Raum auf dem Campus" src={campusPlan} />}
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
                                <WrappedContactForm/>
                                </Col>
                                </Row>
                            </Panel>

                        </Collapse>

                    </Col>
                </Row>
            </div>
        )

    }

    loadingFinished() {
        this.setState({
            loading: false
        });
    }


}

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ContactFormClass extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.form.validateFields();
    }


    render() {

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        const mailError = isFieldTouched('mail') && getFieldError('mail');
        const topicError = isFieldTouched('topic') && getFieldError('topic');
        const messageError = isFieldTouched('message') && getFieldError('message');

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" className="form-icon" />}
                        placeholder="Name"
                    />
                </Form.Item>
                <Form.Item required={true} validateStatus={mailError ? 'error' : ''} help={mailError || ''}>
                    {getFieldDecorator('mail', {
                        rules: [{ required: true, message: 'Bitte gib eine gültige Mail Adresse ein!' }],
                    })(
                    <Input
                        prefix={<Icon type="mail" className="form-icon"/>}
                        placeholder="E-Mail"
                    />
                    )}
                </Form.Item>
                <Form.Item validateStatus={topicError ? 'warning' : ''} help={topicError || ''}>
                    {getFieldDecorator('topic', {
                        rules: [{ required: true, message: 'Bitte gib einen Betreff ein!' }],
                    })(
                    <Input
                        prefix={<Icon type="question" className="form-icon"/>}
                        placeholder="Betreff"
                    />)}
                </Form.Item>
                <Form.Item validateStatus={messageError ? 'error' : ''} help={messageError || ''}>
                    {getFieldDecorator('message', {
                        rules: [{ required: true, message: 'Bitte gib eine Nachricht ein!' }],
                    })(
                    <TextArea
                        placeholder="Deine Nachricht"
                        rows={4}
                    />)}
                </Form.Item>
                <Form.Item>
                    <Button icon="login" type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Absenden
                    </Button>
                </Form.Item>
                <Form.Item>
                    <ReCAPTCHA
                        sitekey="6LfdyeAUAAAAAKMaiwzy-V0alf1Cszr2vFUdIXzo"
                        onChange={() => console.log("captcha completed")}
                    />
                </Form.Item>
            </Form>
        )
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

}



const WrappedContactForm = Form.create({ name: 'contact' })(ContactFormClass);

const ContactForm = withTranslation()(WrappedContactForm);


function LinkButton(props) {
    const { t } = useTranslation();
   return(<Button type="primary" icon="link" onClick={() => window.open(props.link)}>{t('contact.find-us.link-button')}</Button>);
}

const Contact = withTranslation()(ContactClass);

export default Contact;