import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PlayListItemBot from '../item';
import PropTypes from 'prop-types';

BotAudioList.propTypes = {
  audios: PropTypes.any,
  audioIndex: PropTypes.number,
  onClickChangeMusic: PropTypes.func.isRequired,
  isPlay: PropTypes.bool,
  
  active: PropTypes.bool,
  playlist: PropTypes.array,
  formatView: PropTypes.func,
  songId: PropTypes.string,
  handlePopperPLMoreBotClose: PropTypes.func,
  openPLMoreBot: PropTypes.bool,
  handlePopperPLMoreBotOpen:PropTypes.func,
  anchorElPLMoreBot: PropTypes.any,
};

function BotAudioList({
  darkMode,
  onClickChangeMusic,
  isPlay,
  playlist,
  formatView,
  songId,
  handlePopperPLMoreBotClose,
  openPLMoreBot,
  anchorElPLMoreBot,
  handlePopperPLMoreBotOpen,
}) {
  return (
    <Box>
      <Box width={320} margin="auto">
        <Stack
          paddingTop={2}
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Box width={160}>
            <Box
              bgcolor="#989898"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={36}
              borderRadius={10}
            >
              <Typography variant="h6" sx={{ color: '#FFFFFF', fontSize: '0.9rem' }}>
                Danh sách phát
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden scroll',
              width: '100%',
              height: 'calc(100vh - 9.5em)',
              '&:-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <Stack
              padding="8px"
              direction="column"
              spacing={0}
              justifyContent="center"
              alignItems="flex-start"
            >
              {playlist.map((item, index) => (
                <Box width="100%" key={index}>
                  <PlayListItemBot
                    darkMode={darkMode}
                    index={index}
                    item={item}
                    formatView={formatView}
                    onClickChangeMusic={onClickChangeMusic}
                    songId={songId}
                    handlePopperPLMoreBotOpen={handlePopperPLMoreBotOpen}
                    handlePopperPLMoreBotClose={handlePopperPLMoreBotClose}
                    openPLMoreBot={openPLMoreBot}
                    anchorElPLMoreBot={anchorElPLMoreBot}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default BotAudioList;
