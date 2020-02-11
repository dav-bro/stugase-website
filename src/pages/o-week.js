import React from 'react';
import {withTranslation} from "react-i18next";
import Title from "../components/title";
import Header from "../components/header";

class OweekClass extends React.Component {

    render() {
        const { t } = this.props;
        return(
            <div className="o-week content">
                <Header siteIndex="o-week"/>
                <Title title={t('o-week.title')}/>
            </div>
        )
    }

}

const OWeek = withTranslation()(OweekClass);

export default OWeek;