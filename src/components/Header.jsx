import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { AuthContext } from "../context/AuthContext";
import { useBillContext } from "../context/BillContext";
import { toast } from "sonner";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/components/ui/dropdown-menu";

import { LogOut, User, Wallet } from "lucide-react";

const Header = () => {
  const { user, dispatch } = useContext(AuthContext);
  const { balance } = useBillContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (user?.email) {
        localStorage.removeItem(`balance_${user.email}`);
        localStorage.removeItem(`bills_${user.email}`);
      }

      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Failed to logout.");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div>
            <Link to="/" className="block md:hidden">
              <img
                src="/images/billpay.svg"
                alt="Mobile Banking Logo"
                className="w-10 h-10"
              />
            </Link>

            <div className="hidden md:block">
              <Logo />
            </div>
          </div>

          <nav className="flex gap-3 md:gap-6 font-semibold text-[#050521]">
            <Link to="/bills" className="hover:text-[#ca970b] transition">
              Bills
            </Link>
            <Link to="/profile" className="hover:text-[#ca970b] transition">
              Profile
            </Link>
          </nav>

          <div className="relative">
            {!user ? (
              <div className="flex gap-3">
                <Link to="/login">
                  <button className="rounded-md bg-[#ca970b] px-4 py-2 text-sm font-medium text-white hover:bg-[#d4a825] transition">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="rounded-md bg-[#050521] px-4 py-2 text-sm font-medium text-white hover:bg-[#1a1a3a] transition">
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <img
                    src={
                      user.photoURL ||
                      "https://randomuser.me/api/portraits/lego/1.jpg"
                    }
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border-2 border-[#ca970b] hover:scale-105 transition cursor-pointer shadow-lg"
                  />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-64 bg-white shadow-2xl border border-gray-200 rounded-xl mt-2 mr-2">
                  <DropdownMenuLabel className="text-gray-800">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-[#ca970b]" />
                      <span>
                        Hello,{" "}
                        <span className="font-semibold text-black">
                          {user.displayName || "User"}
                        </span>
                      </span>
                    </div>
                  </DropdownMenuLabel>

                  <DropdownMenuItem disabled>
                    <Wallet className="mr-2 h-4 w-4 text-green-600" />
                    <span className="text-sm">
                      Balance:{" "}
                      <span className="font-semibold text-green-700">
                        {balance.toLocaleString()} BDT
                      </span>
                    </span>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 hover:bg-red-100 cursor-pointer font-medium"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
