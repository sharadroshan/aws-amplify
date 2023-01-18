import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Avatar, Box, Link, Toolbar } from '@mui/material';
import { Logo } from './logo';
import AuthenticatorWithEmail from '../EmployeeDetail/AuthenticatorWithEmail';

export const Navbar = () => (
  <AppBar
    elevation={0}
    sx={{ backgroundColor: '#1e212a' }}
  >
    <Toolbar
      disableGutters
      sx={{
        alignItems: 'center',
        display: 'flex',
        minHeight: 64,
        px: 3,
        py: 1
      }}
    >
      <Box
        component={RouterLink}
        to="/"
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Logo />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <AuthenticatorWithEmail />
    </Toolbar>
  </AppBar>
);
