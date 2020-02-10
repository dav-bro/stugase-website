import React from 'react';
import {Card, Col, Row} from 'antd'
import {withTranslation} from "react-i18next";
import '../static/css/App.css'
import logo from "../static/images/FB4_Systems-Engineering_Logo_RZ.png"
import Header from "../components/Header";

class AboutClass extends React.Component {

    render() {
        const { t } = this.props;
        return(
            <div className="about">
                <Header title="Moin" text={t('about.header.text')}/>
                <Row type="flex" align="top" justify="center" style={{marginTop: "25px"}}>
                    <Col>
                        <Card
                            title={t('about.what.title')} style={{width: "650px"}}
                            cover={ <img alt="das ist ein Bild" src={logo} style={{width: '600px'}}/>}
                        >
                            {t('about.what.text')}
                        </Card>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </div>
        )
    }

}

const About = withTranslation()(AboutClass);

export default About;