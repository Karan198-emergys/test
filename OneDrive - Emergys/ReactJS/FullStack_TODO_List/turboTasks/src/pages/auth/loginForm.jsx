import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services/Api/api";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const loginPage = async () => {
    const formIssue = await trigger();
    if (!formIssue) return;
    const values = getValues();

    const payLoad = {
      username: values.username,
      password: values.password,
    };

    try {
      const response = await axiosInstance.post("/user/login", payLoad);
      const { token } = response.data;
      if (token) {
        navigate("/");
        login(token);
      }
      console.log(response);
      toast("Logged in successful");
    } catch (errors) {
      toast.error("Invalid Username or Password", {
        position: "top-left",
      });
    }
  };

  const onSubmit = (data, e) => {
    e?.preventDefault();
    loginPage();
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
            })}
            placeholder="Enter your username"
            autoComplete="false"
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
            })}
            placeholder="Enter your password"
            autoComplete="false"
          />
        </label>

        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/registration"
            className="text-blue-600 hover:text-blue-900 font-medium underline"
          >
            Register here
          </Link>
        </p>

        <button
          type="submit"
          className="w-full mt-2 p-3 text-lg font-semibold text-white cursor-pointer bg-amber-300 hover:bg-amber-300 rounded-lg transition-all"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
