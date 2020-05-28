import {isLoggedIn} from "./auth";

export default (reversed) => (
    ((!reversed && isLoggedIn()) || (reversed && !isLoggedIn() )) ? "chat/user/" : "chat/admin/user/"
)