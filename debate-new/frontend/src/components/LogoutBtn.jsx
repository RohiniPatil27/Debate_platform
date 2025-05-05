import axios from "axios";
import { useDispatch } from "react-redux";

import { logout } from "../store/slices/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      // Clear all storage
      localStorage.clear();
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      // Reset the Redux store
      dispatch(logout());
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="font-semibold border border-solid border-white bg-white rounded-lg rounded-br-none px-4 py-2 transition duration-500 hover:bg-black hover:text-white cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
