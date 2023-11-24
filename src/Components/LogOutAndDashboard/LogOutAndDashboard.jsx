import { Box, Button, ButtonGroup } from "@mui/material";
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";

const LogOutAndDashboard = () => {
    const {logOut} = useAuthContext()
    const handleLogout =()=>{
        logOut().then(()=>{
            toast.success("Logout successfully")
        })
    }
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
          <Button>Dashboard</Button>,<Button onClick={handleLogout}>Logout</Button>,
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default LogOutAndDashboard;
