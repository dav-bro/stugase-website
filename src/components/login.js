import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn, logout } from "../services/auth"

class Login extends React.Component {
    state = {
        username: ``,
        password: ``,
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        handleLogin(this.state)
    }

    render() {
       /* if (isLoggedIn()) {
            navigate(`/app/profile`)
        }*/

        let user = `${process.env.USER_NAME}`;
        console.log(user);

        return (
            <div className="bg-disabled">

                <div className="modal-content w-1/3 bg-white">

                    <h1 className="text-3xl ml-4 mb-2">Please Login</h1>

                    <div className="flex flex-col w-full border-t">
                        <form
                            method="post"
                            onSubmit={event => {
                                this.handleSubmit(event);
                                navigate(`/app/profile`)
                            }}>
                        <div className="flex w-full mb-3 mt-3">


                            <div className="w-0 sm:w-1/3 invisible sm:visible text-right pt-2 pr-4 font-bold">

                                <label htmlFor={"user-name"}>Benutzername</label>

                            </div>
                            <div className="w-full pr-2 sm:w-2/3">

                                <input
                                    className="bg-input border-primaryd shadow appearance-none border rounded w-full py-2 px-3 leading-tight  "
                                    id={"username"}
                                    name={"username"}
                                    type={"text"}
                                    placeholder={"username"}
                                    onChange={this.handleUpdate}
                                />

                            </div>
                        </div>

                        <div className="flex w-full mb-3 mt-3">
                            <div className="w-0 sm:w-1/3 invisible sm:visible text-right pt-2 pr-4 font-bold">

                                <label htmlFor={"password"}>Passwort</label>

                            </div>
                            <div className="w-full pr-2 sm:w-2/3">

                                <input
                                    className="bg-input border-primaryd shadow appearance-none border rounded w-full py-2 px-3 leading-tight  "
                                    id={"password"}
                                    name={"password"}
                                    type={"password"}
                                    placeholder={"password"}
                                    onChange={this.handleUpdate}/>


                            </div>
                        </div>

                        <div className="flex w-full mb-3 mt-3">
                            <div className="w-0 sm:w-1/3 invisible sm:visible text-right pt-2 pr-4 font-bold">



                            </div>
                            <div className="w-full pr-2 sm:w-2/3">

                                <input type={"submit"} value={"login"} className="float-right bg-blue-600 text-white p-2 -ml-3 rounded-sm flex flex-row justify-center items-center pl-4 pr-4"/>



                            </div>


                        </div>

                        </form>
                        </div>





                    </div>

                </div>



        )
    }
}

export default Login


/*<div className="mt-40 ">
                <h1>Log in</h1>
                <form
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                        navigate(`/app/profile`)
                    }}
                >
                    <label>
                        Username
                        <input type="text" name="username" onChange={this.handleUpdate} />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleUpdate}
                        />
                    </label>
                    <input type="submit" value="Log In" />
                </form>

            </div>*/