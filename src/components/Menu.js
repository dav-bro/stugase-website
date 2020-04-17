import React from "react";
import {Link} from "gatsby";
import { useTranslation } from 'react-i18next';
import useWindowDimensions from "../hooks/useWindowDimensions";
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined";

export default ({ theme, content, current}) => {

    const { t } = useTranslation();

    const { breakpoint } = useWindowDimensions();

    const menuItems = content.map(x => {
        const id = "/" + x.id;
        const active = current === id;
        const classNameActive = " lg:border-b-3 lg:dark:bg-menu-active border-menu-active";
        const className = "lg:hover:border-b-3 lg:focus:border-b-3 focus:outline-none hover:bg-menu-active focus:bg-menu-active border-menu-active block p-3 pl-4 pr-4";
        return(
            <Link to={id}
                  style={{
                      textDecoration: `none`,
                  }}
                  className={className + (active ? classNameActive : "")}
            >
                {t(x.title)}
            </Link>
        )
    });

    let menu;

    switch (breakpoint) {
        case "xl":
        case "lg":
            menu = (
                <div className={"h-full  md:flex md:flex-row menu"}>
                    {menuItems}
                </div>
                );
            break;
        default:
            menu = (
                    <MenuList theme={theme} current={current}>
                        {menuItems}
                    </MenuList>
            )

    }


    return (
       menu
    );


}

class MenuList extends React.Component {


    state = {
        expanded: false,
    };

    render() {
        const { expanded } = this.state;
        let { children, current } = this.props;

        if (!expanded) {
            children = (<div className="pr-4 flex flex-row items-center justify-center border-primary">
                            {children.find(x => x.props.to === current)}
                            <MenuOutlined className="text-xl" />
                        </div>)
        }

        return(
            <div>
                {expanded ? <div className="bg-disabled" onClick={() => this.setState({expanded: !expanded})}/> : null}
                <div className="flex flex-col items-center justify-center" onClick={() => this.setState({expanded: !expanded})}>
                            <ul className={" border rounded text-center whitespace-no-wrap z-50 bg-primary border-primary"}>
                                {children}
                            </ul>
                </div>
            </div>
        );
    }


}