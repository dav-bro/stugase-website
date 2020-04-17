import React from "react"
import { navigate } from "gatsby"
import {logout} from "../services/auth";

const Profile = () => (
    <div className="mt-40">
        <h1>Your profile</h1>
        <ul>
            <li>Name: Your name will appear here</li>
            <li>E-mail: And here goes the mail</li>
        </ul>
        <button onClick={() => logout(() => navigate(`/app/login`))}>log out</button>
    </div>
)

export default Profile