import useWinnerContestDataByFindUser from "../../Hooks/useWinnerContestDataByFindUser";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  useTheme,
  Grid,
  Button,
} from "@mui/material";
import Heading from "../../shared/Heading";

const MyWining = () => {
  const theme = useTheme();

  const { winnerData } = useWinnerContestDataByFindUser();

  return (
    <Grid>
      <Heading
        title={"Celebrate Your Victory!"}
        additionalInfo={
          "Join us to celebrate your success in the contest. Get ready for a fun-filled event."
        }
        subtitle={"Embrace Your Triumph: A Night of Victory!"}
      />
      <Grid container spacing={2}>
        {winnerData?.result?.map((contest, index) => (
          <Grid
            xs={12}
            md={12}
            lg={6}
            item
            key={index}
            sx={{ marginBottom: 20 }}
            
          >
            <Card elevation={6}>
              <CardContent >
                <Typography variant="h5" gutterBottom>
                  {contest.contest_name}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: theme.palette.info.main }}
                >
                  Price: ${contest.price}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>Description:</strong> {contest.description}
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
                >
                  <Avatar
                    src={contest.winner.image}
                    alt={contest.winner.name}
                    sx={{ marginRight: 2, border: "2px solid gray" }}
                  />
                  <Typography variant="subtitle2">
                    <Button variant="contained" color="warning">
                      {" "}
                      Winning by {contest.winner.name}
                    </Button>
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, marginTop: 2 }}
                >
                  <strong>Creator Info:</strong>
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                >
                  <Avatar
                    src={contest.creatorInfo.image}
                    alt={contest.creatorInfo.name}
                    sx={{ marginRight: 2 }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {contest.creatorInfo.name} - {contest.creatorInfo.email}
                  </Typography>
                </Box>
                {/* Display other contest details as needed */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MyWining;
