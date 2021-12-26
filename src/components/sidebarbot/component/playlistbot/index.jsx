import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BotAudioList from './components/list';
// import PropTypes from 'prop-types';

// PlayListBot.propTypes = {

// };
const drawerWidth = 330;
function PlayListBot({
  drawerBotPL,
  handleDrawerBotPlayListClose,
  audios,
  add3Dots,
  audioIndex,
  isPlay,
  onClickChangeMusic,
  hanldBotStatusList,
  active,
}) {
  return (
    <Box>
      <Drawer
        BackdropProps={{ style: { opacity: 0 } }}
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor: 'rgb(24, 34, 45)',
            boxSizing: 'border-box',
          },
        }}
        anchor="right"
        open={drawerBotPL}
        onClose={() => handleDrawerBotPlayListClose(false)}
      >
        <BotAudioList
          audios={audios}
          add3Dots={add3Dots}
          audioIndex={audioIndex}
          isPlay={isPlay}
          onClickChangeMusic={onClickChangeMusic}
          hanldBotStatusList={hanldBotStatusList}
          active={active}
        />
      </Drawer>
    </Box>
  );
}

export default PlayListBot;
