import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/doctors", label: "DOCTORS" },
  { to: "/contact", label: "CONTACT" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-200">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="logo" />
      <ul className="hidden md:flex gap-5 items-start font-semibold cursor-pointer">
        {navLinks.map((name, index) => (
          <NavLink
            to={name.to}
            key={index}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray-800 hover:text-primary"
            }
          >
            <li key={index} className="hover:text-primary">
              {name.label}
            </li>
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} />
            <img className="w-2.5" src={assets.dropdown_icon} />
            <div className="absolute top-10 right-0 w-40 bg-stone-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <Link to="/my-profile">
                <p className="px-4 py-2 hover:bg-gray-100 border-b border-b-gray-200">
                  {" "}
                  My Profile
                </p>
              </Link>
              <Link to="/my-appointment">
                <p className="px-4 py-2 hover:bg-gray-100 border-b border-b-gray-200">
                  {" "}
                  My Appointments
                </p>
              </Link>
              <Link to="/">
                <p
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setToken(false)}
                >
                  {" "}
                  Logout
                </p>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => navigate("/login")}
              className="bg-primary font-light cursor-pointer text-white px-8 py-3 rounded-full hidden md:block"
            >
              Create Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
