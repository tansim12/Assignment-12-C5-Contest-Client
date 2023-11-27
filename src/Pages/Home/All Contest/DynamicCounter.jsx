
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Typography, Grid } from '@mui/material';

const convertTimeUnits = (seconds) => {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds: remainingSeconds,
  };
};

const DynamicCounter = ({ remainingTime }) => {
  const { days, hours, minutes, seconds } = convertTimeUnits(remainingTime);

  return (
    <div>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <CountdownCircleTimer
            isPlaying
            duration={remainingTime}
            size={120}
            strokeWidth={6}
            trailColor="#f3f3f3"
            colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
          >
            {({ remainingTime }) => (
              <Typography variant="h4">
                {`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
              </Typography>
            )}
          </CountdownCircleTimer>
        </Grid>
      </Grid>
    </div>
  );
};

export default DynamicCounter;
