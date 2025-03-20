import React from "react";
import Login_Image from "../assets/login.webp";
import RegistrationPage from "./auth/registrationPage";

const RegistrationScreen = () => {
  return (
    <div className="w-[70%] mt-[2%] mx-auto p-6 bg-white rounded-2xl border border-gray-200">
      <div className="flex h-[85vh] gap-8 items-center">
        <div className="w-1/2">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
            Sign Up
          </h2>
          <RegistrationPage />
        </div>

        <div className="w-1/2 ">
          <img
            src={Login_Image}
            alt="Register"
            className="w-full  rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationScreen;
