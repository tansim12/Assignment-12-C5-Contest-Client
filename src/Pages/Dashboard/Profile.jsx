import { Helmet } from "react-helmet-async";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { Typography, Button, Grid } from "@mui/material";
import useAuthContext from "../../Hooks/useAuthContext";
import useCurrentRole from "../../Hooks/useCurrentRole";
import ProfilePieChart from "./User Dashboard/ProfilePieChart";
import UpdateProfile from "./User Dashboard/UpdateProfile";

const Profile = () => {
  const { user } = useAuthContext();
  const { currentRole } = useCurrentRole();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Paper
        elevation={5}
        sx={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <div>
          <img
            alt="profile"
            src={
              "https://i.ibb.co/KD1JjpS/photo-1640955014216-75201056c829-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
            }
            style={{
              width: "100%",
              marginBottom: "15px",
              borderRadius: "10px 10px 0 0",
              height: "250px",
              objectFit: "cover",
            }}
          />
        </div>
        <div style={{ position: "relative", top: "-75px" }}>
          <Avatar
            alt="profile"
            src={user.photoURL}
            sx={{ width: 100, height: 100, border: "2px solid #1565c0" }}
          />
          <div>
            <Grid container spacing={2} my={5} m={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                  {user?.displayName}
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                  {user?.email}
                </Typography>
                <Typography>
                  <span style={{ fontWeight: "bold" }}>Role:</span>{" "}
                  {currentRole?.currentRole}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <UpdateProfile></UpdateProfile>
              </Grid>
            </Grid>
            <Grid xs={6} md={6}>
              <Grid
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <ProfilePieChart></ProfilePieChart>
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Profile;
