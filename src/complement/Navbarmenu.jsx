import React from "react";
import { NavLink } from "react-router-dom";

const Navbarmenu = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl font-semibold tracking-tight text-gray-800 hover:text-black transition-colors duration-300 ease-in-out"
        >
          <span className="text-gray-500">Rachel.Portfolio</span>
        </NavLink>
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm tracking-wide ${
                isActive ? "text-black font-medium" : "text-gray-600 hover:text-black duration-300 ease-in-out"
              } transition-colors`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="https://x.com/Adamjim15"
            className={({ isActive }) =>
              `text-sm tracking-wide ${
                isActive ? "text-black font-medium" : "text-gray-600 hover:text-black duration-300 ease-in-out"
              } transition-colors`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm tracking-wide ${
                isActive ? "text-black font-medium" : "text-gray-600 hover:text-black duration-300 ease-in-out"
              } transition-colors`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm tracking-wide ${
                isActive ? "text-black font-medium" : "text-gray-600 hover:text-black duration-300 ease-in-out"
              } transition-colors`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbarmenu;
