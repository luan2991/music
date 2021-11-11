import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import MusicDisk from './components/musicdisk';
import MusicPlay from './components/musicplay';
import MusicSlider from './components/musicslider';
import MusicStatus from './components/musicstatus';

// import PropTypes from 'prop-types';

// index.propTypes = {

// };
const drawerWidth = 320;
function SidebarRight(props) {
  const [pause, setPause] = useState(false);
  const [repeat, setRepeat] = useState(0);
  const [random,setRandom]= useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElMore, setAnchorElMore] = useState(null);
  const open = Boolean(anchorEl);
  const openMore = Boolean(anchorElMore);
  const onPause = (status) => {
    setPause(status);
  };
  const onRandom = (stattus) => {
    setRandom(stattus); 
  };
  const onRepeat = (status) => {
    setRepeat(status);
  };
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
    <Box bgcolor="rgba(0, 0, 0, 0.87)" sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
        anchor="right"
      >
        <MusicDisk isPause={pause} />
        <MusicStatus
          open={open}
          anchorEl={anchorEl}
          handlePopoverOpen={handlePopoverOpen}
          handlePopoverClose={handlePopoverClose}
          openMore={openMore}
          anchorElMore={anchorElMore}
          handlePopoverMoreOpen={handlePopoverMoreOpen}
          handlePopoverMoreClose={handlePopoverMoreClose}
        />
        <MusicSlider />
        <MusicPlay pause={pause} onPause={onPause} repeat={repeat} onRepeat={onRepeat} random={random} onRandom={onRandom} />
      </Drawer>
    </Box>
  );
}

export default SidebarRight;
