import React from "react";
import ContextConsumer from "../components/Context";

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("gatsbyUser")
        ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
        : {}

const setUser = user =>
    window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {

   /* return(
        <ContextConsumer>
            {({loginMqtt}) => (
                loginMqtt(username, password)
            )}
        </ContextConsumer>
    )*/

    if (username === `${process.env.GATSBY_USER_NAME}` && password === `${process.env.GATSBY_USER_PASSWORD}`) {
        return setUser({
            username: `john`,
            name: `Johnny`,
            email: `johnny@example.org`,
        })
    }

    return false
}

export const isLoggedIn = () => {
    const user = getUser()

    return !!user.username
}

export const logout = callback => {
    setUser({})
    callback()
}