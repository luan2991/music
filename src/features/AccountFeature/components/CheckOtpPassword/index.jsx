import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import CountOtpTime from '../CountOtpTime';
import PasswordOtpForm from '../PasswordOtpForm';

CheckOtpPassword.propTypes = {
  exp: PropTypes.number,
  darkMode: PropTypes.bool,
  expiredOtp: PropTypes.bool,
  inputPropStyle: PropTypes.object,
  sxInput: PropTypes.object,
  handleCheckOtpFormSubmit: PropTypes.func,
  email: PropTypes.string,
  handleSendMailFormSubmit: PropTypes.func,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

function CheckOtpPassword(props) {
  const {
    darkMode,
    expiredOtp,
    inputPropStyle,
    sxInput,
    handleCheckOtpFormSubmit,
    handleSendMailFormSubmit,
    email,
    minutes,
    seconds,
  } = props;
  return (
    <Stack
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        mt: '1rem',
        width: '100%',
      }}
    >
      <Typography sx={{ fontSize: '1.5rem', fontWeight: 500, color: darkMode ? '#fff' : '' }}>
        Thời gian mã otp còn hiêu lực:
      </Typography>
      <CountOtpTime minutes={minutes} seconds={seconds} darkMode={darkMode} />
      <PasswordOtpForm
        expiredOtp={expiredOtp}
        darkMode={darkMode}
        inputPropStyle={inputPropStyle}
        sxInput={sxInput}
        handleFormSubmit={handleCheckOtpFormSubmit}
        email={email}
        handleSendMailFormSubmit={handleSendMailFormSubmit}
        minutes={minutes}
        seconds={seconds}
      />
    </Stack>
  );
}

export default CheckOtpPassword;
