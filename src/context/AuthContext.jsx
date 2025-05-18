// src/context/AuthContext.jsx
import React, { createContext, useReducer, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { authReducer, initialState } from "../reducers/authReducer";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch({ type: "SET_USER", payload: currentUser });
    });
    return () => unsubscribe();
  }, []);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
  const logOut = () => signOut(auth).then(() => dispatch({ type: "LOGOUT" }));

  const authData = {
    user: state.user,
    loading: state.loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    dispatch,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuthContext = () => useContext(AuthContext);
