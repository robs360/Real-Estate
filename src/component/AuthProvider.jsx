import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState, } from "react";
import app from "./firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [url, setUrl] = useState('');
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signin part

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    // signout part
    const logOut=()=>{
       return signOut(auth)
    }
    const authInfo = {
        user, createUser,
        url, setUrl, signIn,
        logOut
    };
    console.log(url);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider