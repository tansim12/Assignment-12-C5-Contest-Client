import { Navigate, useLocation } from "react-router-dom";


import useAuthContext from "../../Hooks/useAuthContext";
import YouTube from "../../Components/Loading Sckeleton/LoadingPage";

const PrivateRoute = ({ children }) => {
  const loc = useLocation();
  const { user, userLoading } = useAuthContext();
  if (userLoading) {
    return <YouTube/>
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={loc.pathname} replace={true}></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
