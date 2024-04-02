import { Navigate } from "react-router-dom";



function PrivateRoute({isLoggedIn, children}){
    if(isLoggedIn){
        return children;
    }
    else{
        return <Navigate to="/logIn"/>
    }
}

export default PrivateRoute;