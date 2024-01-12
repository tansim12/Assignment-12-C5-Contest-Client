import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import "../../../shared/creatorCardShadow.css"

const DisplayCreatorCard = ({ item }) => {
  return (
    <div className="">
    <Card sx={{ maxWidth: 445 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={item?.creatorInfo?.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={700}
          >
            {item?.creatorInfo?.name}
          </Typography>
          <Typography variant="subtitle2" my={1} color={"gray"}>
            {item?.creatorInfo?.email}
          </Typography>
          <Typography variant="subtitle2" my={1}>
            Contest :<Button> {item?.contest_name}</Button>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item?.description.slice(0, 70)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></div>
  );
};

export default DisplayCreatorCard;
