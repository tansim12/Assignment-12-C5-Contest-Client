import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

const Heading = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <div style={{textAlign:"center"}}>
      <Typography variant="h4" sx={{my:1 , fontWeight:600 , color: theme.palette.primary.main }}>{title}</Typography>
      <Typography variant="h6" sx={{ color: theme.palette.grayColor.main  }}>
        {subtitle}
      </Typography>
    </div>
  );
};

export default Heading;
