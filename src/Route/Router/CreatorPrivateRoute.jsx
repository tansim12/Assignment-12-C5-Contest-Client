import { Navigate, useLocation } from "react-router-dom";

import { Typography } from "@mui/material";
import useAuthContext from "../../Hooks/useAuthContext";
import useCurrentRole from "../../Hooks/useCurrentRole";

const CreatorPrivateRoute = ({ children }) => {
  const loc = useLocation();
  const { currentRole, isLoading } = useCurrentRole();
  const { user, userLoading } = useAuthContext();
  if (userLoading || isLoading) {
    return <Typography variant="h1"> loading</Typography>;
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={loc.pathname} replace={true}></Navigate>
    );
  }
  if (currentRole?.currentRole !== "creator") {
    return (
      <Navigate to={"/"} state={loc.pathname} replace={true}></Navigate>
    );
  }
  return children;
};

export default CreatorPrivateRoute;
