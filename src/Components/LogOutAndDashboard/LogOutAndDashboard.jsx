import { Box, Button, ButtonGroup } from "@mui/material";
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import { globalInstance } from "../../Hooks/useGlobalInstance";

const LogOutAndDashboard = () => {
  const { logOut } = useAuthContext();
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
          <Button>Dashboard</Button>,
          <Button onClick={handleLogout}>Logout</Button>,
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default LogOutAndDashboard;
