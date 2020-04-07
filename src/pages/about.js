import React from 'react';
import {withTranslation} from "react-i18next";
import logo from "../static/images/SE_Logo_Text.png"
import LayoutContent from "../components/LayoutContent";
import ContextConsumer from "../components/Context";
import "../static/styles/theme-light.css"
import Card from "../components/Card";


class AboutClass extends React.Component {

    render() {
        const { t } = this.props;
        return(
            <ContextConsumer>
                {({ data }) => (
                    <LayoutContent title="Moin" text={t('about.header.text')} uri={"/about"}>

                        <div key="left-content" >
                        </div>
                        <div key="main-content" style={{textAlign: "-webkit-center"}}>

                            <Card
                                theme={data.theme}
                                header={t('about.what.title')}
                                footer={<p className={" text-base text-" + data.theme} >
                                            {t('about.what.text')}
                                        </p>}
                            >
                                <img className="w-full" src={logo} alt="Sunset in the mountains" />
                            </Card>


                        </div>
                        <div key="right-content">

                        </div>
                    </LayoutContent>
                )}

            </ContextConsumer>

        )
    }

}

const About = withTranslation()(AboutClass);

export default About;
