import { useContext, createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from "../api/firebase.config.jsx"  //se esta consumiendo los servicios de firebase
const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    // Cerrar sesion
    const logOut = () => {
        signOut(auth)
    }
    // En caso de que quiera entrar de nuevo se usa useeffect, solo se ejecuta una vez
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            return () => {
                unsubscribe();
            }

        })
    }, [])
    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}
// Exportar las funciones

export const UserAuth = () => {
    return useContext(AuthContext)
}