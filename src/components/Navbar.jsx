import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Website Name - Click to go Home */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition"
      >
        Flashcard Study
      </h1>

      {/* Centered Navigation Links */}
      <div className="flex-1 flex justify-center space-x-8 text-lg font-medium">
        <Link
          to="/"
          className={`pb-1 transition-all duration-200 
            ${location.pathname === "/" 
              ? "text-blue-600 border-b-2 border-blue-600" 
              : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-400"}
          `}
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className={`pb-1 transition-all duration-200 
            ${location.pathname === "/dashboard" 
              ? "text-blue-600 border-b-2 border-blue-600" 
              : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-400"}
          `}
        >
          Dashboard
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
