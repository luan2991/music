import { QueueMusic } from '@mui/icons-material';
import { Divider, Drawer, IconButton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BotAudioDisk from './component/audiobotdisk';
import BotAudioPlay from './component/botaudioplay';
import BotAudioSlider from './component/botslider';
import BotVolumn from './component/botvolumn';

import PropTypes from 'prop-types';

SideBarBot.propTypes = {
  isPlay: PropTypes.bool.isRequired,
  titleAudio: PropTypes.string,
  artistAudio: PropTypes.array,
  formatDuration: PropTypes.func.isRequired,
  duration: PropTypes.number,
  currentTime: PropTypes.number,
  handleTimeSliderChange: PropTypes.func.isRequired,
  handlePausePlayClick: PropTypes.func.isRequired,
  handlePrevNextClick: PropTypes.func.isRequired,
  repeat: PropTypes.number,
  onRepeat: PropTypes.func.isRequired,
  random: PropTypes.bool,
  onRandom: PropTypes.func.isRequired,
  volume: PropTypes.number,
  handleVolumeAudio: PropTypes.func.isRequired,
  hoverVolumeBot: PropTypes.bool,
  changeHoverVolumeBot: PropTypes.func.isRequired,
  handleDrawerBotPlayList: PropTypes.func.isRequired,
  volumeStatus: PropTypes.bool,
  handleVolumeStatus: PropTypes.func.isRequired,
  darkMode: PropTypes.bool,
  songId: PropTypes.string,
  songImg:PropTypes.string,
};
const drawerHeight = 80;
function SideBarBot({
  isPlay,
  titleAudio,
  artistAudio,
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
  volume,
  handleVolumeAudio,
  hoverVolumeBot,
  changeHoverVolumeBot,
  handleDrawerBotPlayList,
  volumeStatus,
  handleVolumeStatus,
  darkMode,
  songId,
  songImg,
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
            backgroundColor: darkMode ? 'rgb(24, 34, 45)' : '#fff',
          },
        }}
        open
        anchor="bottom"
      >
        <Box padding="0 2rem 0 2rem" display="flex" alignItems="center" height={drawerHeight}>
          {/*Stack side bar bot full*/}
          <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
            <BotAudioDisk
              titleAudio={titleAudio}
              artistAudio={artistAudio}
              darkMode={darkMode}
              songId={songId}
              songImg={songImg}
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
                darkMode={darkMode}
              />
              <BotAudioSlider
                formatDuration={formatDuration}
                duration={duration}
                currentTime={currentTime}
                handleTimeSliderChange={handleTimeSliderChange}
                darkMode={darkMode}
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
                  darkMode={darkMode}
                />
                <IconButton
                  onClick={() => handleDrawerBotPlayList()}
                  sx={{
                    '&:hover': {
                      backgroundColor: darkMode ? 'rgba(244,246,248,0.02)' : 'rgba(0, 0, 0, 0.08)',
                    },
                  }}
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
