import { useTheme } from "@emotion/react";
import { Typography, Box, Divider, useMediaQuery } from "@mui/material";

const Heading = ({ title, subtitle, additionalInfo }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box textAlign="center" my={isMobile ? 2 : 4}>
      <Typography
        variant={isMobile ? "h4" : "h3"}
        sx={{ fontWeight: 800, color: theme.palette.primary.main }}
      >
        {title}
      </Typography>
      <Typography
        variant={isMobile ? "subtitle2" : "subtitle1"}
        sx={{
          color: theme.palette.text.secondary,
          mt: isMobile ? 1 : 2,
          fontStyle: "italic",
        }}
      >
        {subtitle}
      </Typography>
      {additionalInfo && (
        <Box mt={isMobile ? 2 : 3}>
          <Divider sx={{ backgroundColor: theme.palette.divider }} />
          <Typography
            variant="body2"
            sx={{ mt: 2, color: theme.palette.text.secondary }}
          >
            {additionalInfo}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Heading;
