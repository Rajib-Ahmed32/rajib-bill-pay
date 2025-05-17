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
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  const googleLogin = async () => {
    try {
      const userCredential = await signInWithGoogle();
      dispatch({ type: "SET_USER", payload: userCredential.user });
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (error) {
      toast.error("Google Sign-In failed");
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
