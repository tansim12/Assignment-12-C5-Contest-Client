import Lottie from "lottie-react";
import errorAnimation from "../../assets/errorAnimation.json"

import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <Lottie
          style={{width:"100%" , height:"70vh"}}
          animationData={errorAnimation}
          loop={true}
          autoplay={true}
        ></Lottie>
      </div>
      <div className="">
       
         <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
         <Link
            to={"/"}
            
          >
           <Button variant="contained">  Back to Homepage</Button>
          </Link>
         </Grid>
        
      </div>
    </div>
  );
};

export default ErrorPage;
