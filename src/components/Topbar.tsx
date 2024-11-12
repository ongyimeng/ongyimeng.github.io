import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Topbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center' }}>  {/* Center the buttons */}
          {/* Navigation Links */}
          <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/work-experience" sx={{ mx: 1 }}>
            Work Experience
          </Button>
          <Button color="inherit" component={Link} to="/interests" sx={{ mx: 1 }}>
            Interests
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;
