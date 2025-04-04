import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoutes = () => {
  const { token, isLoggedIn } = useContext(AuthContext);
  const toNavigate = useNavigate();
  if (!token && !isLoggedIn) {
    toNavigate("/login");
  }
  return <Outlet />;
};

export default ProtectedRoutes;
