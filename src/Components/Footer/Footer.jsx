import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            src="path/to/your/logo.png" // Replace with your logo path
            alt="Logo"
            style={{ width: '80px', marginRight: '15px' }}
          />
          <Typography variant="body1" color="inherit">
            © {new Date().getFullYear()} Your Website Name
          </Typography>
        </Box>
        <div style={{ flexGrow: 1 }} />
        <Box>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/services">
            Services
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
