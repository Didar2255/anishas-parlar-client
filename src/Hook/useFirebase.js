import initializeFirebase from "../Firebase/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

initializeFirebase()
const useFirebase = () => {
    const GoogleProvider = new GoogleAuthProvider()
    const auth = getAuth()
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const googleLogin = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const destination = location.state.from || '/home'
                history.replace(destination)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    const handelSignOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })

    }, [auth]);

    return { googleLogin, handelSignOut, user, error, isLoading }
}

export default useFirebase;