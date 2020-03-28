import React from 'react'
import {Col, Row} from "antd";
import {useTranslation} from "react-i18next";


export default function Title(props) {
    const { t } = useTranslation();
    let { theme } = props;
    theme = theme ? theme : "light";
    return(

        <Row className={"page-head-" + theme }>
            <Col  xs={{span: 24, offset: 0}} lg={{span: 16, offset: 4}} xl={{span: 14, offset: 5}}>
                <div className="ml-5 lg:ml-0">
                    <h1 className={"text-4xl heading-" + theme}>{props.title ? props.title : t('in-progress')}</h1>
                    <p>{props.text ? props.text : t('in-progress')}</p>
                </div>

            </Col>
        </Row>
    )


}
