import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

function PrivateRoute(props) {
    if (props.loggedIn) {
        return props.children
    } else {
        toast("You need to login first!", { icon: "⚠️" }); // or toast.info()
        return <Navigate to='/login' />

    }
}

export default PrivateRoute;