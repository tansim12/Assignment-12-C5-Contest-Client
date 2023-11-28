import useOneCreatorALLContest from "../../../Hooks/useOneCreatorALLContest";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CreatorActionButton from "./CreatorActionButton";
import { Grid, Pagination, Stack } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

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

const MyCreated = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [size, setSize] = React.useState(4);
  const { allContestData, allContestDataRefetch } = useOneCreatorALLContest(currentPage , size);

  const counts = Math.ceil(allContestData?.totalCount / size);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage); // Update current page number
  };

  return (
    <Grid>
      <Helmet><title>My Created</title></Helmet>
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Tag</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allContestData?.result?.map((item) => (
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
                {item?.from} <br /> {item?.to}
              </StyledTableCell>
              <StyledTableCell align="right">
                <CreatorActionButton
                  item={item}
                  allContestDataRefetch={allContestDataRefetch}
                />
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

export default MyCreated;
