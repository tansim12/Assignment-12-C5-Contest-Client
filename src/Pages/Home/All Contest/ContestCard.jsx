import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

const ContestCard = ({ item }) => {
  const theme = useTheme();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={item?.image}
          alt={item?.contest_name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={700}
            component="div"
          >
            {item?.contest_name}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            fontWeight={600}
            component="div"
            sx={{ color: theme.palette.primary.main }}
          >
            Tags : {item?.tag}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            fontWeight={600}
            component="div"
            sx={{ color: theme.palette.primary.main }}
          >
            Participate : {item?.total_join}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item?.description?.slice(0,45)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/contest/${item?._id}`}>
          <Button size="small" variant="contained" color="secondary">
            Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default ContestCard;
