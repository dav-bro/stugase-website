import React from 'react';
import {withTranslation} from "react-i18next";
import { CalendarOutlined, TeamOutlined } from '@ant-design/icons';
import { Col, Row } from "antd";
import Header from "../components/header";
import Title from "../components/title";

class DatesClass extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <div className="dates content">
                <Header siteIndex="dates"/>
                <Title title={t('dates.header.title')} text={t('dates.header.text')}/>
                <Row style={{marginTop: "30px"}}>
                    <Col span={14} offset={5}>
                        <DateRow type="StugA-Sitzung" date="02.03.2020" time="14:00"/>
                    </Col>
                </Row>
            </div>
        )
    }
}

const Dates = withTranslation()(DatesClass);


class DateRowClass extends React.Component {


    render(){
        // const { t } = this.props;
        return (
            <Row className="date-row" align="top">
                <Col span={1}>
                    <TeamOutlined className="date-icon is-left" />
                </Col>
                <Col span={10} offset={1} className="date-text is-left">
                    {this.props.type}
                </Col>
                <Col span={10}  className="date-text is-right">
                    {this.props.date}, {this.props.time}
                </Col>
                <Col span={1} offset={1} >
                    <CalendarOutlined className="date-icon is-right" />
                </Col>
            </Row>
        );
    }


}

const DateRow = withTranslation()(DateRowClass);

export default Dates;
