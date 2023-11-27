import Lottie from "lottie-react";
import noData from "../assets/nodataFound.json";
import { Grid } from "@mui/material";

const NoDataFound = () => {
  return (
    <div>
      <Grid justifyContent={"center"} alignContent={"center"} display={"flex"}>
        <Lottie
          style={{ width: "100%", height: "80vh" }}
          animationData={noData}
          loop={true}
          autoplay={true}
        ></Lottie>
      </Grid>
    </div>
  );
};

export default NoDataFound;
