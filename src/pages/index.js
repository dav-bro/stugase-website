import { navigate } from "gatsby"

export default () => {
    if (typeof window !== 'undefined')
        navigate("/about");
    return null;
};