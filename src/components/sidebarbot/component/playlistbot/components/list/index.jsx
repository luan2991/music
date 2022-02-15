import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PlayListItemBot from '../item';
import PropTypes from 'prop-types';

BotAudioList.propTypes = {
  audios:PropTypes.any,
  audioIndex:PropTypes.number,
  onClickChangeMusic:PropTypes.func.isRequired,
  isPlay:PropTypes.bool,
  hanldBotStatusList:PropTypes.func.isRequired,
  active:PropTypes.bool,
};

function BotAudioList({
  audios,
  audioIndex,
  onClickChangeMusic,
  isPlay,
  hanldBotStatusList,
  active,
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
              {audios.map((item, index) => (
                <Box
                  onMouseEnter={() => hanldBotStatusList(index)}
                  onMouseLeave={() => hanldBotStatusList(null)}
                  width="100%"
                  sx={{
                    bgcolor: `${audioIndex === index ? '#7200a1' : ''}`,
                    borderRadius: '6px',
                    '&:hover': {
                      bgcolor: `${audioIndex === index ? '#7200a1' : 'rgba(85,87,90,255)'}`,
                    },
                  }}
                  key={index}
                  onClick={() => onClickChangeMusic(index)}
                >
                  <PlayListItemBot
                    active={active}
                    audioIndex={audioIndex}
                    isPlay={isPlay}
                    index={index}
                    item={item}
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
