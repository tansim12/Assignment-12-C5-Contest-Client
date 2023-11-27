import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import useContests from "../../../Hooks/useContests";
import ContestCard from "./ContestCard";

// import useAllContestTag from "../../../Hooks/useAllContestTag";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ my: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const ContestTab = () => {
  const { contestData } = useContests();
  const allTags = ["Article", "Business", "Gaming", "Photography", "Music"];

  const [currentTags, setCurrentTags] = React.useState(allTags[0]);
  const [newContestData, setNewContestData] = React.useState([]);

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTags(allTags[newValue]);
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  React.useEffect(() => {
    const filtered = contestData?.result?.filter(
      (item) => item?.tag === currentTags
    );
    setNewContestData(filtered);
  }, [currentTags, contestData?.result]);

  return (
    <Grid>
      <Grid
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {allTags?.map((item, i) => (
            <Tab key={item} label={item} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Grid>
      <Grid>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {allTags?.map((tag, i) => (
            <TabPanel key={tag} value={value} index={i}>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ p: 0 }}
                gap={3}
              >
                {contestData?.result
                  ?.filter((item) => item?.tag === tag)
                  .map((item) => (
                    // <Typography key={i}>{item?.tag}</Typography>
                    <Grid key={item?._id} item xs={12} md={4} lg={3}>
                      <ContestCard item={item}></ContestCard>
                    </Grid>
                  ))}
              </Grid>
            </TabPanel>
          ))}
        </SwipeableViews>
      </Grid>
    </Grid>
  );
};
export default ContestTab;
