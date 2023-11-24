import {  Grid } from "@mui/material";
import BannarAndSearch from "../../Components/BannarAndSearch/Banner";
import Search from "../../Components/Search/Search";

const Home = () => {
  return (
    <div>
      {/* banner and search  */}
      <div style={{height:"100vh"}}>
        <Grid container spacing={4} >
          <Grid item xs={12} md={4} lg={3}  >
          <Search></Search>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
          <BannarAndSearch></BannarAndSearch>
          </Grid>
        </Grid>
      </div>

      
      <div >

      </div>
    </div>
  );
};

export default Home;
