import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Stack, Typography } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';

PlayListItemBot.propTypes = {
  item:PropTypes.any,
  isPlay:PropTypes.bool,
  audioIndex:PropTypes.number,
  index:PropTypes.number,
  active:PropTypes.bool,
};

function PlayListItemBot({ item, isPlay, audioIndex, index, active }) {
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
          <Box
            sx={{
              width: '230px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <Typography noWrap sx={{ fontSize: '14px', fontWeight: 500, color: '#f5f5f5' }}>
              {item.title}
            </Typography>
            <Typography noWrap sx={{ fontSize: '11px', fontWeight: 500, color: '#9fa0a1' }}>
              {item.artist}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default PlayListItemBot;
