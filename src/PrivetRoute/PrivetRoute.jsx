import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    console.log(user);
    const location = useLocation()
    if (loading) {
        return  <div className="text-4xl font-bold">Loading...</div>
    }
    if (user?.email) {
        return children
    }else{
        return (
            <Navigate to='/login' state={{from:location}} replace></Navigate>
        );
    }
};

export default PrivetRoute;