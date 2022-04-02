import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { LinearProgress } from '@mui/material';
import authApi from '../../../../api/authApi';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../../redux/authSlide';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/SignUpFrom';

SignUpPage.propTypes = {
  darkMode: PropTypes.bool,
};

const inputPropStyle = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  width: '100%',
};
const option = [
  { value: 0, gender: 'Nam' },
  { value: 1, gender: 'Nữ' },
];
function SignUpPage(props) {
  const navigate = useNavigate();
  const { darkMode } = props;
  const dispath = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
  const sxInputRadio = {
    color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
  };
  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFormSubmit = (value) => {
    setIsLoading(true);
    console.log(value);
    (async () => {
      try {
       
        const { data } = await authApi.signUpUser({
          account_name: value.accountNameInput,
          username: value.usernameInput,
          password: value.passwordInput,
          email: value.emailInput,
          phone: value.phoneInput,
          gender: value.genderRadio,
        });

        if (data) {
          dispath(
            loginUser({ loginInput: value.usernameInput, passwordInput: value.passwordInput })
          );
          navigate('/');
        }
      } catch (error) {
        setIsLoading(false);
        console.log('failed to sign up user');
        setErrorMessage(error.response.data.message);
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
        {isLoading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress color="success" />
          </Box>
        )}
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
            <SignUpForm
              inputPropStyle={inputPropStyle}
              darkMode={darkMode}
              sxInput={sxInput}
              showConfirmPassword={showConfirmPassword}
              showPassword={showPassword}
              errorMessage={errorMessage}
              handleClickShowPassword={handleClickShowPassword}
              handleClickShowConfirmPassword={handleClickShowConfirmPassword}
              sxInputRadio={sxInputRadio}
              handleFormSubmit={handleFormSubmit}
              option={option}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUpPage;
