import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Slider, Stack, Typography } from '@mui/material';

// MusicSlider.propTypes = {

// };
const style = {
  typographyroot: {
    '&.MuiTypography-root': {
      fontSize: '13px',
    },
  },
};

function MusicSlider({ formatDuration, duration, currentTime, handleTimeSliderChange }) {
  return (
    <Box
      sx={{ backgroundColor: 'rgb(24, 34, 45)' }}
      color="rgba(244,246,248,0.5)"
      paddingTop="10px"
    >
      <Box width="272px" margin="auto">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Stack
            direction="row"
            width="272px"
            sx={{ mb: 1, px: 1 }}
            alignItems="center"
            spacing={1}
          >
            <Typography sx={style.typographyroot}>{formatDuration(currentTime)}</Typography>
            <Slider
              max={duration}
              value={currentTime}
              min={0}
              step={1}
              onChange={(_, value) => handleTimeSliderChange(value)}
              aria-label="Default"
              size="small"
            />
            <Typography sx={style.typographyroot}>{formatDuration(duration)}</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicSlider;
