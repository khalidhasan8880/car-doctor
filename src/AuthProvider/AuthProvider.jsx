import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app)
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) => {
     
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
    
        return signInWithEmailAndPassword(auth, email, password)
    }
    // updateUser
    const updateUserData = (name) => {

        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            console.log('name update korte parche');
            // ...
        }).catch(() => {
            console.log('update korte pare nai');
        });
    }
    const logOut =()=>{
        return signOut(auth)
    } 
    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if (user) {
                setUser(user)
                setLoading(false)
            }else{
                setLoading(false)
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        createUser,
        logIn,
        continueWithGoogle,
        updateUserData,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;