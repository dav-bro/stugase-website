import React from "react";
import {ContextProviderComponent} from "./Context";
import ContextConsumer from "./Context";
import Header from "./header";
import Footer from "./footer"
import "../static/styles/main.css"

const Layout = ({ children, ...props }) => (
    <ContextProviderComponent>
        <ContextConsumer>
            {({ data }) => (
                <Header {...props} theme={data.theme} />
            )}
        </ContextConsumer>
        {children}
        <Footer/>
    </ContextProviderComponent>
);


export default Layout;