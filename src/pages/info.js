import React from 'react';
import {withTranslation} from "react-i18next";
import Header_old from "../components/header_old";
import Title from "../components/title";
import Header from "../components/header";


class InfoClass extends React.Component{

    render() {
        const { t } = this.props;
        return (
            <div className="info">
                <Header siteIndex="info"/>
                <div className="content">
                    <Title title={t('info.title')}/>
                </div>
            </div>
        );
    }

}

const Info = withTranslation()(InfoClass);

export default Info;