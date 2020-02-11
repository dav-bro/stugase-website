import React from 'react';
import {withTranslation} from "react-i18next";
import Title from "../components/title";
import Header from "../components/header";

class MembersClass extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <div className="members content">
                <Header siteIndex="members"/>
                <Title title={t('members.title')}/>
            </div>
        )
    }
}

const Members = withTranslation()(MembersClass);

export default Members;