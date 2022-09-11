import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { setCredentials } from "../features/auth/authSlice";

interface User {
  username: string;
  password: string;
}

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const signin = async ({ username, password }: User) => {
    setIsLoading(true);

    authApi({ type: "signin", username, password });
  };
  const signup = async ({ username, password }: User) => {
    setIsLoading(true);

    authApi({ type: "signup", username, password });
  };

  const authApi = async ({
    type,
    username,
    password,
  }: {
    type: string;
    username: string;
    password: string;
  }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_API}/auth/local/${type}`,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const d = new Date();
      d.setMinutes(d.getMinutes() + 15);
      cookies.set("token", response?.data?.access_token, {
        path: "/",
        expires: d,
      });
      dispatch(setCredentials({ ...response?.data }));
      navigate("/");
    } catch (err: any) {
      setIsLoading(false);
      if (err.response?.status === 403) {
        if (type === "signin") {
          setErrorMsg("Wrong username or password");
        } else {
          setErrorMsg("User already exists");
        }
      } else {
        setErrorMsg("Login failed");
      }
    }
  };

  return { isLoading, errorMsg, signin, signup };
};
