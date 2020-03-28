import React from "react";
import {Col, Menu, Row} from "antd";
import {withTranslation} from "react-i18next";
import {Link} from "gatsby";
import "../static/styles/import"
import ContextConsumer from "./Context";
import BulbTwoTone from "@ant-design/icons/lib/icons/BulbTwoTone";
import i18next from "i18next";


import SELogo from "../static/images/SE_Logo.png";
import SEText from "../static/images/SE_Text.png";
import UniLogo from "../static/images/Uni_Logo.png";
import UniText from "../static/images/Uni_Text.png";


import SETextDark from "../static/images/SE_Text-dark.png";

import UniTextDark from "../static/images/Uni_Text-dark.png";




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
        current: 'about',
        theme: 'light'
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {

        const { t } = this.props;

        console.log(this.props.path);

        const menuItems = content.map(x => {
            const id = x.id;
            return(
                <Menu.Item key={id}>
                    <Link to={"/" + id}
                          style={{
                              textDecoration: `none`,
                          }}>
                        {t(x.title)}
                    </Link>
                </Menu.Item>
            )
        });

        let { theme } = this.props;

        return (
            <Row className={"header-" + theme}>
                <Col span={5} >
                    <div className="flex flex-row items-center">
                        <img alt="das ist ein Bild" className={"logo-se-" + theme} src={SELogo}/>
                        <img alt="das ist ein Bild" className={"hidden md:flex logo-se-" + theme} src={theme === "dark" ? SETextDark : SEText }/>
                        <img alt="das ist ein Bild" className={"ml-4 logo-uni-" + theme} src={UniLogo}/>
                        <img alt="das ist ein Bild" className={"hidden xl:flex ml-2 logo-uni-" + theme} src={theme === "dark" ? UniTextDark : UniText }/>
                    </div>
                </Col>
                <Col span={14} >
                    <Menu onClick={this.handleClick} theme={theme} selectedKeys={this.props.path.length > 1 ? this.props.path : Constants.defaultPage} mode="horizontal">
                        {menuItems}
                    </Menu>
                </Col>
                <Col span={5} >
                    { blockThemeChange.some(x => x === this.props.path) ? null : (<ContextConsumer>
                        {({setTheme}) => (
                            <div className="flex flex-row justify-end items-center h-full">
                                <div className={"tooltip-left-" + theme}><BulbTwoTone  twoToneColor={theme === "dark" ? "white" : "black"} className="mr-3 text-2xl " onClick={() => setTheme()}/>
                                <span className={"tooltip-left-text-" + theme }>
                                    {theme === "light" ? t('tooltip.dark-mode') : t('tooltip.light-mode') }
                                </span>
                                </div>
                                <div className={"mr-2 cursor-pointer tooltip-left-" + theme } onClick={() => i18next.changeLanguage(Constants.languages.filter(x => x !==i18next.language)[0])}>
                                    {Constants.languages.filter(x => x !==i18next.language).map(x => x.toUpperCase())}
                                    <span className={"tooltip-left-text-" + theme }>
                                    {t('tooltip.language')}
                                </span>
                                </div>
                            </div>
                        )}
                    </ContextConsumer>)}
                </Col>
            </Row>
        )
    }



}

const Header = withTranslation()(Header_Class);


export default Header;