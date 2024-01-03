import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';


const auth = getAuth(app);

export const AuthContext = createContext(null); 

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);

    // Refresh to the page user is on by setting a loading state
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Implement Log In with Email and Password
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Implement Log out
    const logOut = () => {
        setLoading(true);
        signOut(auth);
    }

    // Implement Google Log In
    const googleAuthProvider = new GoogleAuthProvider();
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    // Set up an observer to track user sign-in state changes
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });

        return ()=>{
            unsubscribe();
        }

    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        googleLogIn,
        logIn,
        logOut

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProviders;