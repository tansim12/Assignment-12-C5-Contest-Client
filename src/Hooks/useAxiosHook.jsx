import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

const instance = axios.create({
  baseURL: import.meta.env.VITE_LIVE_URL,
  withCredentials: true,
});

const useAxiosHook = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log(err);
        if (err.response.status === 401 || err.response.status === 403) {
          logOut().then(() => {
            toast.error("logout");
            navigate("/login");
          });
        }
      }
    );
  }, [logOut, navigate]);

  return instance;
};

export default useAxiosHook;
