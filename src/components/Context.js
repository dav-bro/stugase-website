// Context.js
import React from "react"



const defaultContextValue = {
    data: {
        // set your initial data shape here
        theme: "light"
    },
    set: () => {},
    setTheme: () => {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

const themes = [
    "light",
    "dark"
]

class ContextProviderComponent extends React.Component {
    constructor() {
        super();

        this.setData = this.setData.bind(this);
        this.setTheme = this.setTheme.bind(this);
        this.state = {
            ...defaultContextValue,
            set: this.setData,
            setTheme: this.setTheme,
        }
    }

    setData(newData) {
        this.setState(state => ({
            data: {
                ...state.data,
                ...newData,
            },
        }))
    }

    setTheme(newTheme) {
        if (!newTheme) {
            const ind = themes.indexOf(this.state.data.theme);
            newTheme = (ind === themes.length - 1) ? themes[0] : themes[ind + 1];
        }
        console.log(newTheme);
        this.setState(state => ({
            data: {
                ...state.data,
                theme: newTheme
            },
        }))
        console.log(this.state)
    }

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>
    }
}

export { Consumer as default, ContextProviderComponent }