import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { login, setLoading } from "../store/slices/authSlice";

const FetchUserData = () => {
  const dispatch = useDispatch();
  const accessToken = Cookies.get();

  // Get User data
  useEffect(() => {
    const initializeUser = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/users/fetch-profile`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          }
        );

        const userData = response.data.data;
        if (userData) {
          dispatch(
            login({
              isAuthenticated: true,
              loading: false,
              user: userData,
              error: null,
            })
          );
        } else {
          dispatch(setLoading(false));
        }
      } else {
        dispatch(setLoading(false));
      }
    };

    initializeUser();
  }, []);

  return;
};

export default FetchUserData;
