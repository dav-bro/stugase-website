import React from 'react';
import {Trans, useTranslation, withTranslation} from "react-i18next";
import Header from "../components/Header";
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

        this.state={
            loading: true
        }

    }

    render() {
        const { t } = this.props;
        return(
            <div className="content">
            <Header siteIndex="contact"/>
            <Title title={t('contact.header.title')} text={t('contact.header.text')}/>
                <Row style={{marginTop: "30px"}} gutter={16}>
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

                            </Panel>
                        </Collapse>

                    </Col>
                </Row>

           {/*  <Row>
                 <Col >
                        <Card>
                            <Card.Body>
                                {this.state.loading ? (
                                    <Spinner style={{top: '50%'}} animation="border"/>) : null}
                                <Iframe
                                    className="find-us-site"
                                    url="https://oracle-web.zfn.uni-bremen.de/web/p_ebenen_ansicht?haus=IW&raum=1310&pi_anz=0"
                                    width="100%"
                                    allowFullScreen={true}
                                    // height="100%"
                                    onLoad={() => this.loadingFinished()}
                                />
                                <Card.Title>{t('contact.find-us.title')}</Card.Title>
                                <Card.Text>
                                    {t('contact.find-us.detail')}
                                </Card.Text>
                                <LinkButton link={floorPlanLink}/>
                            </Card.Body>

                        </Card>
                 </Col>
                 <Col>
                     <h1>Text</h1>
                 </Col>
                 <Col>
                     <Card>
                        <Card.Body>
                            <SimpleMap/>
                            <Card.Title>{t('contact.find-us.title')}</Card.Title>
                            <Card.Text>
                                {t('contact.find-us.detail')}
                            </Card.Text>
                            <LinkButton link={campusPlanLink}/>
                        </Card.Body>
                     </Card>
                 </Col>
             </Row>*/}
            </div>
        )

    }

    loadingFinished() {
        this.setState({
            loading: false
        });
    }
}
/*
class SimpleMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 53.107452,
            lng: 8.855522
        },
        zoom: 17
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyA9RL6o6NomP4YU4KRwHJTFn2L3PhbeZVw" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                 <PointerClass lng={this.props.center.lng} lat={this.props.center.lat}/>

                </GoogleMapReact>
            </div>
        );
    }
}

class PointerClass extends React.Component {

    render() {
        return (
            <div>
            <Popover>
            </Popover>
            </div>
        );
    }

}
*/
function LinkButton(props) {
    const { t } = useTranslation();
   return(<Button type="primary" icon="link" onClick={() => window.open(props.link)}>{t('contact.find-us.link-button')}</Button>);
}

const Contact = withTranslation()(ContactClass);

export default Contact;