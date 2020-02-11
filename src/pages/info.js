import React from 'react';
import {withTranslation} from "react-i18next";
import Header from "../components/header";
import Title from "../components/title";


class InfoClass extends React.Component{

    render() {
        const { t } = this.props;
        return (
            <div className="info content">
                <Header siteIndex="info"/>
                <Title title={t('info.title')}/>
            </div>
        );
    }

}

const Info = withTranslation()(InfoClass);

export default Info;