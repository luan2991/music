import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BotAudioList from './components/list';
import PropTypes from 'prop-types';

PlayListBot.propTypes = {
  drawerBotPL: PropTypes.bool,
  handleDrawerBotPlayListClose: PropTypes.func.isRequired,
  audios: PropTypes.any,
  audioIndex: PropTypes.number,
  isPlay: PropTypes.bool,
  onClickChangeMusic: PropTypes.func.isRequired,
  hanldBotStatusList: PropTypes.func.isRequired,
  active: PropTypes.bool,
};
const drawerWidth = 320;
function PlayListBot({
  drawerBotPL,
  handleDrawerBotPlayListClose,
  audios,
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
          width: { xs: drawerWidth, sm: drawerWidth, md: drawerWidth, lg: 0 },

          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: { xs: drawerWidth, sm: drawerWidth, md: drawerWidth, lg: 0 },
            bgcolor: 'rgb(24, 34, 45)',
            boxSizing: 'border-box',
            transition: 'width 0.8s',
          },
        }}
        anchor="right"
        open={drawerBotPL}
        onClose={() => handleDrawerBotPlayListClose(false)}
      >
        <BotAudioList
          audios={audios}
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
