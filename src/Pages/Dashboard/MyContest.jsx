import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useMyContest from "../../Hooks/useMyContest";
import ParticipanteCard from "./User Dashboard/ParticipanteCard";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
// todo sorting feature to show My upcoming Contests to the user.
const MyContest = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [size, setSize] = React.useState(3);

    const { myContestData } = useMyContest(currentPage,size);


  const counts = Math.ceil(myContestData?.length / size);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage); // Update current page number
  };
  return (
    <div>
      {/* cart section  */}
      <div>
        <Grid container spacing={3}>
          {myContestData?.map((item) => (
            <Grid key={item?._id} item xs={12} sm={12} md={6} lg={4}>
              <ParticipanteCard item={item}></ParticipanteCard>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* pagination */}
      <div>
          <Helmet><title>My Contest</title></Helmet>
        <Grid
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          my={10}
        >
          <Stack spacing={2}>
            <Pagination
              count={counts}
              color="primary"
              page={currentPage} 
              onChange={handlePageChange} 
            />
          </Stack>
        </Grid>
      </div>
    </div>
  );
};

export default MyContest;
