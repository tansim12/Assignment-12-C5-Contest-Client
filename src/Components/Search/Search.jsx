import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

const Search = () => {
  const theme = useTheme();
  return (
    <div >
      <Typography variant="h3" sx={{ color: theme.palette.primary.main , fontWeight:800}}>
        Heading 1 Text
      </Typography>
    </div>
  );
};

export default Search;
