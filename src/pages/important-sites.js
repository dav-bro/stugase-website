import React from 'react';
import {withTranslation} from "react-i18next";
import Title from "../components/title";
import Header from "../components/header";

class ImportantSitesClass extends React.Component {

    render() {
        const { t } = this.props;
        return(
            <div className="content">
                <Header siteIndex="important-sites"/>
                <Title title={t('important.title')}/>
            </div>
        )
    }

}

const ImportantSites = withTranslation()(ImportantSitesClass);

export default ImportantSites;