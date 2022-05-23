import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import {
  ClickAwayListener,
  Fade,
  IconButton,
  Paper,
  Popper,
  Button,
  LinearProgress,
  Typography,
  Stack,
  Divider,
} from '@mui/material';
import { AccountCircle, SupervisedUserCircle } from '@mui/icons-material';
import InputField from '../../FormField/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import AppRegistration from '@mui/icons-material/AppRegistration';
import { Link } from 'react-router-dom';

LoginHeader.propTypes = {
  onSubmit: PropTypes.func,
  openLogin: PropTypes.bool,
  anchorElLogin: PropTypes.any,
  handleCloseLoginPopper: PropTypes.func,
  darkMode: PropTypes.bool,
  handleOpenLoginPopper: PropTypes.func,
  isLoading: PropTypes.bool,
  user: PropTypes.any,
  errorMessage: PropTypes.string,
  handleNavigateSignUp: PropTypes.func,
  handleLogout: PropTypes.func,
};

function LoginHeader(props) {
  const {
    onSubmit,
    openLogin,
    anchorElLogin,
    handleCloseLoginPopper,
    darkMode,
    handleOpenLoginPopper,
    isLoading,
    user,
    errorMessage,
    handleNavigateSignUp,
    handleLogout,
  } = props;

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
  const schema = yup
    .object()
    .shape({
      loginInput: yup.string().required('Tài khoản còn trống'),
      passwordInput: yup
        .string()
        .required('Mật khẩu còn trống')
        .min(5, 'Mật khẩu phải có ít nhất 5 ký tự và lớn nhất là 20 ký tự')
        .max(20, 'Mật khẩu phải có ít nhất 8 ký tự và lớn nhất là 20 ký tự'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      loginInput: '',
      passwordInput: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = (value) => {
    if (onSubmit) {
      onSubmit(value);
      form.reset();
    }
  };
  return (
    <Box>
      <Popper
        open={user === '' ? openLogin : false}
        anchorEl={anchorElLogin}
        placement="bottom-end"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleCloseLoginPopper}>
            <Fade {...TransitionProps} timeout={350}>
              <Paper
                sx={{
                  margin: 0,
                  zIndex: 1230,
                  width: '16em',
                  minHeigh: '10em',
                  borderRadius: '6px',
                  color: darkMode ? 'rgba(244,246,248,0.5)' : '#353535',
                  backgroundColor: darkMode ? 'rgba(24,1,45,1)' : '#f8d591',

                  '&:before': {
                    position: 'absolute',
                    width: '8px',
                    height: '8px',
                    background: 'inherit',
                    visibility: 'visible',
                    content: '""',
                    top: '1%',
                    left: '93%',
                    transform: 'rotate(45deg) translate(-87%,0%)',
                  },
                }}
              >
                {isLoading && (
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress color="success" />
                  </Box>
                )}
                <Box sx={{ padding: '0.5em' }}>
                  <form autoComplete="off">
                    <InputField
                      name="loginInput"
                      label="Tài khoản"
                      form={form}
                      inputLabelProps={{
                        style: {
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          width: '100%',
                          color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
                        },
                      }}
                      sx={sxInput}
                    />

                    <InputField
                      name="passwordInput"
                      label="Mật khẩu"
                      type="password"
                      form={form}
                      inputLabelProps={{
                        style: {
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          width: '100%',
                          color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
                        },
                      }}
                      sx={sxInput}
                    />
                    <Link
                      onClick={handleCloseLoginPopper}
                      to="/forget-password"
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
                          '&:hover': {
                            color: darkMode ? '#2DAAED' : '#353535',
                          },
                        }}
                      >
                        Quên mật khẩu?
                      </Typography>
                    </Link>
                    {errorMessage === 'Wrong password' && (
                      <Typography sx={{ color: '#d32f2f', fontSize: '0.75rem' }}>
                        Sai mật khẩu
                      </Typography>
                    )}
                    {errorMessage === 'Wrong username' && (
                      <Typography sx={{ color: '#d32f2f', fontSize: '0.75rem' }}>
                        Sai tài khoản
                      </Typography>
                    )}
                    <Box
                      sx={{
                        paddingTop: '0.5em',
                        paddingLeft: '3em',
                        paddingRight: '3em',
                      }}
                    >
                      <Button
                        sx={{
                          width: '100%',
                        }}
                        color="primary"
                        variant="contained"
                        startIcon={<Login />}
                        onClick={form.handleSubmit(handleFormSubmit)}
                      >
                        Đăng Nhập
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
      {user === '' && (
        <Stack
          direction="row"
          spacing={1}
          divider={
            <Divider
              sx={{ backgroundColor: 'rgba(244,246,248,0.88)', height: '2rem' }}
              orientation="vertical"
            />
          }
          justifyContent="center"
          alignItems="center"
        >
          <IconButton onClick={handleOpenLoginPopper}>
            <Login htmlColor="rgba(244,246,248,0.88)" fontSize="medium" />
          </IconButton>
          <IconButton onClick={handleNavigateSignUp}>
            <AppRegistration htmlColor="rgba(244,246,248,0.88)" fontSize="medium" />
          </IconButton>
        </Stack>
      )}
      {user !== '' && (
        <Box>
          {user.admin === true && (
            <Link to={'/admin'} style={{ textDecoration: 'none' }}>
              <IconButton>
                <SupervisedUserCircle
                  sx={{ fontSize: '40px' }}
                  htmlColor={darkMode ? '#fff' : 'rgba(28,30,32,0.5)'}
                  titleAccess="Admin"
                />
              </IconButton>
            </Link>
          )}
          <Link to={'/account'} style={{ textDecoration: 'none' }}>
            <IconButton>
              <AccountCircle
                sx={{ fontSize: '40px' }}
                htmlColor={darkMode ? '#fff' : 'rgba(28,30,32,0.5)'}
                titleAccess="Tài Khoản"
              />
            </IconButton>
          </Link>
          <IconButton onClick={handleLogout}>
            <Logout
              sx={{ fontSize: '40px' }}
              htmlColor={darkMode ? '#fff' : 'rgba(28,30,32,0.5)'}
              titleAccess="Đăng Xuất"
            />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}

export default LoginHeader;
