import React from "react";
import {Menu, Layout, Row, Col} from "antd";
import {i18n as i18next} from "i18next";
import {withTranslation} from "react-i18next";
import {Link} from "gatsby";
import logo from "../static/images/SE_Logo_Text.png";
import {SettingFilled} from "@ant-design/icons";

const AntHeader = Layout.Header;

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


        return (
            <Row className="header">
                <Col span={5} className="light-background">
                    <div className="logo">
                        <img alt="das ist ein Bild" className="logo" src={logo}/>
                    </div>
                </Col>
                <Col span={14}>
                    <Menu onClick={this.handleClick} theme="light" selectedKeys={this.props.siteIndex} mode="horizontal">
                        {menuItems}
                    </Menu>
                </Col>
                <Col span={5} className="light-background">
                    <SettingFilled />
                </Col>
            </Row>
        )
    }



}

const Header = withTranslation()(Header_Class);


export default Header;