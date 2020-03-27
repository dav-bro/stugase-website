import React from "react";
import {Col, Menu, Row} from "antd";
import {withTranslation} from "react-i18next";
import {Link} from "gatsby";
import logo from "../static/images/SE_Logo_Text.png";
import "../static/styles/import"
import ContextConsumer from "./Context";
import BulbTwoTone from "@ant-design/icons/lib/icons/BulbTwoTone";

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
                    <div className={"logo-" + theme}>
                        <img alt="das ist ein Bild" className={"logo-" + theme} src={logo}/>
                    </div>
                </Col>
                <Col span={14} >
                    <Menu onClick={this.handleClick} theme={theme} selectedKeys={this.props.uri} mode="horizontal">
                        {menuItems}
                    </Menu>
                </Col>
                <Col span={5} >
                    { blockThemeChange.some(x => x === this.props.uri) ? null : (<ContextConsumer>
                        {({setTheme}) => (
                            <BulbTwoTone style={{paddingTop: 10, paddingRight: 50}} twoToneColor={theme === "dark" ? "white" : "black"} className="float-right text-2xl " onClick={() => setTheme()}/>
                        )}
                    </ContextConsumer>)}
                </Col>
            </Row>
        )
    }



}

const Header = withTranslation()(Header_Class);


export default Header;