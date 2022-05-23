import React, { useState } from 'react';
import { Box } from '@mui/system';
import { AppBar, InputBase, Stack } from '@mui/material';
import { Search, Settings } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomSwitch from './CustomSwicht';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkTheme } from '../../redux/themeSlide';
import jwt_decode from 'jwt-decode';
import { loginUser, logoutUser } from '../../redux/authSlide';
import authApi from '../../api/authApi';
import axios from 'axios';
import HeaderUser from './HeaderUser';

function HeaderBar(props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const user = useSelector((state) => state.auth.currentUser);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [openLogin, setOpenLogin] = useState(false);
  const [anchorElLogin, setAnchorElLogin] = useState(null);

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
      {((user?.admin === false && pathname.includes('admin') === false) || user === '') && (
        <HeaderUser
          handleNavigateSignUp={handleNavigateSignUp}
          handleOpenLoginPopper={handleOpenLoginPopper}
          handleThemeChange={handleThemeChange}
          handleCloseLoginPopper={handleCloseLoginPopper}
          onSubmitLogin={onSubmitLogin}
          darkMode={darkMode}
          isLoading={isLoading}
          handleLogout={handleLogout}
          errorMessage={errorMessage}
          openLogin={openLogin}
          anchorElLogin={anchorElLogin}
          user={user}
        />
      )}
      {((user?.isAdmin === true && pathname.includes('admin') === true) || user !== '') && (
        <HeaderUser
          handleThemeChange={handleThemeChange}
          darkMode={darkMode}
          handleLogout={handleLogout}
          user={user}
        />
      )}
    </Box>
  );
}

export default HeaderBar;
