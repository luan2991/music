import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { IconButton, Slider, Stack } from '@mui/material';
import { VolumeDownOutlined, VolumeMuteOutlined, VolumeUpOutlined } from '@mui/icons-material';

// BotVolumn.propTypes = {

// };

function BotVolumn({
  volume,
  handleVolumeAudio,
  hoverVolumnBot,
  changeHoverVolumnBot,
  
}) {
  return (
    <Box>
      <Stack spacing={1} direction="row" alignItems="center">
        <IconButton
          onMouseEnter={() => changeHoverVolumnBot(true)}
          onMouseLeave={() => changeHoverVolumnBot(false)}
        >
          {volume >= 0.6 && <VolumeUpOutlined htmlColor="rgba(244,246,248,0.5)" />}
          {volume > 0.1 && volume < 0.6 && <VolumeDownOutlined htmlColor="rgba(244,246,248,0.5)" />}
          {volume <= 0.1 && <VolumeMuteOutlined htmlColor="rgba(244,246,248,0.5)" />}
        </IconButton>
        <Slider
          onMouseEnter={() => changeHoverVolumnBot(true)}
          onMouseLeave={() => changeHoverVolumnBot(false)}
          sx={{
            width: '80px',
            '&.MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover': {
              boxShadow: '0px 0px 0px 4px rgba(25, 118, 210, 0.16)',
            },
          }}
          size={hoverVolumnBot === true ? 'medium' : 'small'}
          max={100}
          min={0}
          aria-label="Volumn"
          orientation="horizontal"
          value={volume * 100}
          onChange={(_, value) => handleVolumeAudio(value)}
        />
        <Box></Box>
      </Stack>
    </Box>
  );
}

export default BotVolumn;
