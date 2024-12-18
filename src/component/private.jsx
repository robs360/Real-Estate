import React, { useContext } from "react";
import { Navigate ,useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Private=({children})=>{
    const location=useLocation();
    console.log(location)
    const {user}=useContext(AuthContext);
    if(user){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to={'/log'}></Navigate>
    }
    
}
export default Private