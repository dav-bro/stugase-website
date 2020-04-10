import React from "react";
import {withTranslation} from "react-i18next";
import ContextConsumer from "./Context";
import BulbTwoTone from "@ant-design/icons/lib/icons/BulbTwoTone";
import i18next from "i18next";


import SELogo from "../static/images/SE_Logo.png";
import SEText from "../static/images/SE_Text.png";
import UniLogo from "../static/images/Uni_Logo.png";
import UniText from "../static/images/Uni_Text.png";


import SETextDark from "../static/images/SE_Text-dark.png";

import UniTextDark from "../static/images/Uni_Text-dark.png";
import Menu from "./Menu";




const Constants = require("../static/constants");

const content = [
    {
        id: "about",
        title: "about.short"
    },
   /* {
        id: "info",
        title: "info.short"
    },*/
    {
        id: "contact",
        title: "contact.short"
    },
    {
        id: "dates",
        title: "dates.short"
    },

    {
        id: "members",
        title: "members.short"
    },
  /*  {
        id: "o-week",
        title: "o-week.short"
    },*/
    {
        id: "important-sites",
        title: "important.short"
    }
];

const blockThemeChange = [];



class Header_Class extends React.Component{




    state = {
        current: 'about'
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {

        const { t } = this.props;
        let { theme } = this.props;

        console.log(this.props.path);



        return (
            <div className="flex flex-row border-b shadow-md bg-menu-primary border-primary header">


                <div className="w-11/24 lg:w-4/24 xl:w-5/24">
                    <div className="flex flex-row items-center">
                        <img alt="das ist ein Bild" className="logo-se" src={SELogo}/>
                        <img alt="das ist ein Bild" className="hidden sm:flex logo-se" src={theme === "dark" ? SETextDark : SEText }/>
                        <img alt="das ist ein Bild" className="ml-1 sm:ml-4 xl:ml-2 logo-uni" src={UniLogo}/>
                        <img alt="das ist ein Bild" className="hidden md:hidden xl:flex ml-2 logo-uni" src={theme === "dark" ? UniTextDark : UniText }/>
                    </div>
                </div>


                <div className="w-2/24 lg:w-16/24 xl:w-14/24 bg-menu-secondary">
                    <Menu onClick={this.handleClick} theme={theme} content={content} current={this.props.path.length > 1 ? this.props.path : Constants.defaultPage} mode="horizontal"/>
                </div>

                <div className="w-11/24 lg:w-4/24 xl:w-5/24">
                    { blockThemeChange.some(x => x === this.props.path) ? null : (<ContextConsumer>
                        {({setTheme}) => (
                            <div className="flex flex-row justify-end items-center h-full">
                                <div className={"mr-2 tooltip-left"}><BulbTwoTone  twoToneColor={theme === "dark" ? "white" : "black"} className="mr-3 text-2xl " onClick={() => setTheme()}/>
                                    <span className={"hidden lg:block tooltip-left-text" }>
                                    {theme === "light" ? t('tooltip.dark-mode') : t('tooltip.light-mode') }
                                </span>
                                </div>
                                <div className={"mr-4 cursor-pointer tooltip-left" } onClick={() => i18next.changeLanguage(Constants.languages.filter(x => x !==i18next.language)[0])}>
                                    {Constants.languages.filter(x => x !==i18next.language).map(x => x.toUpperCase())}
                                    <span className={"mr-2 hidden lg:block tooltip-left-text" }>
                                    {t('tooltip.language')}
                                </span>
                                </div>
                            </div>
                        )}
                    </ContextConsumer>)}
                </div>


            </div>

        )
    }



}

const Header = withTranslation()(Header_Class);


export default Header;