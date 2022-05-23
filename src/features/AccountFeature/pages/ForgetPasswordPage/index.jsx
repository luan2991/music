import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import ForgetPasswordFrom from '../../components/ForgetPasswordForm';
import { Alert, Stack, Typography } from '@mui/material';
import authApi from '../../../../api/authApi';
import StepperChangePassword from '../../components/StepperChangePassword';
import CheckOtpPassword from '../../components/CheckOtpPassword';
import useCountdown from '../../../../custom_hook/countdown';
import ChangePasswordForm from '../../components/ChangePasswordForm';

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
  const [remainingTime, setRemainingTime] = useState(0);
  const [expiredAt, setExpiredAt] = useState(0);
  const [expiredOtp, setExpiredOtp] = useState(true);
  const [email, setEmail] = useState('');
  const [minutes, seconds] = useCountdown(remainingTime);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [completed, setCompleted] = useState({});

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

  const handleSendMailFormSubmit = (value) => {
    (async () => {
      try {
        localStorage.removeItem('uid');
        const { data } = await authApi.sendEmailPassword({
          emailInput: value.emailInput,
        });
        if (data) {
          if (activeStep !== 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }
          localStorage.setItem('uid', data.uid);
          const date = new Date();
          setExpiredAt(data.exp);
          setRemainingTime(parseInt(data.exp - date.getTime() / 1000));
          setEmail(value.emailInput);
        }
      } catch (error) {
        console.log('failed to get otp user');
      }
    })();
  };

  const handleCheckOtpFormSubmit = (value) => {
    (async () => {
      try {
        const date = new Date();
        if (date.getTime() / 1000 <= expiredAt) {
          const otp = value.otpInputNo1 + value.otpInputNo2 + value.otpInputNo3 + value.otpInputNo4;
          const { data } = await authApi.verifyOtpPassword({
            otp: otp,
            uid: localStorage.getItem('uid'),
          });

          if (data) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setRemainingTime(0);
          }
        } else {
          setExpiredOtp(true);
        }
      } catch (error) {
        console.log('failed to verify otp user');
      }
    })();
  };
  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChangePassword = (value) => {
    (async () => {
      try {
        console.log(value);
        const { data } = await authApi.changePassword({
          uid: localStorage.getItem('uid'),
          passwordInput: value.passwordInput,
        });
        if (data) {
          setSuccess(true);
          const newCompleted = completed;
          newCompleted[activeStep] = true;
          setCompleted(newCompleted);
          localStorage.removeItem('uid');
        }
      } catch (error) {
        console.log('failed to change user password ');
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
              spacing={1}
            >
              <Typography
                variant="caption"
                sx={{ color: darkMode ? 'rgba(244,246,248,0.88)' : 'black', fontSize: '3rem' }}
              >
                Đổi Mật Khẩu
              </Typography>
              <StepperChangePassword
                completed={completed}
                activeStep={activeStep}
                steps={steps}
                darkMode={darkMode}
              />
              {success && (
                <Alert
                  sx={{
                    '&.MuiAlert-root': {
                      background: darkMode ? 'rgb(7, 19, 24)' : 'rgb(46, 125, 50)',
                      color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
                    },
                    '&.MuiAlert-root .MuiAlert-icon': {
                      color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
                    },
                  }}
                  severity="success"
                >
                  Đổi mật khẩu thành công - Bạn có thể đăng nhập tài khoản bằng mật khẩu mới
                </Alert>
              )}
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
              <CheckOtpPassword
                exp={remainingTime}
                inputPropStyle={inputPropStyle}
                sxInput={sxInput}
                darkMode={darkMode}
                expiredOtp={expiredOtp}
                handleCheckOtpFormSubmit={handleCheckOtpFormSubmit}
                handleSendMailFormSubmit={handleSendMailFormSubmit}
                minutes={minutes}
                seconds={seconds}
                email={email}
              />
            )}
            {activeStep === 2 && (
              <ChangePasswordForm
                darkMode={darkMode}
                inputPropStyle={inputPropStyle}
                sxInput={sxInput}
                handleFormSubmit={handleChangePassword}
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                showConfirmPassword={showConfirmPassword}
                handleClickShowConfirmPassword={handleClickShowConfirmPassword}
                success={success}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ForgetPasswordPage;
