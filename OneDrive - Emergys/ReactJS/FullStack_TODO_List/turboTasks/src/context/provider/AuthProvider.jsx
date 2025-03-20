import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthContext } from "../AuthContext";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: null });

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const token = localStorage.getItem("token");
    if (loggedIn && token) {
      setIsLoggedIn(true);
      setToken(token);
    }
  }, []);

  const login = useCallback((userToken) => {
    setToken(userToken);
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("token", userToken);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
  }, []);

  const userInfo = useCallback(
    (username) => {
      setUser((prevState) => {
        return { ...prevState, name: username.slice(0, 1) };
      });
    },
    []
  );

  const memoizedValues = useMemo(
    () => ({ token, login, logout, isLoggedIn, user, userInfo }),
    [token, login, logout, isLoggedIn, user, userInfo]
  );
  return (
    <AuthContext.Provider value={memoizedValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
