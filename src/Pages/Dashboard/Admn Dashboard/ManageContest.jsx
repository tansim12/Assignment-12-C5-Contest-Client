import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import useGetAllUsers from "../../../Hooks/useGetAllUsers";
import UpdateRoleManageUsers from "./UpdateRoleManageUsers";
import { Button, Grid, Pagination, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";
import React from "react";
import useContests from "../../../Hooks/useContests";
import ConfirmAndDeleteContest from "./ConfirmAndDeleteContest";

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

const ManageContest = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [size, setSize] = React.useState(4);
  const { contestData, contestRefetch } = useContests(currentPage, size);

  const counts = Math.ceil(contestData?.totalContestCount / size);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage); // Update current page number
  };

  return (
    <Grid>
      <TableContainer component={Paper}>
        <Helmet>
          <title>Manage Contest</title>
        </Helmet>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Image</StyledTableCell>
              <StyledTableCell align="center">Tag</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contestData?.allContestData?.map((item) => (
              <StyledTableRow key={item?._id}>
                <StyledTableCell component="th" scope="row">
                  {item?.contest_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {" "}
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

                <StyledTableCell align="center">{item?.tag}</StyledTableCell>
                <StyledTableCell align="center">
                  {" "}
                  {item?.status === "pending" ? (
                    <Button color="error">{item?.status}</Button>
                  ) : (
                    <Button>{item?.status}</Button>
                  )}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <ConfirmAndDeleteContest item={item} contestRefetch={contestRefetch}/>
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
  );
};

export default ManageContest;
