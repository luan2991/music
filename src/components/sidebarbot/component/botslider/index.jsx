import { Slider, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import PropTypes from 'prop-types';

// BotAudioSlider.propTypes = {

// };
const style = {
  typographyroot: {
    '&.MuiTypography-root': {
      fontSize: '0.8em',
    },
  },
};
function BotAudioSlider({ formatDuration, duration, currentTime, handleTimeSliderChange, darkMode }) {
  return (
    <Box color={ darkMode ? 'rgba(244,246,248,0.88)' : 'rgba(28,30,32,0.88)'}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Stack
          direction="row"
          sx={{
            mb: 1,
            px: 1,
            width: { xs: 200, sm: 240, md: 300, lg: 300 },
            transition: 'width 0.2s',
          }}
          alignItems="center"
          spacing={1}
        >
          <Typography
            sx={style.typographyroot}
          >
            {formatDuration(currentTime)}
          </Typography>
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
  );
}

export default BotAudioSlider;
