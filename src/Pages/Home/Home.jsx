import { Container, Grid } from "@mui/material";
import BannarAndSearch from "../../Components/BannarAndSearch/Banner";
import Search from "../../Components/Search/Search";
import WinnerDisplay from "./WinnerDisplay/WinnerDisplay";
import { useQuery } from "@tanstack/react-query";
import { globalInstance } from "../../Hooks/useGlobalInstance";
import { useState } from "react";
import ContestCard from "./All Contest/ContestCard";
import Heading from "../../shared/Heading";
import NoDataFound from "../../shared/NoDataFound";
import { Helmet } from "react-helmet-async";
import DisplayCreator from "./DisplayCreator/DisplayCreator";

const Home = () => {
  const [getSearchValue, setSearchValue] = useState("");
  const { data: popularContestData = [] } = useQuery({
    queryKey: ["popular", getSearchValue],
    queryFn: async () => {
      const res = await globalInstance.get(
        `/popularContest?search=${getSearchValue}`
      );
      const fetchData = await res.data;
      return fetchData;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* banner and search  */}

      <Grid>
        <Grid container spacing={2} width={"100%"} justifyContent={"center"}>
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            justifyContent={"center"}
            display={"flex"}
          >
            <Search setSearchValue={setSearchValue}></Search>
          </Grid>
          <Grid item xs={12} md={7} lg={7}>
            <BannarAndSearch></BannarAndSearch>
          </Grid>
        </Grid>
      </Grid>

      {/* popular contest  */}
      <Container maxWidth={"lg"} sx={{ my: 15 }}>
        <Heading
          title={"Most Popular Contest"}
          subtitle={"Explore our top-rated contests."}
          additionalInfo={
            "Join these contests to showcase your skills and win exciting prizes!"
          }
        ></Heading>
        <Grid container spacing={4} justifyContent={"center"} display={"flex"}>
          {popularContestData?.length === 0 && <NoDataFound />}

          {popularContestData?.map((item) => (
            <Grid key={item?._id} item sx={12} md={6} lg={4}>
              <ContestCard item={item}></ContestCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* display creator section  */}
      <div>
        <Grid>
          <Heading
            title={"Manage with Ease"}
            subtitle={"Exploring the Genius Behind Our Innovation"}
            additionalInfo={
              "Highlight the creator's background, expertise, and any notable achievements or qualifications relevant to the creation."
            }
          />
          <Container maxWidth={"md"} sx={{my:20}}>
            <DisplayCreator />
          </Container>
        </Grid>
      </div>

      {/* gallary  */}
      <div>
        <Grid sx={{ mb: 10 }}>
          <Heading
            title={"Victory's Parade"}
            subtitle={"Celebrating Achievements Worth Applauding"}
            additionalInfo={
              "Where Greatness Takes Center Stage.Where Success Stories Inspire"
            }
          />
        </Grid>
        <WinnerDisplay></WinnerDisplay>
      </div>
    </div>
  );
};

export default Home;
