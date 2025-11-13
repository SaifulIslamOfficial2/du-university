import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContex";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            DU
          </div>
          <div className="flex flex-col">
            <span>Daffodil</span>
            <span className="mt-[-6px] text-indigo-600">University</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          {user && (
            <Link to="/myprofile" className="hover:text-indigo-600">
              My Profile
            </Link>
          )}
          <Link to="/courses" className="hover:text-indigo-600">
            All Courses
          </Link>
        </nav>

        {/* Right Area */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <img
                  src={user?.photoURL || "https://i.pravatar.cc/40"}
                  alt="User"
                  className="w-10 h-10 rounded-full border object-cover"
                />
                <span className="hidden sm:block font-medium">
                  {user?.displayName || "User"}
                </span>
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute top-12 right-0 bg-white border rounded shadow w-36">
                  <Link
                    to="/myprofile"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/loginPage"
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Login
            </Link>
          )}

          {/* icon for Mobile */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col p-4 space-y-3 font-medium">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-600"
            >
              Home
            </Link>
            {user && (
              <Link
                to="/myprofile"
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600"
              >
                My Profile
              </Link>
            )}
            <Link
              to="/courses"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-600"
            >
              All Courses
            </Link>

            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-left hover:text-red-500"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/loginPage"
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
