import React from "react";
import Login_Image from "../assets/login.webp";
import LoginForm from "./auth/loginForm";

const RegistrationScreen = () => {
  return (
    <div className="w-[70%] mt-[5%] mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <div className="flex gap-8 items-center">
        <div className="w-1/2 p-6">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
            Log In
          </h2>
          <LoginForm />
        </div>

        <div className="w-1/2">
          <img
            src={Login_Image}
            alt="Login"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationScreen;
