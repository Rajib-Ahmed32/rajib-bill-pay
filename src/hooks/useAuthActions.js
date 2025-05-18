import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const useAuthActions = () => {
  const { signIn, signInWithGoogle, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const userCredential = await signIn(email, password);
      dispatch({ type: "SET_USER", payload: userCredential.user });
      toast.success("Welcome back! Logged in successfully.");
      navigate("/");
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  const googleLogin = async () => {
    try {
      const userCredential = await signInWithGoogle();
      dispatch({ type: "SET_USER", payload: userCredential.user });
      toast.success("Signed in with Google successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Google sign-in failed. Please try again later.");
    }
  };

  const sendResetEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw error;
    }
  };

  return { login, googleLogin, sendResetEmail };
};
