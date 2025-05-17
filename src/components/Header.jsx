import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />

          <nav className="hidden md:flex gap-8 font-semibold text-[#050521]">
            <Link to="/bills" className="hover:text-[#ca970b] transition">
              Bills
            </Link>
            <Link to="/profile" className="hover:text-[#ca970b] transition">
              Profile
            </Link>
          </nav>

          <div className="relative">
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
            {false && (
              <div className="relative">
                <img
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer"
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md border bg-popover text-popover-foreground shadow-lg z-50">
                    <div className="px-4 py-3 text-sm">
                      Hello, <span className="font-semibold">User</span>
                    </div>
                    <div className="px-4 py-1 text-sm">
                      Balance:{" "}
                      <span className="font-semibold text-green-600">
                        10000 BDT
                      </span>
                    </div>
                    <hr className="my-1 border-muted" />
                    <button className="w-full px-4 py-2 text-left text-sm text-destructive hover:bg-destructive/10 transition rounded-b-md">
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
