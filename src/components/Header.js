import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={NavLink} to="/" exact activeStyle={{ fontWeight: 'bold', color: 'yellow' }}>
          Home
        </Button>
        <Button color="inherit" component={NavLink} to="/about" activeStyle={{ fontWeight: 'bold', color: 'yellow' }}>
          About
        </Button>
        <Button color="inherit" component={NavLink} to="/projects" activeStyle={{ fontWeight: 'bold', color: 'yellow' }}>
          Projects
        </Button>
        <Button color="inherit" component={NavLink} to="/contact" activeStyle={{ fontWeight: 'bold', color: 'yellow' }}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
