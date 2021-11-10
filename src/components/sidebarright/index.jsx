import { Drawer } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import MusicDisk from './components/musicdisk';
import MusicStatus from './components/musicstatus';

// import PropTypes from 'prop-types';

// index.propTypes = {

// };
const drawerWidth = 320;
function SidebarRight(props) {
  const [pause, setPause] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElMore, setAnchorElMore] = useState(null);
  const open = Boolean(anchorEl);
  const openMore = Boolean(anchorElMore);
  const onPause = () =>{
    pause === false ? setPause(true) : setPause(false);
  }
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverMoreOpen = (event) => {
    setAnchorElMore(event.currentTarget);
  };

  const handlePopoverMoreClose = () => {
    setAnchorElMore(null);
  };
  

  return (
    <Box bgcolor='rgba(0, 0, 0, 0.87)' sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs:'none', sm: 'none', md: 'none', lg:'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
        anchor="right"
      >
        <MusicDisk isPause={pause}/>
        <MusicStatus open={open}  anchorEl={anchorEl}
          handlePopoverOpen={handlePopoverOpen}
          handlePopoverClose={handlePopoverClose}
          openMore={openMore}  
          anchorElMore={anchorElMore}
          handlePopoverMoreOpen={handlePopoverMoreOpen}
          handlePopoverMoreClose={handlePopoverMoreClose}
        />
        <Button onClick={()=>onPause()  }>Pause</Button>
      </Drawer>
    </Box>
  );
}

export default SidebarRight;
