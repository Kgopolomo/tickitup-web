import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon
} from '@mui/icons-material';
import logo from '../img/tickitup_logo_TM_9.png';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'transparent', height: '10%', position: 'initial' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <img src={logo} alt="Event Ticketing" style={{ width: isMobile ? '15rem' : '30rem' }} />
        <div sx={{ display: 'flex', alignItems: 'center', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)', width: isMobile ? '100%' : 'auto', marginRight: isMobile ? '0' : '10%' }}>
          <InputBase
            placeholder="Search events"
            sx={{
              borderRadius: '0.5rem',
              padding: '0.5rem',
              width: isMobile ? '100%' : '30rem',
              mr: isMobile ? '0' : '1rem',
              backgroundColor: 'white',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)'
            }}
          />
        </div>
        <div sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', top: '10%' }}>
          <Button variant="outlined" sx={{ mr: isMobile ? '0' : '1rem' }}>
            Create Event
          </Button>
          <IconButton color="default" sx={{ mr: isMobile ? '0' : '1rem', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)' }}>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton color="default" sx={{ ml: isMobile ? '0' : '1rem', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)' }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="default" sx={{ ml: isMobile ? '0' : '1rem', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)' }}>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;