import React from 'react'
import {Col, Row} from "antd";
import {useTranslation} from "react-i18next";


export default function Title(props) {
    const { t } = useTranslation();
    return(

        <Row className="page-head">
            <Col span={14} offset={5}>
                <h1>{props.title}</h1>
                {props.text ? props.text : t('in-progress')}
            </Col>
        </Row>
    )


}
