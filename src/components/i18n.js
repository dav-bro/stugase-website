import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import translation_de from "../static/translations/de/translations";
import translation_en from "../static/translations/en/translations";


const resources = {
    en: {
        translation: translation_en               // 'common' is our custom namespace
    },
    de: {
        translation: translation_de
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "de",
        interpolation: {
            escapeValue: false, // react already safes from xss
            format: function(value, format, lng){
               /* if (format === 'bold') {
                    return value.bold();
                }*/
            }
        }
    });

export default i18n;