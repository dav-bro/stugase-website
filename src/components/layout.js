import React from "react";
import {ContextProviderComponent} from "./context";
import ContextConsumer from "./context";
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
        <div className="flex flex-col h-full">
            {children}
            <Footer/>
        </div>
    </ContextProviderComponent>
);


export default Layout;