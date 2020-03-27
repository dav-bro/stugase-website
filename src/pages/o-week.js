import React from 'react';
import {withTranslation} from "react-i18next";
import LayoutContent from "../components/LayoutContent";
import ContextConsumer from "../components/Context";

class OweekClass extends React.Component {

    render() {
        const { t } = this.props;
        return(
            <ContextConsumer>
                {({ data }) => (
                   <LayoutContent theme={data.theme} title={t('o-week.title')}>

                   </LayoutContent>
                )}
            </ContextConsumer>


        )
    }

}

const OWeek = withTranslation()(OweekClass);

export default OWeek;