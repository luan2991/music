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
  const [random, setRandom] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElMore, setAnchorElMore] = useState(null);
  const [anchorElRandom, setAnchorElRandom] = useState(null);
  const [anchorElPrev, setAnchorElPrev] = useState(null);
  const [anchorElPlay, setAnchorElPlay] = useState(null);
  const [anchorElNext, setAnchorElNext] = useState(null);
  const [anchorElRepeat, setAnchorElRepeat] = useState(null);

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
  const handlePopoverRandomOpen = (event) => {
    setAnchorElRandom(event.currentTarget);
  };

  const handlePopoverRandomClose = () => {
    setAnchorElRandom(null);
  };
  const handlePopoverPrevOpen = (event) => {
    setAnchorElPrev(event.currentTarget);
  };

  const handlePopoverPrevClose = () => {
    setAnchorElPrev(null);
  };
  const handlePopoverPlayOpen = (event) => {
    setAnchorElPlay(event.currentTarget);
  };

  const handlePopoverPlayClose = () => {
    setAnchorElPlay(null);
  };
  const handlePopoverNextOpen = (event) => {
    setAnchorElNext(event.currentTarget);
  };

  const handlePopoverNextClose = () => {
    setAnchorElNext(null);
  };
  const handlePopoverRepeatOpen = (event) => {
    setAnchorElRepeat(event.currentTarget);
  };

  const handlePopoverRepeatClose = () => {
    setAnchorElRepeat(null);
  };
  const open = Boolean(anchorEl);
  const openMore = Boolean(anchorElMore);
  const openRandom = Boolean(anchorElRandom);
  const openPrev = Boolean(anchorElPrev);
  const openPlay = Boolean(anchorElPlay);
  const openNext = Boolean(anchorElNext);
  const openRepeat = Boolean(anchorElRepeat);
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
        <MusicPlay
          pause={pause}
          onPause={onPause}
          repeat={repeat}
          onRepeat={onRepeat}
          random={random}
          onRandom={onRandom}
          openRandom={openRandom}
          openPrev={openPrev}
          openPlay={openPlay}
          openNext={openNext}
          openRepeat={openRepeat}
          anchorElRandom={anchorElRandom}
          anchorElPrev={anchorElPrev}
          anchorElPlay={anchorElPlay}
          anchorElNext={anchorElNext}
          anchorElRepeat={anchorElRepeat}
          handlePopoverRandomOpen={handlePopoverRandomOpen}
          handlePopoverRandomClose={handlePopoverRandomClose}
          handlePopoverPrevOpen={handlePopoverPrevOpen}
          handlePopoverPrevClose={handlePopoverPrevClose}
          handlePopoverPlayOpen={handlePopoverPlayOpen}
          handlePopoverPlayClose={handlePopoverPlayClose}
          handlePopoverNextOpen={handlePopoverNextOpen}
          handlePopoverNextClose={handlePopoverNextClose}
          handlePopoverRepeatOpen={handlePopoverRepeatOpen}
          handlePopoverRepeatClose={handlePopoverRepeatClose}
        />
        
      </Drawer>
    </Box>
  );
}

export default SidebarRight;
