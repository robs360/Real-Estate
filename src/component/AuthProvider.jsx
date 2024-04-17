import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "./firebase.config";

export const AuthContext=createContext(null);
const auth=getAuth(app);
const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    
    const creteUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo={

    };
    return(
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider