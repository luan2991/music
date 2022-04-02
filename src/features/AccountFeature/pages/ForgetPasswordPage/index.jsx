import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import ForgetPasswordFrom from '../../ForgetPasswordForm';
import { Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import PasswordOtpForm from '../../components/PasswordOtpForm';
import authApi from '../../../../api/authApi';


ForgetPasswordPage.propTypes = {
  darkMode: PropTypes.bool,
};
const inputPropStyle = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  width: '100%',
};
const steps = ['Nhập email để gửi mã otp', 'Nhập mã otp', 'Tạo mật khẩu mới'];
function ForgetPasswordPage(props) {
  const { darkMode } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [timeOtp, setTimeOtp] = useState({});
  const [email, setEmail] = useState('');

  const sxInput = {
    input: {
      color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
      },
      '&:hover fieldset': {
        borderColor: '#0060DF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0060DF',
      },
    },
  };
  const handleCheckOtpFormSubmit = (value) => {
    console.log(value);
  };

  const handleSendMailFormSubmit = (value) => {
    console.log(value);
    (async () => {
      try {
        const { data } = await authApi.sendEmailPassword({
          emailInput: value.emailInput,
        });
        if (data) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
         
        }
      } catch (error) {
        console.log('failed to get otp user');
      }
    })();
  };
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: darkMode ? 'rgb(24, 35, 45)' : '#fff',
        width: '100%',
      }}
    >
      <Box pt={8} width="100%">
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Box
            sx={{
              width: '80%',

              paddingTop: '2rem',
            }}
          >
            <Stack
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                width: '100%',
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: darkMode ? 'rgba(244,246,248,0.88)' : 'black', fontSize: '3rem' }}
              >
                Đổi Mật Khẩu
              </Typography>
              <Stepper sx={{ mt: '1em', mb: '1em' }} activeStep={activeStep}>
                {steps.map((label, index) => {
                  return (
                    <Step
                      sx={{
                        '& .MuiSvgIcon-root': {
                          backgroundColor: darkMode ? '#003892' : '',
                          borderRadius: '50px',
                        },
                        '& .MuiStepLabel-label': {
                          color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
                        },
                        '& .MuiStepLabel-root .Mui-completed': {
                          color: 'secondary.dark', // circle color (COMPLETED)
                        },
                        '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': {
                          color: 'grey.500', // Just text label (COMPLETED)
                        },
                        '& .MuiStepLabel-root .Mui-active': {
                          color: 'secondary.main', // circle color (ACTIVE)
                        },
                        '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
                          color: 'common.white', // Just text label (ACTIVE)
                        },
                        '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                          fill: 'black', // circle's number (ACTIVE)
                        },
                      }}
                      key={label}
                    >
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Stack>

            {activeStep === 0 && (
              <ForgetPasswordFrom
                darkMode={darkMode}
                inputPropStyle={inputPropStyle}
                sxInput={sxInput}
                handleFormSubmit={handleSendMailFormSubmit}
              />
            )}
            {activeStep === 1 && (
              <PasswordOtpForm
                darkMode={darkMode}
                inputPropStyle={inputPropStyle}
                sxInput={sxInput}
                handleFormSubmit={handleCheckOtpFormSubmit}
                timeOtp={timeOtp}
              />
            )}
            {/* {activeStep === 2 && (
              <ForgetPasswordFrom
                darkMode={darkMode}
                inputPropStyle={inputPropStyle}
                sxInput={sxInput}
                handleFormSubmit={handleSendMailFormSubmit}
              />
            )} */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ForgetPasswordPage;
