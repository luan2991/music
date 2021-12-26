import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  RepeatOneRounded,
  RepeatRounded,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PopoverPlay from './popover';
// import PropTypes from 'prop-types';

// MusicPlay.propTypes = {

// };
const stylePopover = {
  pointerEvents: 'none',
  display:{ xs: 'none', sm: 'none', md: 'none', lg: 'block'},
  '& .MuiPopover-paper': {
    bgcolor: 'rgb(24, 34, 45)',
    color: 'rgba(244,246,248,0.5)',
    padding: '5px 5px 5px 5px',
  },
};
const iconColor = 'rgba(244,246,248,0.5)';

const anchorOrigin = {
  vertical: 'bottom',
  horizontal: 'center',
};
const transformOrigin = {
  vertical: 'top',
  horizontal: 'center',
};

function MusicPlay({
  isPlay,
  handlePausePlayClick,
  handlePrevNextClick,
  repeat,
  onRepeat,
  random,
  onRandom,
  openRandom,
  openPrev,
  openPlay,
  openNext,
  openRepeat,
  anchorElRandom,
  anchorElPrev,
  anchorElPlay,
  anchorElNext,
  anchorElRepeat,
  handlePopoverRandomOpen,
  handlePopoverRandomClose,
  handlePopoverPrevOpen,
  handlePopoverPrevClose,
  handlePopoverPlayOpen,
  handlePopoverPlayClose,
  handlePopoverNextOpen,
  handlePopoverNextClose,
  handlePopoverRepeatOpen,
  handlePopoverRepeatClose,
}) {
  return (
    <Box
      sx={{ backgroundColor: 'rgb(24, 34, 45)' }}
      paddingBottom={10}
      color="rgba(244,246,248,0.5)"
      paddingTop="10px"
    >
      <Box width="272px" margin="auto">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Stack
            direction="row"
            width="272px"
            sx={{ mb: 1, px: 1 }}
            alignItems="center"
            spacing={2}
          >
            {/*Random Button */}
            <Box onMouseEnter={handlePopoverRandomOpen} onMouseLeave={handlePopoverRandomClose}>
              {random === false && (
                <IconButton onClick={() => onRandom(true)}>
                  <Shuffle htmlColor={iconColor} />
                </IconButton>
              )}
              {random === true && (
                <IconButton onClick={() => onRandom(false)}>
                  <Shuffle color="primary" />
                </IconButton>
              )}
            </Box>
            {/*Button Random Music  popover*/}
            <PopoverPlay
              sx={stylePopover}
              open={openRandom}
              anchorEl={anchorElRandom}
              transformOrigin={transformOrigin}
              anchorOrigin={anchorOrigin}
              onClose={handlePopoverRandomClose}
              child={<Typography variant="caption">Ngẫu nhiên</Typography>}
            />
            {/*Prev Button*/}
            <IconButton onClick={()=>handlePrevNextClick(-1)} onMouseEnter={handlePopoverPrevOpen} onMouseLeave={handlePopoverPrevClose}>
              <SkipPrevious htmlColor={iconColor} />
            </IconButton>
            {/*Prev Button Popover*/}
            <PopoverPlay
              sx={stylePopover}
              open={openPrev}
              anchorEl={anchorElPrev}
              transformOrigin={transformOrigin}
              anchorOrigin={anchorOrigin}
              onClose={handlePopoverPrevClose}
              child={<Typography variant="caption">Bài trước</Typography>}
            />
            {/*Button Play Music*/}
            <Box onMouseEnter={handlePopoverPlayOpen} onMouseLeave={handlePopoverPlayClose}>
              <IconButton onClick={handlePausePlayClick}>
                {!isPlay  && <PlayCircleOutlined htmlColor={iconColor} sx={{fontSize:45}} />}
                {isPlay &&  <PauseCircleOutlined color="primary" sx={{fontSize:45}}  />}
              </IconButton>
              
             
            </Box>
            {/*Button Play Music popover*/}
            <PopoverPlay
              sx={stylePopover}
              open={openPlay}
              anchorEl={anchorElPlay}
              transformOrigin={transformOrigin}
              anchorOrigin={anchorOrigin}
              onClose={handlePopoverPlayClose}
              child={
                <>
                  {isPlay === true && <Typography variant="caption">Tạm dừng</Typography>}
                  {isPlay === false && <Typography variant="caption">Phát</Typography>}
                </>
              }
            />
            {/*Next Button*/}
            <IconButton  onClick={()=>handlePrevNextClick(1)} onMouseEnter={handlePopoverNextOpen} onMouseLeave={handlePopoverNextClose}>
              <SkipNext htmlColor={iconColor} />
            </IconButton>
            {/*Next Button Popover*/}
            <PopoverPlay
              sx={stylePopover}
              open={openNext}
              anchorEl={anchorElNext}
              transformOrigin={transformOrigin}
              anchorOrigin={anchorOrigin}
              onClose={handlePopoverNextClose}
              child={<Typography variant="caption">Bài sau</Typography>}
            />
            {/*Repeat Button*/}
            <Box onMouseEnter={handlePopoverRepeatOpen} onMouseLeave={handlePopoverRepeatClose}>
              {repeat === 0 && (
                <IconButton onClick={() => onRepeat(1)}>
                  <RepeatRounded htmlColor={iconColor} />
                </IconButton>
              )}
              {repeat === 1 && (
                <IconButton onClick={() => onRepeat(2)}>
                  <RepeatRounded color="primary" />
                </IconButton>
              )}
              {repeat === 2 && (
                <IconButton onClick={() => onRepeat(0)}>
                  <RepeatOneRounded color="primary" />
                </IconButton>
              )}
            </Box>
            {/*Repeat Button Popover*/}
            <PopoverPlay
              sx={stylePopover}
              open={openRepeat}
              anchorEl={anchorElRepeat}
              transformOrigin={transformOrigin}
              anchorOrigin={anchorOrigin}
              onClose={handlePopoverRepeatClose}
              child={<Typography variant="caption">Lặp lại</Typography>}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicPlay;
