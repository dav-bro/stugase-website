import React from "react";
import {Link} from "gatsby";
import { useTranslation } from 'react-i18next';

export default ({ theme, children, selectedKey}) => {

    const { t } = useTranslation();

/*    children.forEach(c => {
       if (c.props.to === selectedKey)
           c.props.className += " menu-item-active-" + theme;
    });*/
    const menuItems = children.map(x => {
        const id = "/" + x.id;
        const active = selectedKey === id;
        return(
            <Link to={id}
                  style={{
                      textDecoration: `none`,
                  }}
                  className={"block p-3 pl-4 pr-4 text-base menu-item-" + (active ? "active-" : "") + theme}
            >
                {t(x.title)}
            </Link>
        )
    });


    return (
        <div className={"h-full flex flex-row menu-" + theme}>
            {menuItems}

        </div>
    );


}