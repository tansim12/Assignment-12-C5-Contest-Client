import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Button, Grid, Pagination, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";
import React from "react";

import { useParams } from "react-router-dom";
import useEveryContestParticipants from "../../../Hooks/useEveryContestParticipants";
import Swal from "sweetalert2";
import useAxiosHook from "../../../Hooks/useAxiosHook";
import NoDataFound from "../../../shared/NoDataFound";
import useFindOneContest from "../../../Hooks/useFindOneContest";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const SeeSubmission = () => {
  const instance = useAxiosHook();
  const { _id: id } = useParams();
  const { oneContestData, oneContestRefetch } = useFindOneContest(id);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [size, setSize] = React.useState(4);

  const { participantsAllData, participantsAllDataRefetch } =
    useEveryContestParticipants(id, currentPage, size);

  const counts = Math.ceil(participantsAllData?.totalParticipantCount / size);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage); // Update current page number
  };

  // handleConfirm
  const handleConfirm = (_id, item) => {
    console.log(_id, item);
    const winner = {
      name: item?.participantName,
      image: item?.image,
      email: item?.email,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await instance.patch(`/creatorUpdateContest/${_id}`, {
          winner_status: true,
          winner: winner,
        });
        const fetchData = await res.data;
        if (fetchData.success) {
          Swal.fire({
            title: "Winner!",
            text: "Your Winner is selected",
            icon: "success",
          });
          participantsAllDataRefetch();
          oneContestRefetch();
        }
      }
    });
  };
  return (
    <Grid>
      {participantsAllData?.result?.length > 0 ? (
        <Grid>
          <TableContainer component={Paper}>
            <Helmet>
              <title>Submission</title>
            </Helmet>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">PaymentId</StyledTableCell>
                  <StyledTableCell align="center">Image</StyledTableCell>
                  <StyledTableCell align="center">Winner</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {participantsAllData?.result?.map((item) => (
                  <StyledTableRow key={item?._id}>
                    <StyledTableCell component="th" scope="row">
                      {item?.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {" "}
                      {item?.participantName}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {item?.transactionId}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <img
                        src={item?.image}
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "full",
                        }}
                        alt=""
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                        disabled={oneContestData?.winner_status}
                        variant="outlined"
                        onClick={() => handleConfirm(item?.contestId, item)}
                      >
                        {oneContestData?.winner_status ? "Winner" : "Confirm"}
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

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
        </Grid>
      ) : (
        <NoDataFound />
      )}
    </Grid>
  );
};

export default SeeSubmission;
