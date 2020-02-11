import React from 'react';
import {Trans, useTranslation, withTranslation} from "react-i18next";
import Header from "../components/header";
import Title from "../components/title";
import {Row, Col, Collapse, Card, Button} from "antd";

import roomPlan from '../static/images/room.jpg';
import campusPlan from '../static/images/campus.jpg';

const { Panel } = Collapse;
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

                        <Collapse>
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
                                {/*every week on <strong>thursday</strong> */}
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

function LinkButton(props) {
    const { t } = useTranslation();
   return(<Button type="primary" icon="link" onClick={() => window.open(props.link)}>{t('contact.find-us.link-button')}</Button>);
}

const Contact = withTranslation()(ContactClass);

export default Contact;