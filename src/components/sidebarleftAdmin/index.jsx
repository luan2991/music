import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import MenuSideBarAdmin from './components';

// import PropTypes from 'prop-types';

// index.propTypes = {

// const drawerWidth = 240;
function SidebarLeft(props) {
  const darkMode = useSelector((state) => state.theme.darkMode);
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
        <MenuSideBarAdmin darkMode={darkMode} />
      </Box>
    </Drawer>
  );
}

export default SidebarLeft;
