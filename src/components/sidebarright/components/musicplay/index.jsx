import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  RepeatOneRounded,
  RepeatRounded,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import PropTypes from 'prop-types';

// MusicPlay.propTypes = {

// };
const iconColor = 'rgba(244,246,248,0.5)';

function MusicPlay({ pause, onPause, repeat, onRepeat, random, onRandom }) {
  return (
    <Box
      bgcolor="rgba(0, 0, 0, 0.87)"
      paddingBottom={2}
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
            <IconButton>
              {random === false && <Shuffle onClick={() => onRandom(true)} htmlColor={iconColor} />}
              {random === true && <Shuffle onClick={() => onRandom(false)} color='primary'/>}
            </IconButton>
            <IconButton>
              <SkipPrevious htmlColor={iconColor} />
            </IconButton>
            <IconButton>
              {pause === false && (
                <PlayCircleOutlined onClick={() => onPause(true)} color='primary' />
              )}
              {pause === true && (
                <PauseCircleOutlined onClick={() => onPause(false)} htmlColor={iconColor} />
              )}
            </IconButton>
            <IconButton>
              <SkipNext htmlColor={iconColor} />
            </IconButton>
            <IconButton>
              {repeat === 0 && <RepeatRounded onClick={() => onRepeat(1)} htmlColor={iconColor} />}
              {repeat === 1 && <RepeatRounded onClick={() => onRepeat(2)} color="primary" />}
              {repeat === 2 && <RepeatOneRounded onClick={() => onRepeat(0)} color="primary" />}
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicPlay;
