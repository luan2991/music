import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { AccountCircle, Logout } from '@mui/icons-material';
import CustomSwitch from '../CustomSwicht';

HeaderAdmin.propTypes = {
  user: PropTypes.any,
  handleThemeChange: PropTypes.func,
  darkMode: PropTypes.bool,
  handleLogout: PropTypes.func,
};

function HeaderAdmin(props) {
  const { user, handleThemeChange, darkMode, handleLogout } = props;
  return (
    <AppBar
      position="fixed"
      sx={{
        height: '4em',
        backgroundColor: darkMode ? 'rgb(24, 35, 45)' : '#fff',
        width: {
          xs: 'calc(100% - 50px)',
          sm: 'calc(100% - 50px)',
          md: 'calc(100% - 50px)',
          lg: 'calc(100% - 560px)',
        },
        marginRight: { xs: '0px', sm: '0px', md: '0px', lg: '320px' },
        boxShadow: 'none',
        transition: 'width 0.2s ',
      }}
    >
      <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
        <CustomSwitch checked={darkMode} onClick={() => handleThemeChange()} />
        {user !== '' && (
          <Box>
            <Link to={'/account'} style={{ textDecoration: 'none' }}>
              <IconButton>
                <AccountCircle
                  sx={{ fontSize: '40px' }}
                  htmlColor={darkMode ? '#fff' : 'rgba(28,30,32,0.5)'}
                  titleAccess="Tài Khoản"
                />
              </IconButton>
            </Link>
            <IconButton onClick={handleLogout}>
              <Logout
                sx={{ fontSize: '40px' }}
                htmlColor={darkMode ? '#fff' : 'rgba(28,30,32,0.5)'}
                titleAccess="Đăng Xuất"
              />
            </IconButton>
          </Box>
        )}
      </Stack>
    </AppBar>
  );
}

export default HeaderAdmin;
