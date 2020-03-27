import React from 'react';
import {withTranslation} from "react-i18next";
import '../static/styles/styles.less'
import logo from "../static/images/SE_Logo_Text.png"
import '../hooks/i18n';
import LayoutContent from "../components/LayoutContent";
import "../static/styles/import"
import ContextConsumer from "../components/Context";
import "../static/styles/tailwind.css"


class AboutClass extends React.Component {

    render() {
        const { t } = this.props;
        return(
            <ContextConsumer>
                {({ data }) => (
                    <LayoutContent theme={data.theme} title="Moin" text={t('about.header.text')}>

                        <div key="left-content" >
                        </div>
                        <div key="main-content" style={{textAlign: "-webkit-center"}}>

                            <div className={"max-w-sm overflow-hidden shadow-lg mt-3 card-" + data.theme} >
                                <img className="w-full" src={logo} alt="Sunset in the mountains" />
                                    <div className={"px-6 py-4 border-t border-top-" + data.theme}>
                                        <div className="font-bold text-xl mb-2"> {t('about.what.title')} </div>
                                        <p className={" text-base text-" + data.theme} >
                                            {t('about.what.text')}
                                        </p>
                                    </div>

                            </div>

                          {/*   <Card
                               className={"card-" + data.theme}

                                title={<h1 className={"headings-" + data.theme}>{t('about.what.title')}</h1>} style={{width: "40%"}}
                                cover={ <img alt="Systems Engineering" src={logo} style={{width: '90%'}} />}
                            >
                                {t('about.what.text')}
                            </Card>*/}
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
