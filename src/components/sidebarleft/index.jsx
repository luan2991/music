import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuSideBar from './components/menusidebar';
// import PropTypes from 'prop-types';

// index.propTypes = {

// const drawerWidth = 240;
function SidebarLeft(props) {
  return (
    <Box>
      <Drawer
        sx={{
          width: { xs: 50, sm: 50, md: 50, lg: 240 },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: { xs: 50, sm: 50, md: 50, lg: 240 },
            boxSizing: 'border-box',
            bgcolor: 'rgb(24, 34, 45)',
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
            bgcolor: 'background.paper',
            color: 'rgba(244,246,248,0.5)',
            fontSize: '8px',
          }}
        >
          <MenuSideBar />
        </Box>
      </Drawer>
    </Box>
  );
}

export default SidebarLeft;
