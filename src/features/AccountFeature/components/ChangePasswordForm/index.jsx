import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../../components/FormField/InputField';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { ChangeCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box } from '@mui/system';
ChangePasswordForm.propTypes = {
  darkMode: PropTypes.bool,
  inputPropStyle: PropTypes.object,
  sxInput: PropTypes.object,
  handleFormSubmit: PropTypes.func,
  showPassword: PropTypes.bool,
  handleClickShowPassword: PropTypes.func,
  showConfirmPassword: PropTypes.bool,
  handleClickShowConfirmPassword: PropTypes.func,
  success: PropTypes.bool,
};

function ChangePasswordForm(props) {
  const {
    inputPropStyle,
    darkMode,
    sxInput,
    handleFormSubmit,
    showPassword,
    handleClickShowPassword,
    showConfirmPassword,
    handleClickShowConfirmPassword,
    success,
  } = props;
  const schema = yup
    .object()
    .shape({
      passwordInput: yup
        .string()
        .required('Mật khẩu còn trống')
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự và lớn nhất là 20 ký tự')
        .max(20, 'Mật khẩu phải có ít nhất 8 ký tự và lớn nhất là 20 ký tự'),
      confirmPaswordInput: yup
        .string()
        .required('Nhập lại mật khẩu còn trống')
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự và lớn nhất là 20 ký tự')
        .max(20, 'Mật khẩu phải có ít nhất 8 ký tự và lớn nhất là 20 ký tự')
        .oneOf([yup.ref('passwordInput')], 'Mật khẩu của bạn không khớp'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      passwordInput: '',
      confirmPaswordInput: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  return (
    <form autoComplete="off">
      <InputField
        name="passwordInput"
        label="Mật Khẩu"
        type={showPassword ? 'text' : 'password'}
        form={form}
        inputLabelProps={{
          style: {
            inputPropStyle,
            color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
          },
        }}
        sx={sxInput}
        endadornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={(event) => handleClickShowPassword(event)}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOff htmlColor={darkMode ? '#fff' : 'black'} />
              ) : (
                <Visibility htmlColor={darkMode ? '#fff' : 'black'} />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
      <InputField
        name="confirmPaswordInput"
        label="Nhập Lại Mật Khẩu"
        form={form}
        type={showConfirmPassword ? 'text' : 'password'}
        inputLabelProps={{
          style: {
            inputPropStyle,
            color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
          },
        }}
        sx={sxInput}
        endadornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={(event) => handleClickShowConfirmPassword(event)}
              edge="end"
            >
              {showConfirmPassword ? (
                <VisibilityOff htmlColor={darkMode ? '#fff' : 'black'} />
              ) : (
                <Visibility htmlColor={darkMode ? '#fff' : 'black'} />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          onKeyPress={(e) => {
            e.key === 'Enter' && e.preventDefault();
          }}
          onClick={form.handleSubmit(handleFormSubmit)}
          type="button"
          variant="contained"
          sx={{
            '&.Mui-disabled': {
              color: 'rgba(0, 0, 0, 0.6)',
              boxShadow: 'none',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            },
          }}
          disabled={success ? true : false}
          startIcon={<ChangeCircle htmlColor={darkMode ? 'rgba(244,246,248,0.88)' : '#fff'} />}
        >
          Thay đổi mật khẩu
        </Button>
      </Box>
    </form>
  );
}

export default ChangePasswordForm;
