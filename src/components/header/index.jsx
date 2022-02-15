import React from 'react';
import { Box } from '@mui/system';
import { AppBar, IconButton, InputBase, Stack } from '@mui/material';
import { AccountCircle, Search, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomSwitch from './CustomSwicht';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkTheme } from '../../redux/themeSlide';
// import PropTypes from 'prop-types';
// Header.propTypes = {

// };

function HeaderBar(props) {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode);
  console.log(darkMode);
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    
    dispatch(setDarkTheme());
   
  };
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          height: '60px',
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
              sx={{
                backgroundColor: darkMode ? '' : '',
                color: darkMode ? '#fff' : '',
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
            <IconButton onClick={() => navigate('account')}>
              <AccountCircle
                sx={{ fontSize: '40px' }}
                htmlColor={darkMode ? '#fff' : 'rgba(28,30,32,0.5)'}
                titleAccess="Tài Khoản"
              />
            </IconButton>
          </Stack>
        </Stack>
      </AppBar>
    </Box>
  );
}

export default HeaderBar;
