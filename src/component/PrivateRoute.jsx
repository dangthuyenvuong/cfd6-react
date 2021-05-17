import { Redirect, Route } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { useSelector } from "react-redux";
export function PrivateRoute(prop) {
    let { login } = useSelector(store => store.auth)
    // let {login} = useAuth()
    if (!login) {
        setTimeout(() => {
            document.querySelector('.popup-login').style.display = 'flex'
        }, 0)
        return <Route>
            <Redirect to="/" />
        </Route>
    }

    return <Route {...prop} />

}