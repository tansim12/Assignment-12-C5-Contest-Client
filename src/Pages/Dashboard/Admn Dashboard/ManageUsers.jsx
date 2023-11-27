import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import CreatorActionButton from "./CreatorActionButton";
import useGetAllUsers from "../../../Hooks/useGetAllUsers";
import UpdateRoleManageUsers from "./UpdateRoleManageUsers";
import { Button } from "@mui/material";

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

const ManageUsers = () => {
  const { allUserData, allUsersRefetch } = useGetAllUsers();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Role</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUserData?.map((item) => (
            <StyledTableRow key={item?._id}>
              <StyledTableCell component="th" scope="row">
                {item?.email}
              </StyledTableCell>
              <StyledTableCell align="center"> {item?.name}</StyledTableCell>

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
              <StyledTableCell align="center">
                {" "}
                {item?.role === "admin" ? (
                  <Button color="error">{item?.role}</Button>
                ) : (
                  <Button>{item?.role}</Button>
                )}
              </StyledTableCell>
              <StyledTableCell align="right">
                {item?.role !== "admin" && (
                  <UpdateRoleManageUsers
                    item={item}
                    allUsersRefetch={allUsersRefetch}
                  />
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageUsers;
