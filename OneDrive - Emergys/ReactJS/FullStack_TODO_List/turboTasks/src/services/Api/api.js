import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.error(error, "UnAuthorized ! Redirecting to the Login");
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      // window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
