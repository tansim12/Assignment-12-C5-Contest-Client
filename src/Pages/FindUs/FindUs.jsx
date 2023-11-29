import { Container, Grid } from "@mui/material";
import BannerWithShar from "../../shared/BannerWithShar";
import Heading from "../../shared/Heading";
import FindMap from "./FindMap";

const FindUs = () => {
    return (
        <div>
        <Grid >
          <BannerWithShar
            image={
              "https://i.ibb.co/rkrWgpM/pngtree-find-the-right-place-using-the-phone-gps-navigation-concept-vector-flat-illustration-banner.png"
            }
            title={"Physical Address"}
            subTitle={
              "Bangladesh , Dhaka , Dhanmondi-32 , email: ph@gmail.com"
            }
          />
        </Grid>
  
        <Container>
          <Grid>
            <Heading
              title={"Find Us"}
              subtitle={"Show the position or rank of each participant"}
              additionalInfo={
                "This setup provides a clear title and subtitle that define the purpose of the leaderboard, along with key details that users would expect to see, such as rankings"
              }
            />
          </Grid>
          <Grid justifyContent={"center"} display={"flex"} alignItems={"center"}>
           <FindMap />
          </Grid>
        </Container>
      </div>
    );
};

export default FindUs;