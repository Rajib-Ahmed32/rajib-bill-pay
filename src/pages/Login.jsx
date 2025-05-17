// src/pages/Login.jsx
import React from "react";
import { Label } from "../ui/components/ui/label";
import { Input } from "../ui/components/ui/input";
import { Button } from "../ui/components/ui/button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center dark:bg-gray-900 px-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-10">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          User Login
        </h1>

        <form className="space-y-6" noValidate>
          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              required
              placeholder="name@company.com"
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
            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => console.log("Google Sign-In")}
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
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
