import { Container, Grid } from "@mui/material";
import BannerWithShar from "../../shared/BannerWithShar";
import Heading from "../../shared/Heading";
import useAllChartData from "../../Hooks/useAllChartData";
import LeaderBoardChart from "./LeaderBoardChart";

const Leaderboard = () => {
  const { chartData } = useAllChartData();

  return (
    <div>
      <Grid >
        <BannerWithShar
          image={
            "https://i.ibb.co/Hxrmg3R/premium-photo-1681487803114-637de228039c-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg"
          }
          title={"Welcome to Our Leaderboard!"}
          subTitle={
            " This is the description of the amazing services we provide."
          }
        />
      </Grid>

      <Container>
        <Grid>
          <Heading
            title={"Our Survey"}
            subtitle={"Show the position or rank of each participant"}
            additionalInfo={
              "This setup provides a clear title and subtitle that define the purpose of the leaderboard, along with key details that users would expect to see, such as rankings"
            }
          />
        </Grid>
        <Grid justifyContent={"center"} display={"flex"} alignItems={"center"}>
          <LeaderBoardChart chartData={chartData} />
        </Grid>
      </Container>
    </div>
  );
};

export default Leaderboard;
