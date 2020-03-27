import React from 'react';
import {withTranslation} from "react-i18next";
import '../static/styles/styles.less'
import logo from "../static/images/SE_Logo_Text.png"
import '../hooks/i18n';
import LayoutContent from "../components/LayoutContent";
import "../static/styles/import"
import ContextConsumer from "../components/Context";
import "../static/styles/tailwind.css"
import Card from "../components/Card";


class AboutClass extends React.Component {

    render() {
        const { t } = this.props;
        return(
            <ContextConsumer>
                {({ data }) => (
                    <LayoutContent title="Moin" text={t('about.header.text')}>

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
