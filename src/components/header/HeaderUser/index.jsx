import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, InputBase, Stack } from '@mui/material';
import { Search, Settings } from '@mui/icons-material';
import CustomSwitch from '../CustomSwicht';
import LoginHeader from '../loginHeader';

HeaderUser.propTypes = {
  handleNavigateSignUp: PropTypes.func,
  handleOpenLoginPopper: PropTypes.func,
  handleThemeChange: PropTypes.func,
  handleCloseLoginPopper: PropTypes.func,
  onSubmitLogin: PropTypes.func,
  darkMode: PropTypes.bool,
  isLoading: PropTypes.bool,
  handleLogout: PropTypes.func,
  errorMessage: PropTypes.string,
  openLogin: PropTypes.bool,
  anchorElLogin: PropTypes.any,
  user:PropTypes.any,
};

function HeaderUser(props) {
  const {
    handleNavigateSignUp,
    handleOpenLoginPopper,
    handleThemeChange,
    handleCloseLoginPopper,
    onSubmitLogin,
    darkMode,
    isLoading,
    handleLogout,
    errorMessage,
    openLogin,
    anchorElLogin,
    user,
  } = props;
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
        <Stack
          sx={{
            backgroundColor: darkMode ? 'rgb(53, 53, 53)' : 'rgba(0,0,0,0.05)',
            marginLeft: '20px',
            paddingLeft: '8px',
            marginTop: '12px',
            width: '320px',
            borderRadius: '40px',
          }}
          direction="row"
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Search htmlColor={darkMode ? '#00b509' : 'rgba(28,30,32,0.5)'} />
          <InputBase
            placeholder="Nhập Tên Bài Hát"
            sx={{
              backgroundColor: darkMode ? '' : '',
              color: darkMode ? '#FFFFFF' : '',
            }}
          />
        </Stack>
        <Stack
          sx={{ paddingRight: '8px' }}
          direction="row"
          spacing={1}
          justifyContent="flex-end"
          alignItems="center"
        >
          <CustomSwitch checked={darkMode} onClick={() => handleThemeChange()} />
          <Settings
            htmlColor={darkMode ? '#fff' : 'rgba(28,30,32,0.5)'}
            sx={{ fontSize: '40px' }}
          />
          <LoginHeader
            isLoading={isLoading}
            onSubmit={onSubmitLogin}
            darkMode={darkMode}
            openLogin={openLogin}
            anchorElLogin={anchorElLogin}
            handleOpenLoginPopper={handleOpenLoginPopper}
            handleCloseLoginPopper={handleCloseLoginPopper}
            user={user}
            errorMessage={errorMessage}
            handleNavigateSignUp={handleNavigateSignUp}
            handleLogout={handleLogout}
          />
        </Stack>
      </Stack>
    </AppBar>
  );
}

export default HeaderUser;
