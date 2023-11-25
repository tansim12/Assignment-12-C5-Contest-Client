import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const UserNavLinks = () => {
  return (
    <div>
      <NavLink to="" exact activeClassName="active-link">
        <Button variant="outlined" sx={{ my: 1 }} fullWidth>
          <ShoppingCartIcon sx={{ mr: 2 }} /> My Contest
        </Button>
      </NavLink>
      <NavLink to="" exact activeClassName="active-link">
        <Button variant="outlined" sx={{ my: 1 }} fullWidth>
          <MilitaryTechOutlinedIcon sx={{ mr: 2 }} /> My Winning
        </Button>
      </NavLink>
      <NavLink to="" exact activeClassName="active-link">
        <Button variant="outlined" sx={{ my: 1 }} fullWidth>
          <Person2Icon sx={{ mr: 2 }} /> Profile
        </Button>
      </NavLink>
    </div>
  );
};

export default UserNavLinks;
