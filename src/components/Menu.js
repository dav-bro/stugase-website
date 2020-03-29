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
        return(
            <Link to={id}
                  style={{
                      textDecoration: `none`,
                  }}
                  className={"block p-3 pl-4 pr-4 text-base menu-item-" + breakpoint + (active ? "-active-" : "-") + theme}
            >
                {t(x.title)}
            </Link>
        )
    });

    let menu;

    switch (breakpoint) {
        case "xxl":
        case "xl":
        case "lg":
            menu = (
                <div className={"h-full  md:flex md:flex-row menu-" + theme}>
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
        let { children, theme, current } = this.props;

        if (!expanded) {
            children = (<div className="pr-4 flex flex-row items-center justify-center">
                            {children.find(x => x.props.to === current)}
                            <MenuOutlined className="text-xl" />
                        </div>)
        }

        return(
            <div>
                {expanded ? <div className="disable-app"/> : null}
                <div className="flex flex-col items-center justify-center" onClick={() => this.setState({expanded: !expanded})}>
                            <ul className={" border rounded text-center whitespace-no-wrap z-50 menu-list-" + theme}>
                                {children}
                            </ul>
                </div>
            </div>
        );
    }


}