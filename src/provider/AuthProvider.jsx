import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)
    const createUser = (emai, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, emai, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLoading(false)
                setUser(currentUser)
            }
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user, setUser,
        createUser, loginUser, logOut, updateUserProfile,
        loading

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;