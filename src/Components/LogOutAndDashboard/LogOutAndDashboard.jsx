import { Box, Button, ButtonGroup } from "@mui/material";
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import { globalInstance } from "../../Hooks/useGlobalInstance";
import { Link } from "react-router-dom";
import useCurrentRole from "../../Hooks/useCurrentRole";

const LogOutAndDashboard = () => {
  const { logOut } = useAuthContext();
  const { currentRole } = useCurrentRole();
  const handleLogout = () => {
    logOut().then(async () => {
      try {
        const res = await globalInstance.post(
          "/logout",
          {},
          {
            withCredentials: true,
          }
        );
        const fetchData = await res.data;
        if (fetchData.success) {
          toast.success("Logout successfully");
        }
      } catch (error) {
        console.error(error);
      }
    });
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          {currentRole?.currentRole === "user" && (
            <Link to={"/dashboard/myContest"}>
              <Button>Dashboard</Button>
            </Link>
          )}

{/* todo dynamic condition creator route and admin route  */}

          {currentRole?.currentRole === "creator" && (
            <Link to={"/dashboard/addContest"}>
              <Button>Dashboard</Button>
            </Link>
          )}
          {/* {currentRole?.currentRole === "admin" && (
            <Link to={"/dashboard/myContest"}>
              <Button>Dashboard</Button>
            </Link>
          )} */}
          ,<Button onClick={handleLogout}>Logout</Button>,
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default LogOutAndDashboard;
