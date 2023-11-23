import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import auth from "../Utils/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  // create user
  const register = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const login = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // logOut
  const logOut = () => {
    setUserLoading(true);
    return signOut(auth);
  };
  // update profile
  const newUpdateProfile = (name, img) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img || "",
    });
  };

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const userEmail = user?.email || currentUser?.email;
      setUser(currentUser);
      // implement jwt
      // if (currentUser) {
      //   axios
      //     .post(
      //       "https://assingment-11-c5-server.vercel.app/api/v1/jwt",
      //       { email: userEmail },
      //       {
      //         withCredentials: true,
      //       }
      //     )

      //     .catch((err) => console.log(err));
      // }

      setUserLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const info = {
    user,
    userLoading,
    register,
    login,
    logOut,
    googleLogin,
    newUpdateProfile,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
