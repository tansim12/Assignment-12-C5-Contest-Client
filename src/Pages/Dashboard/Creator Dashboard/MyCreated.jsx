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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const MyCreated = () => {
  const { allContestData, allContestDataRefetch } = useOneCreatorALLContest();

  return (
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
          {allContestData?.map((item) => (
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
  );
};

export default MyCreated;
