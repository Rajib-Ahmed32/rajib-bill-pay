import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex justify-center items-center text-center">
        <div>
          <h1 className="text-5xl font-bold text-[#ca970b] mb-4">404</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <button className="bg-[#ca970b] hover:bg-[#d4a825] text-white px-4 py-2 rounded-md text-sm font-medium transition">
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
