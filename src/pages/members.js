import React from 'react';
import {withTranslation} from "react-i18next";
import LayoutContent from "../components/LayoutContent";

class MembersClass extends React.Component {

    render() {
        const { t } = this.props;
        return (
           <LayoutContent title={t('members.title')}>

               <div key="main-content">

               </div>

           </LayoutContent>
        )
    }
}

const Members = withTranslation()(MembersClass);

export default Members;