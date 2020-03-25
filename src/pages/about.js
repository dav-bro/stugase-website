import React from 'react';
import {Card, Col, Row} from 'antd'
import {withTranslation} from "react-i18next";
import '../static/css/styles.less'
import logo from "../static/images/SE_Logo_Text.png"
import Header_old from "../components/header_old";
import Header from "../components/header";
import '../hooks/i18n';
import Title from "../components/title";
import Layout from "../components/Layout";


class AboutClass extends React.Component {

    render() {
        const { t } = this.props;
        return(
            <Layout siteIndex="about" title="Moin" text={t('about.header.text')}>
                <div key="left-content">

                </div>
                <div key="main-content" style={{textAlign: "-webkit-center"}}>
                    <Card
                        title={t('about.what.title')} style={{width: "70%"}}
                        cover={ <img alt="Systems Engineering" src={logo} style={{width: '100%'}}/>}
                    >
                        {t('about.what.text')}
                    </Card>
                </div>
                <div key="right-content">

                </div>
            </Layout>

        )
    }

}

const About = withTranslation()(AboutClass);

export default About;

/*



<div className="about content">
                <Header siteIndex="about"/>
                <Title title="Moin" text={t('about.header.text')}/>
                <Row type="flex" align="top" justify="center" style={{marginTop: "25px"}}>
                    <Col>
                        <Card
                            title={t('about.what.title')} style={{width: "650px"}}
                            cover={ <img alt="Systems Engineering" src={logo} style={{width: '600px'}}/>}
                        >
                            {t('about.what.text')}
                        </Card>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </div>


 */