import React from 'react';
import {withTranslation} from "react-i18next";
import {Col, Icon, Row} from "antd";
import Header from "../components/Header";
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
        return(
            <Row className="date-row" align="top">
                <Col span={1}>
                    <Icon type="team" className="date-icon is-left"/>
                </Col>
                <Col span={10} offset={1} className="date-text is-left">
                    {this.props.type}
                </Col>
                <Col span={10}  className="date-text is-right">
                    {this.props.date}, {this.props.time}
                </Col>
                <Col span={1} offset={1} >
                    <Icon type="calendar" className="date-icon is-right"/>
                </Col>
            </Row>
        )
    }


}

const DateRow = withTranslation()(DateRowClass);

export default Dates;
