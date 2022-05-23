import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MenuSideBarAdmin from '../sidebarleftAdmin/components';
import MenuSideBar from './components/menusidebar';
// import PropTypes from 'prop-types';

// index.propTypes = {

// const drawerWidth = 240;
function SidebarLeft(props) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const user = useSelector((state) => state.auth.currentUser);
  const { pathname } = useLocation();
  console.log(!!user);
  return (
    <Drawer
      sx={{
        width: { xs: 50, sm: 50, md: 50, lg: 240 },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: { xs: 50, sm: 50, md: 50, lg: 240 },
          boxSizing: 'border-box',
          bgcolor: darkMode ? 'rgb(24, 34, 45)' : '#fff',
          overflowX: 'hidden',
          transition: 'width 0.2s',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 360,
          fontSize: '8px',
        }}
      >
        {(pathname.includes('admin') === false || !!user === false) && (
          <MenuSideBar darkMode={darkMode} />
        )}
        {pathname.includes('admin') === true && user.admin === true && (
          <MenuSideBarAdmin darkMode={darkMode} />
        )}
      </Box>
    </Drawer>
  );
}

export default SidebarLeft;
