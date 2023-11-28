import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { Home as HomeIcon, FormatListBulleted as ListIcon } from '@mui/icons-material'; // Material-UI icons

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            style={{ width: '30%', marginRight: '1rem' }}
            src="https://especio.themerex.net/splash/assets/img/logo.png"
            alt=""
          />
          <Typography variant="body1" color="inherit" textAlign={"center"}>
            © {new Date().getFullYear()} Your Website Name
          </Typography>
        </Box>
        <div style={{ flexGrow: 1 }} />
        <Box>
          <Button color="inherit" startIcon={<HomeIcon />} component={Link} to="/">
            Home
          </Button>
        <Button color="inherit" startIcon={<ListIcon />} component={Link} to="/allContest">
            ALL Contest
          </Button>
          {/* <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
