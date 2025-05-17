import React from "react";
import { Label } from "../ui/components/ui/label";
import { Input } from "../ui/components/ui/input";
import { Button } from "../ui/components/ui/button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useRegister } from "../hooks/useRegister";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Register = () => {
  const { register, loading } = useRegister();
  const { signInWithGoogle, dispatch } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const photoURL = e.target.photoURL.value.trim();
    const password = e.target.password.value.trim();

    register({ name, email, photoURL, password });
  };

  const handleGoogleRegister = async () => {
    try {
      const userCredential = await signInWithGoogle();
      dispatch({ type: "SET_USER", payload: userCredential.user });
      toast.success("Signed up with Google!");
    } catch (error) {
      console.error("Google Sign-Up failed:", error.message);
      toast.error("Google Sign-Up failed");
    }
  };

  return (
    <section className="min-h-screen flex items-start justify-center px-4 py-10 overflow-y-auto">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          User Registration
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="photoURL">Photo URL</Label>
            <Input
              type="text"
              id="photoURL"
              name="photoURL"
              placeholder="https://your-photo.com"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
              title="Password must be at least 6 characters long, contain at least one uppercase and one lowercase letter."
              required
            />
          </div>

          <Button type="submit" className="w-full py-2 text-sm">
            Register
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2 py-2 text-sm"
            onClick={handleGoogleRegister}
          >
            <FcGoogle className="w-5 h-5" />
            Continue with Google
          </Button>

          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
