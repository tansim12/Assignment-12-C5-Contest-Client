import { Grid } from "@mui/material";
import BannarAndSearch from "../../Components/BannarAndSearch/Banner";
import Search from "../../Components/Search/Search";
import WinnerDisplay from "./WinnerDisplay/WinnerDisplay";

const Home = () => {
  return (
    <div>
      {/* banner and search  */}

      <Grid>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            justifyContent={"center"}
            display={"flex"}
          >
            <Search></Search>
          </Grid>
          <Grid item xs={12} md={7} lg={7}>
            <BannarAndSearch></BannarAndSearch>
          </Grid>
        </Grid>
      </Grid>

      <Grid sx={{ height: "100vh" }}></Grid>

      {/* gallary  */}
      <div>
        <WinnerDisplay></WinnerDisplay>
      </div>
    </div>
  );
};

export default Home;
