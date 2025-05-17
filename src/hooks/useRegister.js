import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const { createUser, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const register = async ({ name, email, photoURL, password }) => {
    setLoading(true);
    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name, photoURL });

      dispatch({ type: "SET_USER", payload: user });
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error.message);
      toast.error("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading };
};
