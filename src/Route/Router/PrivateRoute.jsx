import { Navigate, useLocation } from "react-router-dom";

import { Typography } from "@mui/material";
import useAuthContext from "../../Hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const loc = useLocation();
  const { user, userLoading } = useAuthContext();
  if (userLoading) {
    return <Typography variant="h1"> loading</Typography>;
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={loc.pathname} replace={true}></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
