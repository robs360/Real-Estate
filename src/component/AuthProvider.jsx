import {
    createUserWithEmailAndPassword, getAuth,
    onAuthStateChanged, signInWithEmailAndPassword,
    signInWithPopup, signOut, GoogleAuthProvider
} from "firebase/auth";
import React, { createContext, useEffect, useState, } from "react";
import app from "./firebase.config";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const googleprovider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider()
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
    // google Signin method
    const googleSignin = () => {
        return signInWithPopup(auth, googleprovider)
    }
    // git signin
    const gitSignin = () => {
        return signInWithPopup(auth, githubProvider)
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
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        user, createUser,
        url, setUrl, signIn,
        logOut,googleSignin,gitSignin
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider