import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn, logout } from "../services/auth"
import ContextConsumer from "../components/Context";
import  Button  from "./button";

class Login extends React.Component {
    state = {
        username: ``,
        password: ``,
        status: ""
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({status: "connecting"});

        handleLogin({username: this.state.username, password: this.state.password}).then(() => navigate("/app/profile")).catch((m) => this.setState({status: "error"}));
    }

    render() {

        const { status } = this.state;

       /* if (isLoggedIn()) {
            navigate(`/app/profile`)
        }*/

     /*   let user = `${process.env.USER_NAME}`;
        console.log(user);
*/
        return (
            <div className="bg-disabled">

                <div className="modal-content w-1/3 bg-menu-secondary">

                    <h1 className="text-3xl ml-4 mb-2">Please Login</h1>

                    <div className="flex flex-col w-full border-t">
                        <ContextConsumer>
                            {({loginMqtt}) => (
                        <form
                            method="post"
                            onSubmit={event => {
                                this.handleSubmit(event);
                            }}>
                        <div className="flex w-full mb-3 mt-3">


                            <div className="w-0 sm:w-1/3 invisible sm:visible text-right pt-2 pr-4 font-bold">

                                <label htmlFor={"user-name"}>Benutzername</label>

                            </div>
                            <div className="w-full pr-2 sm:w-2/3">

                                <input
                                    className={"bg-input shadow appearance-none border rounded w-full py-2 px-3 leading-tight  " + (status === "error" ? " border-red-400" : " border-primary ")}
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
                                    className={"bg-input shadow appearance-none border rounded w-full py-2 px-3 leading-tight  " + (status === "error" ? " border-red-400" : " border-primary ")}
                                    id={"password"}
                                    name={"password"}
                                    type={"password"}
                                    placeholder={"password"}
                                    onChange={this.handleUpdate}/>
                                <p className={"text-xs mt-2 italic " + (status === "error" ? "text-red-400 " : "text-primary") }>{status === "error" ? "falsches Passwort oder Benutzername" : status === "connecting" ? "verbinde..." : ""}</p>

                            </div>
                        </div>

                        <div className="flex w-full mb-3 mt-3">
                            <div className="w-0 sm:w-1/3 invisible sm:visible text-right pt-2 pr-4 font-bold">



                            </div>
                            <div className="w-full pr-2 sm:w-2/3">

                                <Button type={status === "error" ? "error" : "primary"} className="float-right ">
                                    {status === "error" ? (
                                        <>
                                            <RedoOutlined />
                                            <p className="ml-4">retry</p>
                                        </>
                                    ) : status === "connecting" ? (
                                        <>
                                            <LoadingOutlined />
                                            <p className="ml-4">logging in</p>
                                        </>
                                        ) : (
                                        <>
                                            <LoginOutlined/>
                                            <p className="ml-4">login</p>
                                        </>
                                        )}
                                </Button>



                            </div>


                        </div>

                        </form>
                            )}
                        </ContextConsumer>
                        </div>





                    </div>

                </div>



        )
    }
}

export default Login