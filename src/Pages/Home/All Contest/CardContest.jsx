
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Avatar,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import {  useNavigate } from "react-router-dom";

const SingleDetailsComponent = ({ contest }) => {
  
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const targetDate = Date.parse(contest.to);
  const remainingTime = Math.max(targetDate - Date.now(), 0);
  const navigate = useNavigate();
  const handlePayment = () => {
    navigate(`/payment/${contest?._id}`);
  };
  return (
    <Card
      sx={{
        maxWidth: isSmallScreen ? "90%" : 800,
        margin: "auto",
        marginTop: 10,
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={contest?.image}
        alt={contest?.contest_name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          fontWeight="bold"
          color="primary"
        >
          {contest?.contest_name}
        </Typography>
        <Typography variant="body1" color="text.secondary" marginBottom={2}>
          {contest?.description?.slice(0,50)}
        </Typography>

        <Grid container spacing={isSmallScreen ? 1 : 3} marginBottom={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" color="primary" marginBottom={1}>
              Contest Details:
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Tag: {contest?.tag}
            </Typography>
            <Typography variant="body2">Status: {contest?.status}</Typography>
            <Typography variant="body2">
              Total Joins: {contest?.total_join}
            </Typography>
            <Typography variant="body2">Price: {contest?.price}</Typography>
            <Typography variant="body2" color="error">
              Rating: {contest?.rating}
            </Typography>
            <Typography variant="body2">
              Winner Status:{" "}
              {contest?.winner_status ? "Contest Over" : "Contest Running"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" color="primary" marginBottom={1}>
              Contest Timings:
            </Typography>
            <Typography variant="body2">
              From: {new Date(contest?.from).toLocaleString()}
            </Typography>
            <Typography variant="body2">
              To: {new Date(contest?.to).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" color="primary" marginBottom={1}>
              Winner Information:
            </Typography>
            {contest?.winner ? (
              <Grid container alignItems="center">
                <Avatar
                  alt={contest?.winner?.name}
                  src={contest?.winner?.image}
                />
                <Grid item marginLeft={2}>
                  <Typography variant="body2" fontWeight="bold">
                    Winner: {contest?.winner?.name}
                  </Typography>
                  <Typography variant="body2">
                    Winner Email: {contest?.winner?.email}
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              <Typography variant="h6" color={"red"} fontWeight={700}>
                Winner Not Selected here
              </Typography>
            )}
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt={contest?.creatorInfo?.name}
              src={contest?.creatorInfo?.image}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6" fontWeight="bold">
              Creator: {contest?.creatorInfo?.name}
            </Typography>
            <Typography variant="body2">
              Email: {contest?.creatorInfo?.email}
            </Typography>
          </Grid>
        </Grid>

        {/* Additional Section Example */}
        <Grid
          container
          marginTop={3}
          spacing={2}
          display={"flex"}
          justifyContent={"end"}
        >
          <Grid>
            <Button
              onClick={handlePayment}
              disabled={remainingTime < 0 || contest?.winner_status}
              variant="contained"
              color="primary"
              size="large"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SingleDetailsComponent;
