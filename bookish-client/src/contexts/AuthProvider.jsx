import { createContext,  useEffect,  useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    const[loading , setLoading] = useState(true);
    
    const createUser = (email , password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth , googleProvider);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        user,
        loginWithGoogle,
        loading,
        login,
        logout,
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
