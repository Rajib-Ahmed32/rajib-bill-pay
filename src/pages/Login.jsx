// pages/Login.jsx
import { toast } from "sonner";
import { useEffect } from "react";
import React, { useRef } from "react";
import { Label } from "../ui/components/ui/label";
import { Input } from "../ui/components/ui/input";
import { Button } from "../ui/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useAuthActions } from "../hooks/useAuthActions";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const { login, googleLogin, sendResetEmail } = useAuthActions();
  const emailRef = useRef();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = e.target.password.value.trim();
    login(email, password);
    emailRef.current.value = "";
    e.target.password.value = "";
  };

  useEffect(() => {
    if (location.state?.showToast) {
      toast.error("You need to be logged in to view this content");
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleForgotPassword = async () => {
    const email = emailRef.current?.value.trim();
    if (!email) {
      return toast.error("Please enter your email to reset password.");
    }
    try {
      await sendResetEmail(email);
      toast.success("Password reset link sent to your email.");
    } catch (error) {
      toast.error("Failed to send reset email: " + error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center dark:bg-gray-900 px-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-10">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          User Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6" noValidate>
          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              required
              placeholder="name@company.com"
              ref={emailRef}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              required
              placeholder="••••••••"
            />
          </div>

          <div className="text-right text-sm">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={googleLogin}
          >
            <FcGoogle className="w-5 h-5" />
            Continue with Google
          </Button>

          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
