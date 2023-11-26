import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
const CreatorNavLink = () => {
    return (
        <div>
            <div>
      <NavLink to="/dashboard/addContest" exact activeClassName="active-link">
        <Button variant="outlined" sx={{ my: 1 }} fullWidth>
          <AddCircleOutlineOutlinedIcon sx={{ mr: 2 }} /> Add Contest
        </Button>
      </NavLink>
      <NavLink to="" exact activeClassName="active-link">
        <Button variant="outlined" sx={{ my: 1 }} fullWidth>
          <SchoolOutlinedIcon sx={{ mr: 2 }} /> My Created
        </Button>
      </NavLink>
   
      
    </div>
        </div>
    );
};

export default CreatorNavLink;