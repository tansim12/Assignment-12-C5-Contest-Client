import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import AddHomeIcon from "@mui/icons-material/AddHome";
import CallMadeIcon from "@mui/icons-material/CallMade";
import UserNavLinks from "../../Components/RoleBaseNavlinks/UserNavLinks";
import AdminNavLinks from "../../Components/RoleBaseNavlinks/AdminNavLinks";
import CreatorNavLink from "../../Components/RoleBaseNavlinks/CreatorNavLink";
import useCurrentRole from "../../Hooks/useCurrentRole";
import LogoutIcon from '@mui/icons-material/Logout';
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
const drawerWidth = 240;

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const navigate =useNavigate()
  const { currentRole } = useCurrentRole();
  const {logOut} = useAuthContext()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // handleLogout
  const handleLogout =()=>{
    logOut().then(()=>{
      toast.success("Log Out successfully done")
      navigate("/")
    })
  } 

  const drawer = (
    <div className="">
      <Toolbar />
      <Divider />
      {/* role base links  */}
  
      <List sx={{p:2}}>
        {currentRole?.currentRole === "user" && <UserNavLinks />}
        {currentRole?.currentRole === "creator" && <CreatorNavLink />}
        {currentRole?.currentRole === "admin" && <AdminNavLinks />}
      </List>
     
      {/* <Divider sx={{ border: 2, borderColor: "gray" }}></Divider> */}

      {/* main links  */}
      <List sx={{p:2}}>
        <NavLink to="/" exact activeClassName="active-link">
          <Button variant="outlined" sx={{ my: 3 }} fullWidth>
            <AddHomeIcon sx={{ mr: 2 }} /> Home
          </Button>
        </NavLink>
        <NavLink to="/allContest" exact activeClassName="active-link">
          <Button variant="outlined" fullWidth>
            <CallMadeIcon sx={{ mr: 2 }} /> All Contest
          </Button>
        </NavLink>
        <Button
        onClick={handleLogout}
        variant="outlined" sx={{ my: 3 }}  fullWidth>
            <LogoutIcon sx={{ mr: 2 }} /> Log out
          </Button>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <img
              style={{ width: "30%" }}
              src="https://especio.themerex.net/splash/assets/img/logo.png"
              alt=""
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
