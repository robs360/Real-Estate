import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "./firebase.config";

export const AuthContext=createContext(null);
const auth=getAuth(app);
const AuthProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [url,setUrl]=useState('');
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    // signin part

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo={
         user, createUser,
         url,setUrl,signIn
    };
    console.log(url);
    return(
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider