import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../ui/components/ui/avatar";
import { Button } from "../ui/components/ui/button";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <p className="text-center mt-10 text-lg">Loading user data...</p>;
  }

  return (
    <section className="px-4 py-12 min-h-screen bg-slate-100 dark:bg-slate-900 flex justify-center items-center">
      <Card className="w-full max-w-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/30 dark:border-slate-700/30 shadow-xl rounded-2xl p-6 md:p-10">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white">
            My Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <Avatar className="w-24 h-24 md:w-28 md:h-28 border-2 border-gray-300 shadow-sm">
              <AvatarImage
                src={user.photoURL || "/default-profile.png"}
                alt="Profile"
              />
              <AvatarFallback className="text-lg md:text-xl uppercase">
                {user.displayName?.[0] || "U"}
              </AvatarFallback>
            </Avatar>

            <div className="text-center md:text-left space-y-4 flex-1">
              <div>
                <p className="text-xs uppercase text-gray-700">Name</p>
                <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-white">
                  {user.displayName || "No Name Set"}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500">Email</p>
                <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-white break-words">
                  {user.email}
                </p>
              </div>
              <Button
                onClick={() => navigate("/profile/update")}
                className="mt-4 md:mt-2 px-6 py-2 text-sm font-semibold"
              >
                Update Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default MyProfile;
