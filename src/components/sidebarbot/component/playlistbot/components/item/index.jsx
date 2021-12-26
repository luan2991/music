import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Stack, Typography } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import { act } from 'react-dom/test-utils';

// PlayListItemBot.propTypes = {

// };

function PlayListItemBot({ item, add3Dots, isPlay, audioIndex, index, active }) {
  return (
    <Box width="100%" padding="8px">
      <Box>
        <Stack direction="row" spacing={0.5} alignItem="center">
          <Box bgcolor="yellow" width={40} height={40}>
            {audioIndex === index && isPlay && (
              <PlayArrow
                sx={{
                  position: 'relative',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                }}
                htmlColor="#FFFFFF"
              />
            )}
            {audioIndex === index && !isPlay && (
              <Pause
                sx={{
                  position: 'relative',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                }}
                htmlColor="#FFFFFF"
              />
            )}
            {audioIndex !== active && active === index && (
              <PlayArrow
                sx={{
                  position: 'relative',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                }}
                htmlColor="#FFFFFF"
              />
            )}
          </Box>
          <Box>
            <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#f5f5f5' }}>
              {add3Dots(item.title, 35)}
            </Typography>
            <Typography sx={{ fontSize: '11px', fontWeight: 500, color: '#9fa0a1' }}>
              {add3Dots(item.artist, 35)}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default PlayListItemBot;
