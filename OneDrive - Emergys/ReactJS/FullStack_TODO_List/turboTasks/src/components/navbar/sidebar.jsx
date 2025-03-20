import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import settingPng from "../../assets/icons8-settings-128.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  const location = useLocation();

  return (
    <div className="flex flex-col h-screen bg-gray-800 w-64 p-4">
      <div className="border-b-4 text-3xl  py-4 text-center font-semibold italic">
        <span className="text-gray-200 cursor-context-menu">Turbo Tasks</span>
      </div>

      <div className="flex w-full flex-col flex-grow mt-14 space-y-6">
        <Link
          to="/"
          className={`text-xl font-medium text-gray-200 hover:text-white  transition-all ${
            location.pathname === "/" ? " border-b-2 border-white" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/aboutUs"
          className={`text-xl font-medium text-gray-200 hover:text-white transition-all ${
            location.pathname === "/aboutUs" ? " border-b-2 border-white" : ""
          }`}
        >
          About Us
        </Link>
        <Link
          to="/contactUs"
          className={`text-xl font-medium text-gray-200 hover:text-white transition-all ${
            location.pathname === "/contactUs" ? " border-b-2 border-white" : ""
          }`}
        >
          Contact Us
        </Link>
      </div>

      <footer className="border-t-4 pt-6">
        <div className="w-full mt-4">
          <button
            type="button"
            className="w-full py-3 border-2 rounded-xl text-lg flex gap-4 justify-center 
             hover:justify-around cursor-pointer font-semibold 
             transition-all duration-600 ease-in-out 
             hover:bg-amber-600 hover:border-amber-600 text-gray-200"
            onClick={logout}
          >
            <div> Log Out</div>{" "}
            <div>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
