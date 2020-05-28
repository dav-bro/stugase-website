import React from 'react';
import {withTranslation} from "react-i18next";
import LayoutContent from "../components/layoutContent";
import ContextConsumer from "../components/context";

class ImportantSitesClass extends React.Component {

    render() {
        const { t } = this.props;
        return(
            <ContextConsumer>
                {({ data }) => (
                    <LayoutContent theme={data.theme} title={t('important.title')}>
                        <div key="main-content">

                        </div>
                    </LayoutContent>
                )}
            </ContextConsumer>
        )
    }

}

const ImportantSites = withTranslation()(ImportantSitesClass);

export default ImportantSites;