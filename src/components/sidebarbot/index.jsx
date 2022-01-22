import { QueueMusic } from '@mui/icons-material';
import { Divider, Drawer, IconButton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BotAudioDisk from './component/audiobotdisk';
import BotAudioPlay from './component/botaudioplay';
import BotAudioSlider from './component/botslider';
import BotVolumn from './component/botvolumn';

// import PropTypes from 'prop-types';

// SideBarBot.propTypes = {

// };
const drawerHeight = 80;
function SideBarBot({
  isPlay,
  titleAudio,
  artistAudio,
  add3Dots,
  formatDuration,
  duration,
  currentTime,
  handleTimeSliderChange,
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
  volume,
  handleVolumeAudio,
  hoverVolumeBot,
  changeHoverVolumeBot,
  handleDrawerBotPlayList,
  volumeStatus,
  handleVolumeStatus,
}) {
  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
          zIndex: 1201,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            height: drawerHeight,
            zIndex: 1201,
            backgroundColor: 'rgb(24, 34, 45)',
          },
        }}
        open
        anchor="bottom"
      >
        <Box padding="0 2rem 0 2rem" display="flex" alignItems="center" height={drawerHeight}>
          {/*Stack side bar bot full*/}
          <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
            <BotAudioDisk
              isPlay={isPlay}
              titleAudio={titleAudio}
              artistAudio={artistAudio}
              add3Dots={add3Dots}
            />
            <Stack direction="column" alignItems="center">
              <BotAudioPlay
                isPlay={isPlay}
                handlePausePlayClick={handlePausePlayClick}
                handlePrevNextClick={handlePrevNextClick}
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
              <BotAudioSlider
                formatDuration={formatDuration}
                duration={duration}
                currentTime={currentTime}
                handleTimeSliderChange={handleTimeSliderChange}
              />
            </Stack>
            <Box>
              <Stack
                direction="row"
                divider={
                  <Divider
                    sx={{ backgroundColor: 'rgba(244, 246, 248, 0.5)' }}
                    orientation="vertical"
                    flexItem
                  />
                }
                alignItems="center"
                justifyContent="flex-end"
                spacing={1}
              >
                <BotVolumn
                  volume={volume}
                  handleVolumeAudio={handleVolumeAudio}
                  hoverVolumeBot={hoverVolumeBot}
                  changeHoverVolumeBot={changeHoverVolumeBot}
                  volumeStatus={volumeStatus}
                  handleVolumeStatus={handleVolumeStatus}
                />
                <IconButton
                  onClick={() => handleDrawerBotPlayList()}
                  sx={{ '&:hover': { backgroundColor: 'rgba(244,246,248,0.02)' } }}
                  color="primary"
                >
                  <QueueMusic onClick={() => handleDrawerBotPlayList()} />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}

export default SideBarBot;
