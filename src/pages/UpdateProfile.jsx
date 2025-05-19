import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/components/ui/card";
import { Input } from "../ui/components/ui/input";
import { Button } from "../ui/components/ui/button";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [displayName, setDisplayName] = useState(user?.displayName || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <section className="px-4   py-12 min-h-screen bg-slate-100 dark:bg-slate-900 flex justify-center items-center">
      <Card className="w-full max-w-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/30 dark:border-slate-700/30 shadow-xl rounded-2xl p-6 md:p-10">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center font-semibold text-gray-900 dark:text-white">
            Update Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="w-full">
              <label
                htmlFor="photoURL"
                className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Photo URL
              </label>
              <Input
                id="photoURL"
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="w-full text-sm"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="displayName"
                className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Display Name
              </label>
              <Input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full text-sm"
              />
            </div>

            <Button
              type="submit"
              className="w-full md:w-[200px] mx-auto text-sm font-semibold"
            >
              Update Information
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default UpdateProfile;
