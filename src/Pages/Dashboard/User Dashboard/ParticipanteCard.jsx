import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Paper,
} from "@mui/material";
// import { useTheme } from "@emotion/react";


const ParticipanteCard = ({ item }) => {
//   const theme = useTheme();
  return (
    <Paper elevation={5}>
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
              //   sx={{ color: theme.palette.primary.main }}
            >
              Tag : {item?.tag}
            </Typography>

            <Grid container>
              <Grid xs={6} justifyContent={"flex"}>
                <span style={{ fontWeight: 700, fontSize: "18px" }}>
                  Start:
                </span>{" "}
                {item?.to.slice(0, 10)}
              </Grid>
              <Grid xs={6} justifyContent={"flex"}>
                <span style={{ fontWeight: 700, fontSize: "18px" }}>End:</span>{" "}
                {item?.from.slice(0, 10)}
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
            {/* todo deadline condition disable button */}
          <Button size="small" variant="contained" color="secondary">
            Available
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};
export default ParticipanteCard;
