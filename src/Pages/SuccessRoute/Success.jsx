import { Container, Grid } from "@mui/material";
import Heading from "../../shared/Heading";
import BannerWithShar from "../../shared/BannerWithShar";
import SuccessGalary from "./SuccessGalary";


const Success = () => {
    return (
        <div>
        <Grid >
          <BannerWithShar
            image={
              "https://i.ibb.co/GF2gSW8/pngtree-businessman-jumps-on-graph-columns-on-the-way-to-success-banner-png-image-7698495.png"
            }
            title={"Success Story"}
            subTitle={
              "Insights, Strategies, and Inspirations for Personal and Professional Success"
            }
          />
        </Grid>
  
        <Container>
          <Grid>
            <Heading
              title={"Our Event Moment"}
              subtitle={"Show the position or rank of each participant"}
              additionalInfo={
                "This setup provides a clear title and subtitle that define the purpose of the leaderboard, along with key details that users would expect to see, such as rankings"
              }
            />
          </Grid>
          <Grid justifyContent={"center"} display={"flex"} alignItems={"center"}>
           <Container>
           <SuccessGalary/>
           </Container>
          </Grid>
        </Container>
      </div>
    );
};

export default Success;