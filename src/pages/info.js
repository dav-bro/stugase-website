import React from 'react';
import {withTranslation} from "react-i18next";
import LayoutContent from "../components/layoutContent";
import ContextConsumer from "../components/context";

class InfoClass extends React.Component{

    render() {
        // const { t } = this.props;
        return (
            <ContextConsumer>
                {({ data }) => (
                <LayoutContent theme={data.theme} >
                    <div key="left-content">
                        left
                    </div>
                    <div key="main-content" style={{textAlign: "-webkit-center"}}>
                        <h1 className={"text-4xl heading-" + data.theme}>Main</h1>
                    </div>
                    <div key="right-content">
                        right
                    </div>
                </LayoutContent>
                )}
            </ContextConsumer>

        );
    }

}

const Info = withTranslation()(InfoClass);

export default Info;