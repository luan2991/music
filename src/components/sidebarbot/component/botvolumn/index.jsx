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
  hoverVolumeBot,
  changeHoverVolumeBot,
  volumeStatus,
  handleVolumeStatus,
}) {
  return (
    <Box>
      <Stack
        onMouseEnter={() => changeHoverVolumeBot(true)}
        onMouseLeave={() => changeHoverVolumeBot(false)}
        spacing={1}
        direction="row"
        alignItems="center"
      >
        <IconButton onClick={handleVolumeStatus}>
          {volume >= 0.6 && volumeStatus === false && (
            <VolumeUpOutlined sx={{ fontSize: '24px' }} htmlColor="rgba(244,246,248,0.5)" />
          )}
          {volume > 0.0 && volumeStatus === false && volume < 0.6 && (
            <VolumeDownOutlined sx={{ fontSize: '24px' }} htmlColor="rgba(244,246,248,0.5)" />
          )}
          {(volume === 0.0 || volumeStatus === true) && (
            <VolumeMuteOutlined sx={{ fontSize: '24px' }} htmlColor="rgba(244,246,248,0.5)" />
          )}
        </IconButton>
        <Slider
        
          sx={{
            width: '80px',
            '&.MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover': {
              boxShadow: '0px 0px 0px 4px rgba(25, 118, 210, 0.16)',
            },
          }}
          size={hoverVolumeBot === true ? 'medium' : 'small'}
          max={100}
          min={0}
          aria-label="Volumn"
          orientation="horizontal"
          value={volumeStatus === true ? 0 : volume * 100}
          onChange={(_, value) => handleVolumeAudio(value)}
        />
        <Box></Box>
      </Stack>
    </Box>
  );
}

export default BotVolumn;
