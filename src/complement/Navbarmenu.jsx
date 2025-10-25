import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import TargetCursor from "../hook/TargetCursor";
const Navbarmenu = () => {
    return (
        <div>
            <TargetCursor
                spinDuration={2}
                hideDefaultCursor={true}
            />
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <NavLink
                        to="/"
                        className="text-xl font-semibold tracking-tight cursor-target text-gray-800 hover:text-black transition-colors duration-300 ease-in-out"
                    >
                        <span className="text-gray-500">Rachel.Portfolio</span>
                    </NavLink>
                    <div className="hidden md:flex space-x-8">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `text-sm tracking-wide ${isActive ? "text-black font-medium" : "text-gray-600 hover:text-black duration-300 ease-in-out"
                                } transition-colors cursor-target`
                            }
                        >
                            Home
                        </NavLink>

                        <Link
                            to="profile"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-black font-medium"
                            className="text-sm tracking-wide text-gray-600 duration-300 ease-in-out transition-colors cursor-target"
                        >
                            About
                        </Link>

                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="text-black font-medium"
                            className="text-sm tracking-wide text-gray-600 duration-300 ease-in-out transition-colors cursor-target"
                        >
                            Projects
                        </Link>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-sm tracking-wide ${isActive ? "text-black font-medium" : "text-gray-600 hover:text-black duration-300 ease-in-out"
                                } transition-colors cursor-target`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbarmenu;
