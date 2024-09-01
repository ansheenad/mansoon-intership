import { Toolbar, Typography, AppBar, IconButton } from '@mui/material';
import { Add as AddIcon, Home as HomeIcon } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar position='static' style={{ background: "purple" }}>
          <Typography variant='h5' sx={{ flexGrow: 1 }}>Employee App</Typography>
          <Link to='/add'>
            <IconButton color='success' style={{ color: "white" }}>
              <AddIcon />
            </IconButton>
          </Link>
          &nbsp;&nbsp;
          <Link to='/home'>
            <IconButton color='success' style={{ color: "white" }}>
              <HomeIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
