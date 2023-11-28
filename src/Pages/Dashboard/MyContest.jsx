import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// import CallMadeIcon from "@mui/icons-material/CallMade";
import ParticipanteCard from "./User Dashboard/ParticipanteCard";
import {
  Box,
  // Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import useAxiosHook from "../../Hooks/useAxiosHook";
import useAuthContext from "../../Hooks/useAuthContext";
import { useQuery } from "@tanstack/react-query";
import NoDataFound from "../../shared/NoDataFound";
// import CallReceivedIcon from "@mui/icons-material/CallReceived";
// todo sorting feature to show My upcoming Contests to the user.
const MyContest = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [size, setSize] = React.useState(3);

  const [upcoming, setUpcoming] = React.useState("desc");
  const handleChange = (event) => {
    setUpcoming(event.target.value);
  };

  const instance = useAxiosHook();
  const { user } = useAuthContext();
  const { data = {} } = useQuery({
    queryKey: ["myContest", user?.email, currentPage, upcoming],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await instance.get(
        `/myContest/${
          user?.email
        }?page=${currentPage}&size=${size}&sortField=${"from"}&sortValue=${upcoming}`
      );
      const fetchData = await res.data;
      return fetchData;
    },
  });
  const { result: myContestData, totalParticipateContest } = data;

  const counts = Math.ceil(totalParticipateContest / size);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage); // Update current page number
  };

  return (
    <div>
      {/* sorting  */}
      <div>
        <Grid display={"flex"} justifyContent={"end"} mt={5} mb={4}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={upcoming}
                label="Filter"
                onChange={handleChange}
              >
                <MenuItem value={"asc"}>UpComing</MenuItem>
                <MenuItem value={"desc"}>Old Contest</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </div>
      {/* cart section  */}
      <div>
        {myContestData?.length > 0 ? (
          <Grid container spacing={3}>
            {myContestData?.map((item) => (
              <Grid key={item?._id} item xs={12} sm={12} md={6} lg={4}>
                <ParticipanteCard item={item}></ParticipanteCard>
              </Grid>
            ))}
          </Grid>
        ) : (
          <NoDataFound />
        )}
      </div>

      {/* pagination */}
      <div>
        <Helmet>
          <title>My Contest</title>
        </Helmet>
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
