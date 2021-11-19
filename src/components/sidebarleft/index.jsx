import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import MenuSideBar from './components/menusidebar';
// import PropTypes from 'prop-types';

// index.propTypes = {

const drawerWidth = 240;
function SidebarLeft(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'rgb(24, 34, 45)',
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
          <MenuSideBar open={open} handleClick={handleClick} />
        </Box>
      </Drawer>
    </Box>
  );
}

export default SidebarLeft;
