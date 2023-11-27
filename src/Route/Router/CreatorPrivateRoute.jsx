import { Navigate, useLocation } from "react-router-dom";

import useAuthContext from "../../Hooks/useAuthContext";
import useCurrentRole from "../../Hooks/useCurrentRole";
import YouTube from "../../Components/Loading Sckeleton/LoadingPage";

const CreatorPrivateRoute = ({ children }) => {
  const loc = useLocation();
  const { currentRole, isLoading } = useCurrentRole();
  const { user, userLoading } = useAuthContext();
  if (userLoading || isLoading) {
    return <YouTube />;
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={loc.pathname} replace={true}></Navigate>
    );
  }
  if (currentRole?.currentRole !== "creator") {
    return <Navigate to={"/"} state={loc.pathname} replace={true}></Navigate>;
  }
  return children;
};

export default CreatorPrivateRoute;
