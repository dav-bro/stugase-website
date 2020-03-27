import React from "react";
import {ContextProviderComponent} from "./Context";
import ContextConsumer from "./Context";
import Header from "./header";
import "../static/styles/import"

export default ({ children, ...props }) => (
    <ContextProviderComponent>
        <ContextConsumer>
            {({ data }) => (
                <Header {...props} theme={data.theme} />
            )}
        </ContextConsumer>
        {children}
    </ContextProviderComponent>
)