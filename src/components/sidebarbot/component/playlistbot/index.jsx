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
  active: PropTypes.bool,
  playlist: PropTypes.array,
  formatView: PropTypes.func,
  songId: PropTypes.string,
  handlePopperPLMoreBotOpen: PropTypes.func,
  handlePopperPLMoreBotClose: PropTypes.func,
  openPLMoreBot: PropTypes.bool,
  anchorElPLMoreBot: PropTypes.any,
};
const drawerWidth = 320;
function PlayListBot({
  drawerBotPL,
  handleDrawerBotPlayListClose,
  audios,
  audioIndex,
  isPlay,
  onClickChangeMusic,
  active,
  darkMode,
  playlist,
  formatView,
  songId,
  handlePopperPLMoreBotOpen,
  handlePopperPLMoreBotClose,
  openPLMoreBot,
  anchorElPLMoreBot,
}) {
  return (
    <Box>
      <Drawer
        BackdropProps={{ style: { opacity: 0 } }}
        sx={{
          width: { xs: drawerWidth, sm: drawerWidth, md: drawerWidth, lg: drawerWidth },

          '& .MuiDrawer-paper': {
            width: { xs: drawerWidth, sm: drawerWidth, md: drawerWidth, lg: drawerWidth },
            bgcolor: darkMode ? 'rgb(24, 34, 45)' : '#fff',
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
          active={active}
          playlist={playlist}
          formatView={formatView}
          darkMode={darkMode}
          songId={songId}
          handlePopperPLMoreBotOpen={handlePopperPLMoreBotOpen}
          handlePopperPLMoreBotClose={handlePopperPLMoreBotClose}
          openPLMoreBot={openPLMoreBot}
          anchorElPLMoreBot={anchorElPLMoreBot}
        />
      </Drawer>
    </Box>
  );
}

export default PlayListBot;
