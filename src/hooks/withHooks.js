import React from "react";
import {useTranslation} from "react-i18next";

export default function withHooks(Component) {
    return function WrappedComponent(props) {
        const { t } = useTranslation();
        return <Component {...props}  t={t} />;
    }
}
