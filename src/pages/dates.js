import React from 'react';
import {withTranslation} from "react-i18next";
import {CalendarOutlined, TeamOutlined} from '@ant-design/icons';
import {Col, Row} from "antd";
import LayoutContent from "../components/LayoutContent";
import ContextConsumer from "../components/Context";
import LeftOutlined from "@ant-design/icons/es/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons/es/icons/RightOutlined";

class DatesClass extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <ContextConsumer>
                {({ data }) => (
                    <LayoutContent theme={data.theme} title={t('dates.header.title')} text={t('dates.header.text')}>
                        <div key="main-content">

                            <h2 className="text-xl border-1 between-line"><span className="between-line-span">April</span></h2>


                                    <DateRow type="StugA-Sitzung" date="02.03.2020" time="14:00"/>
                            <DatePicker/>
                        </div>
                    </LayoutContent>
                )}
            </ContextConsumer>

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


class DatePicker extends React.Component {


    render() {
        return(
            <div className="disable-app">
                <div className="modal-content w-2/12">
                    <div className="flex flex-col">

                        <div className="flex flex-row pt-1 text-xl items-center justify-center bg-gray-400">

                            <LeftOutlined className="w-1/6"/>
                            <p className="w-2/3 text-center font-bold"> July </p>
                            <RightOutlined className="w-1/6"/>

                        </div>

                        <div className="flex flex-row items-center justify-evenly bg-gray-400 ">

                            <p className=" p-1 "> M </p>
                            <p> D </p>
                            <p> M </p>
                            <p> D </p>
                            <p> F </p>
                            <p> S </p>
                            <p> S </p>

                        </div>


                    </div>
                </div>
            </div>

        )
    }


}



export default Dates;
