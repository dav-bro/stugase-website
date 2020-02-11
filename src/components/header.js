import React from 'react';
import {Link} from "gatsby";
import {useTranslation, withTranslation} from "react-i18next";
import logo from "../static/images/SE_Logo_Text.png"
import '../static/css/styles.css'
import 'antd/dist/antd.css';

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


const languages = {
    default: "de",
    german: "de",
    english: "en",
};


function TabButton(props) {
    const { t } = useTranslation();

    return (
        <button className="tab-btn" disabled={props.disabled}>
            <Link to={"/" + props.id}
                  style={{
                      color: `white`,
                      textDecoration: `none`,
                  }}>
                {t(props.title)}
            </Link>
        </button>
    )
}


class TabBarClass extends React.Component {

    constructor(props){
        super(props);
        let buttons = [];
        for (let i = 0; i < content.length; i++){
            buttons.push({title: content[i].title});
        }
        this.state = {
            buttons: buttons,
            languagesel: null,
            language: languages.default
        }

    }

    render() {
        console.log(this.state);
        const { i18n } = this.props;

        let buttons = [];

        for(let i = 0; i < content.length; i++){
            buttons.push( <TabButton language={this.props.language} id={content[i].id} title={content[i].title} disabled={content[i].id === this.props.siteIndex} />);
        }
        console.log("T", i18n);

        return (
            <div id="tab-bar" className="tab-bar">
                <img alt="das ist ein Bild" className="logo" src={logo}/>
                {<div className="language-div">
                    <button className="tab-btn tab-btn-lang-sel" onClick={() => this.selectLanguage()}>{i18n.language.toUpperCase()} </button>
                    {this.state.languagesel}
                </div>}
                {buttons}
            </div>
        )


    }

    selectLanguage() {
        // eslint-disable-next-line array-callback-return
        let langBtns = Object.keys(languages).map((lang, index) => {
            if (index > 0) {
                return (<button className="btn-lang-sel tab-btn-lang-sel tab-btn" onClick={() => this.handleLangSel(languages[lang])}>{languages[lang].toUpperCase()}</button>)
            }
        });

        let divLanguageSel = (
            <div className="div-disabled" id="disable" onClick={() => this.enable()}>
                <div className="language-div language-sel-div" onClick={() => this.enable()}>
                    {langBtns}
                </div>
            </div>
        );

        this.setState(prevState => ({
            buttons: prevState.buttons,
            languagesel: divLanguageSel
        }));

    }
    enable() {
        const languagesel = null;
        this.setState(prevState => ({
            buttons: prevState.buttons,
            languagesel: languagesel
        }));
    }

    handleLangSel(lang) {
        this.setState(prevState =>
            ({
                siteIndex: prevState.siteIndex,
                content: prevState.content,
                language: lang
            }));
        return this.props.handleLangSel(lang);
    }

}


const TabBar = withTranslation()(TabBarClass);




function Header(props) {

    const { i18n } = useTranslation();

    function handleLangSel(lang) {
        console.log("changing Language to: " + lang);
        i18n.changeLanguage(lang);
    }

    return (
            <TabBar siteIndex={props.siteIndex} handleLangSel={(lang) => handleLangSel(lang)}/>
    );

}

export default Header;