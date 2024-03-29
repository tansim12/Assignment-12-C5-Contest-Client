import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useMediaQuery } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const HomePageNavLink = () => {
  const [value, setValue] = React.useState("one");

  const isMobile = useMediaQuery("(max-width:900px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Tabs
          orientation={isMobile ? "vertical" : "horizontal"}
          variant={isMobile ? "scrollable" : "standard"}
          value={value}
          onChange={handleChange}
          textColor="white"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          className={`${isMobile || "ml-20"} z-50`}
        >
          <Tab value="one" label="Home" to="/ " component={Link} />
          <Tab
            value="two"
            label="All Contest"
            to="/allContest"
            component={Link}
          />
          <Tab
            value="three"
            label="Leaderboard"
            to="/Leaderboard"
            component={Link}
          />
          <Tab
            value="four"
            label="Progress"
            to="/progress"
            component={Link}
          />
          <Tab
            value="five"
            label="Success"
            to="/success"
            component={Link}
          />
          
        </Tabs>
      </Box>
    </div>
  );
};

export default HomePageNavLink;
