import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
    createUserWithEmailAndPassword, onAuthStateChanged,
    signInWithEmailAndPassword, signOut, updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            //jwt  er kaj karbar
            if (currentUser?.email) {
                const user = { email: currentUser.email }
              
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
                    withCredentials: true
                })
                    .then(res => {
                    
                        setLoading(false);
                    })
            } else {
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, {
                    withCredentials: true
                })
                    .then(res => {
                        setLoading(false);
                    })
            }


        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user, setUser,
        createUser, loginUser, logOut,
        updateUserProfile, signInWithGoogle,
        loading
    };

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
