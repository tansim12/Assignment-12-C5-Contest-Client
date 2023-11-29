import { Container, Grid } from "@mui/material";
import Heading from "../../shared/Heading";
import BannerWithShar from "../../shared/BannerWithShar";
import useWinnerAndChartData from "../../Hooks/useWinnerAndChartData";
import ProgressChart from "./ProgressChart";


const Progress = () => {
    const { totalWinnerData }= useWinnerAndChartData()
    return (
        <div>
        <Grid >
          <BannerWithShar
            image={
              "https://i.ibb.co/SrDygrQ/photo-1666875753105-c63a6f3bdc86-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
            }
            title={"Performance Metrics"}
            subTitle={
              " Display quantifiable metrics showcasing improvement or progress."
            }
          />
        </Grid>
  
        <Container>
          <Grid>
            <Heading
              title={"--Progress--"}
              subtitle={"Show the position or rank of each participant"}
              additionalInfo={
                "This setup provides a clear title and subtitle that define the purpose of the leaderboard, along with key details that users would expect to see, such as rankings"
              }
            />
          </Grid>
          <Grid justifyContent={"center"} display={"flex"} alignItems={"center"}>
            <ProgressChart totalWinnerData={totalWinnerData} />
          </Grid>
        </Container>
      </div>
    );
};

export default Progress;