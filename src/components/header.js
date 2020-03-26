import React from "react";
import {Col, Layout, Menu, Row} from "antd";
import {withTranslation} from "react-i18next";
import {Link} from "gatsby";
import logo from "../static/images/SE_Logo_Text.png";
import {SettingFilled} from "@ant-design/icons";
import "../static/styles/import"

const themes = [
    "light",
    "dark"
]

const content = [
    {
        id: "about",
        title: "about.short"
    },
    {
        id: "info",
        title: "info.short"
    },
    {
        id: "dates",
        title: "dates.short"
    },
    {
        id: "contact",
        title: "contact.short"
    },
    {
        id: "members",
        title: "members.short"
    },
    {
        id: "o-week",
        title: "o-week.short"
    },
    {
        id: "important-sites",
        title: "important.short"
    }
];



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

        const { theme } = this.state;


        return (
            <Row >
                <Col span={5} className={"header-" + theme}>
                    <div className={"logo-" + theme}>
                        <img alt="das ist ein Bild" className={"logo-" + theme} src={logo}/>
                    </div>
                </Col>
                <Col span={14} >
                    <Menu onClick={this.handleClick} theme={theme} selectedKeys={this.props.siteIndex} mode="horizontal">
                        {menuItems}
                    </Menu>
                </Col>
                <Col span={5} className={"header-" + theme}>
                    <SettingFilled onClick={() => this.handleThemeChange()}/>
                </Col>
            </Row>
        )
    }

    handleThemeChange(newTheme) {
        if (!newTheme) {
            const ind = themes.indexOf(this.state.theme);
            newTheme = (ind === themes.length - 1) ? themes[0] : themes[ind + 1];
        }
        console.log(newTheme);
        this.setState({theme: newTheme})
    }


}

const Header = withTranslation()(Header_Class);


export default Header;