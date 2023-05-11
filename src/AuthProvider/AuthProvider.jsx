import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app)
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

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
        }).catch((error) => {
            console.log('update korte pare nai');
        });
    }

    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {
        user: 'khalid',
        createUser,
        logIn,
        continueWithGoogle,
        updateUserData

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;