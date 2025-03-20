import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services/Api/api";
import { ToastContainer, toast } from "react-toastify";
const RegistrationPage = () => {
  const {
    register,
    getValues,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({});

  const navigate = useNavigate();

  const registerPage = async () => {
    const isFormIssue = await trigger();
    if (!isFormIssue) return;
    const values = getValues();

    console.log(values);

    const payload = {
      username: values.username,
      password: values.password,
      name: values.name,
      contact_no: values.contactNo,
      email: values.email,
    };

    console.log(payload);

    try {
      const response = await axiosInstance.post("user/register", payload);
      console.log("Registered Successfully", response.data);
      navigate("/login");
    } catch (error) {
      toast.error(
        "Registration Failed:",
        error.response?.data.message || error.message
      );
      if (error.response.status === 400) {
        toast(" User Detail already Exist in the Database");
      }
      if (error.response.status === 500) {
        toast("Similar detail already exist with the Username");
      }
    }
  };

  const onSubmit = (data, e) => {
    e?.preventDefault();
    registerPage();
  };

  return (
    <div className="bg-white p-6 rounded-xl w-full">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">Username</span>
            {errors.username && (
              <span className="text-red-500 text-md">
                {errors.username.message}
              </span>
            )}
          </div>
          <input
            type="text"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            {...register("username", {
              required: "Please enter your username",
              pattern: {
                value: /^(?=.*[A-Za-z])[A-Za-z0-9_]{1,20}$/,
                message: "Username must be alphanumeric",
              },
              minLength: 10,
              maxLength: 10,
            })}
            placeholder="Enter your username"
          />
        </label>

        <label className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">Name</span>
            {errors.name && (
              <span className="text-red-500 text-md">
                {errors.name.message}
              </span>
            )}
          </div>
          <input
            type="text"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            {...register("name", {
              required: "Please enter your name",
              pattern: {
                value: /^[A-Za-z ]{1,20}$/,
                message: "Please enter the valid name only  ",
              },
            })}
            placeholder="Enter your name"
          />
        </label>

        <label className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">Email</span>
            {errors.email && (
              <span className="text-red-500 text-md">
                {errors.email.message}
              </span>
            )}
          </div>
          <input
            type="email"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Enter your email"
          />
        </label>

        <label className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">
              Contact No.
            </span>
            {errors.contactNo && (
              <span className="text-red-500 text-md">
                {errors.contactNo.message}
              </span>
            )}
          </div>
          <input
            type="tel"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            {...register("contactNo", {
              required: "Please enter your contact number",
              pattern: {
                value: /^\d{10}$/,
                message: "Enter a valid 10-digit number",
              },
              maxLength: 10,
              minLength: 10,
            })}
            placeholder="Enter your contact number"
          />
        </label>

        <label className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">Password</span>
            {errors.password && (
              <span className="text-red-500 text-md">
                {errors.password.message}
              </span>
            )}
          </div>
          <input
            type="password"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-200 outline-none transition-all"
            {...register("password", {
              required: "Please enter your password",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters long",
              },
            })}
            placeholder="Enter your password"
          />
        </label>

        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-900 font-medium underline"
          >
            Login here
          </Link>
        </p>

        <button
          type="submit"
          className="w-full mt-2 p-3 text-lg font-semibold text-white cursor-pointer bg-amber-300 hover:bg-amber-300 rounded-lg transition-all"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
