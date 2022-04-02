import React, { useState } from 'react';
import { Box } from '@mui/system';
import { AppBar, Dialog, DialogTitle, InputBase, Stack } from '@mui/material';
import { Search, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomSwitch from './CustomSwicht';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkTheme } from '../../redux/themeSlide';
import LoginHeader from './loginHeader';
import jwt_decode from 'jwt-decode';
import { loginUser, logoutUser } from '../../redux/authSlide';
import authApi from '../../api/authApi';
import axios from 'axios';

function HeaderBar(props) {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const user = useSelector((state) => state.auth.currentUser);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [openLogin, setOpenLogin] = useState(false);
  const [anchorElLogin, setAnchorElLogin] = useState(null);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const handleNavigateSignUp = () => {
    //Mở modal đăng ký

    navigate('/sign-up');
  };

  const handleThemeChange = () => {
    // đổi giao diện sáng/tối
    dispatch(setDarkTheme());
  };
  const handleOpenLoginPopper = (event) => {
    //Mở popper đăng nhập đăng ký
    setAnchorElLogin(event.currentTarget);
    setOpenLogin(true);
  };
  const handleCloseLoginPopper = () => {
    //Đóng popper đăng nhập, đăng ký

    setOpenLogin(false);
  };

  const onSubmitLogin = (value) => {
    setOpenLogin(false);
    dispatch(loginUser(value));
  };
  let axiosJWT = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { 'Content-Type': 'application/json' },
  });

  axiosJWT.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      console.log('decoded: ', decodedToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const { data } = await authApi.refreshToken();
        const refreshUser = { ...user, accessToken: data.accessToken };
        dispatch(loginUser.fulfilled(refreshUser));
        config.headers['token'] = 'Bearer ' + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  const handleLogout = async () => {
    try {
      dispatch(logoutUser({ token: user.accessToken, axiosJWT }));

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
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
              onClick={() => setOpen(true)}
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
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
      </Dialog>
    </Box>
  );
}

export default HeaderBar;
