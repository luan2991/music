import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Slider, Stack, Typography } from '@mui/material';

// MusicSlider.propTypes = {

// };
const style={
  typographyroot:{
    '&.MuiTypography-root': {
      fontSize: '13px',
    },
  },
};

function MusicSlider(props) {
  return (
    <Box sx={{backgroundColor:'rgb(24, 34, 45)'}} color='rgba(244,246,248,0.5)' paddingTop="10px">
      <Box width="272px" margin="auto">
        <Box display="flex" justifyContent="space-between" alignItems='center'>
          <Stack
            direction="row"
            width="272px"
            sx={{ mb: 1, px: 1 }}
            alignItems="center"
            spacing={1}
          >
            <Typography
              sx={style.typographyroot}
            >
              00:00
            </Typography>
            <Slider
              //   max={100}
              //   min={0}
              aria-label="Default"
              size="small"
            />
            <Typography
              sx={style.typographyroot}
            >
              00:00
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicSlider;
