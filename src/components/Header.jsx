import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, Box, Avatar, useMediaQuery, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile breakpoint

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); // Toggle the drawer state (open/close)
  };

  return (
    <>
      {/* AppBar/Header */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#fff', // White background
          padding: '0.5rem 1rem',
          boxShadow: 'none',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
          }}
        >
          {/* Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer} // Toggle the drawer on click
            sx={{ color: '#121212' }} // Dark-colored menu icon
          >
            <MenuIcon />
          </IconButton>

          {/* Centered Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="logoo.png"
              alt="Billy Brooks"
              style={{
                maxHeight: '40px',
                width: 'auto',
                maxWidth: '100%',
              }}
            />
          </Typography>

          {/* Profile Icon */}
          <IconButton
            color="inherit"
            sx={{ 
              color: '#121212', 
              marginRight: '1px' // Shift profile icon inside
            }}
          >
            <Avatar alt="Profile" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Fullscreen Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: '100vw', // Fullscreen on mobile
            height: '100vh',
            backgroundColor: '#121212', // Dark background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          role="presentation"
          onClick={toggleDrawer} // Toggle the drawer on click (also closes it)
          onKeyDown={toggleDrawer}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem', // Add spacing between items
              width: '100%',
              textAlign: 'center',
              padding: '2rem',
            }}
          >
            <ListItem
              button
              sx={{
                backgroundColor: '#fff',
                color: '#121212',
                padding: '1rem 2rem',
                borderRadius: '10px',
                width: '80%',
                justifyContent: 'center',
              }}
            >
              <ListItemText primary="Home" sx={{ fontWeight: 'bold' }} />
            </ListItem>
            <ListItem
              button
              sx={{
                backgroundColor: '#fff',
                color: '#121212',
                padding: '1rem 2rem',
                borderRadius: '10px',
                width: '80%',
                justifyContent: 'center',
              }}
            >
              <ListItemText primary="About" sx={{ fontWeight: 'bold' }} />
            </ListItem>
            <ListItem
              button
              sx={{
                backgroundColor: '#fff',
                color: '#121212',
                padding: '1rem 2rem',
                borderRadius: '10px',
                width: '80%',
                justifyContent: 'center',
              }}
            >
              <ListItemText primary="Music" sx={{ fontWeight: 'bold' }} />
            </ListItem>
            <ListItem
              button
              sx={{
                backgroundColor: '#fff',
                color: '#121212',
                padding: '1rem 2rem',
                borderRadius: '10px',
                width: '80%',
                justifyContent: 'center',
              }}
            >
              <ListItemText primary="Contact" sx={{ fontWeight: 'bold' }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
