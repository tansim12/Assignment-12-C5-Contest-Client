import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ManageHistoryOutlinedIcon from "@mui/icons-material/ManageHistoryOutlined";

const AdminNavLinks = () => {
  return (
    <div>
      <NavLink
        to="/dashboard/manageContest"
        exact
        activeClassName="active-link"
      >
        <Button variant="outlined" sx={{ my: 1 }} fullWidth>
          <ManageHistoryOutlinedIcon sx={{ mr: 2 }} /> Manage Contest
        </Button>
      </NavLink>
      <NavLink to="/dashboard/manageUsers" exact activeClassName="active-link">
        <Button variant="outlined" sx={{ my: 1 }} fullWidth>
          <PersonAddAltIcon sx={{ mr: 2 }} /> Manage User
        </Button>
      </NavLink>
    </div>
  );
};

export default AdminNavLinks;
