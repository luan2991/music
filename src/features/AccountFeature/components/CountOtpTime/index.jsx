import React from 'react';
import PropTypes from 'prop-types';

import {  Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

CountOtpTime.propTypes = {
  exp: PropTypes.number,
  darkMode: PropTypes.bool,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

function CountOtpTime(props) {
  const { minutes, seconds, darkMode } = props;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Stack
        direction={'row'}
        sx={{ width: '100%' }}
        justifyContent={'center'}
        alignItems={'flex-start'}
      >
        <Typography sx={{ fontSize: '2rem', fontWeight: '500', color: darkMode ? '#fff' : '' }}>
          {('0' + minutes).slice(-2)}
        </Typography>
        <Typography sx={{ fontSize: '2rem', fontWeight: '500', color: darkMode ? '#fff' : '' }}>
          :
        </Typography>
        <Typography sx={{ fontSize: '2rem', fontWeight: '500', color: darkMode ? '#fff' : '' }}>
          {('0' + seconds).slice(-2)}
        </Typography>
      </Stack>
    </Box>
  );
}

export default CountOtpTime;
