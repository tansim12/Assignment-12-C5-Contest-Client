import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Grid } from "@mui/material";

const HomeRoot = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div style={{ marginTop: "100px" , minHeight:"69vh" }}>
        <Outlet></Outlet>
      </div>
      {/* footer  */}
      <Grid sx={{ mt: 5 }}>
        <Footer />
      </Grid>
    </div>
  );
};

export default HomeRoot;
