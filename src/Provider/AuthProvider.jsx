import  { createContext, useEffect, useState } from 'react';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider} from "firebase/auth";
import auth from './../Firebase/firebase.config';





export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
   const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


   // google login
   const googleLogin = () => {
       setLoading(true)
       return signInWithPopup(auth, googleProvider);
    }
   

    // create user 
    const createUser = (email, password) => {
       setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


//     // signin user
    const signin = (email, password) => {
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }



//     // to sign out user
   const logOut = () => {
       return signOut(auth)
   }


//     // using observer
   useEffect(() => {
       onAuthStateChanged(auth, (user) => {
           setUser(user);
            setLoading(false)

       });
   }, [])

   const authentication = {
        googleLogin,
        createUser,
        signin,
       logOut,
        user,
       loading
//      
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
       </AuthContext.Provider>
   );
};

export default AuthProvider;