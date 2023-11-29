import { Typography, Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
const BannerWithShar = ({ title , subTitle , image}) => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "400px",
        backgroundImage:
          `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Grid container justifyContent="center">
        <Grid item xs={12} sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h3" gutterBottom fontWeight={600}>
             {title}
          </Typography>
          <Typography variant="body1" paragraph>
            {subTitle}
          </Typography>
          <Button onClick={handleLearnMore} variant="contained" color="primary">
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerWithShar;
