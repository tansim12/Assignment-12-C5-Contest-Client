import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, Box } from "@mui/material";
import useFindOneContest from "../../../Hooks/useFindOneContest";
import Countdown from "react-countdown";

import CardContest from "./CardContest";

const ContestDetailsDiv = () => {
  
  const { id } = useParams();
  const { oneContestData } = useFindOneContest(id);
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    if (oneContestData && oneContestData.to) {
      const targetDate = Date.parse(oneContestData.to);
      const remainingTime = Math.max(targetDate - Date.now(), 0);
      setEndTime(Date.now() + remainingTime);
      localStorage.setItem(
        "countdownEndTime",
        JSON.stringify(Date.now() + remainingTime)
      );
    }
  }, [oneContestData?.to, oneContestData]);

  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" justifyContent="center">
            {endTime > Date.now() ? (
              <Countdown date={endTime} renderer={renderer} />
            ) : (
              <Typography variant="h4" color="error">
                Countdown ended 😢
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
      <CardContest contest={oneContestData} />
    </Grid>
  );
};

// Custom renderer function to style the countdown timer
const renderer = ({ days, hours, minutes, seconds }) => {
 
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography variant="h4" fontWeight={800}>
        {days}d {hours}h {minutes}m {seconds}s
      </Typography>
    </Box>
  );
};

export default ContestDetailsDiv;
