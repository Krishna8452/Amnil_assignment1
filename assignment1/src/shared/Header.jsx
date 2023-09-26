import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static" style={{width:'100%', position:'fixed', height:'4rem'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Userlist
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
