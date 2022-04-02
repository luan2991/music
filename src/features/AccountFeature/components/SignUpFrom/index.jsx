import React from 'react';
import PropTypes from 'prop-types';
import RadioField from '../../../../components/FormField/RadioField';
import { Box } from '@mui/system';
import { Button, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import { Add, Visibility, VisibilityOff } from '@mui/icons-material';
import InputField from '../../../../components/FormField/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

SignUpForm.propTypes = {
  inputPropStyle: PropTypes.object,
  darkMode: PropTypes.bool,
  sxInput: PropTypes.object,
  showConfirmPassword: PropTypes.bool,
  showPassword: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleClickShowConfirmPassword: PropTypes.func,
  handleClickShowPassword: PropTypes.func,
  sxInputRadio: PropTypes.object,
  option: PropTypes.array,
};

function SignUpForm(props) {
  const {
    inputPropStyle,
    darkMode,
    sxInput,
    showConfirmPassword,
    showPassword,
    errorMessage,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
    sxInputRadio,
    handleFormSubmit,
    option,
  } = props;
  const schema = yup
    .object()
    .shape({
      accountNameInput: yup.string().required('Tài khoản còn trống'),
      usernameInput: yup.string().required(' Tên tài khoản còn trống'),
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
      emailInput: yup
        .string()
        .email('Email không đúng, mời nhập lại')
        .max(255)
        .required('Email cần được thêm vào'),
      phoneInput: yup
        .string()
        .required('SĐT không được để trống')
        .matches(/^[0-9]+$/, 'Số điện thoại phải là số')
        .min(10, 'SĐT phải có chính xác 10 số')
        .max(10, 'SĐT phải có chính xác 10 số'),
      genderRadio: yup.string().required('Bạn cần phải chọn giới tính'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      accountNameInput: '',
      usernameInput: '',
      confirmPaswordInput: '',
      passwordInput: '',
      emailInput: '',
      repeatPaswordInput: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  return (
    <form autoComplete="off">
      <InputField
        name="accountNameInput"
        label="Họ và Tên"
        form={form}
        inputLabelProps={{
          style: {
            inputPropStyle,
            color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
          },
        }}
        sx={sxInput}
      />
      <InputField
        name="usernameInput"
        label="Tên Tài Khoản"
        form={form}
        inputLabelProps={{
          style: {
            inputPropStyle,
            color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
          },
        }}
        sx={sxInput}
      />
      {errorMessage === 'Account exist' && <FormHelperText>Tài khoản đã tồn tại</FormHelperText>}
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
      <InputField
        name="emailInput"
        label="Email"
        form={form}
        type="email"
        inputLabelProps={{
          style: {
            inputPropStyle,
            color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
          },
        }}
        sx={sxInput}
      />
      <InputField
        name="phoneInput"
        label="Số điện thoại"
        form={form}
        type="tel"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        inputLabelProps={{
          style: {
            inputPropStyle,
            color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
          },
        }}
        sx={sxInput}
      />
      <RadioField
        name="genderRadio"
        sx={sxInputRadio}
        label="Giới tính"
        options={option}
        form={form}
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
          onClick={form.handleSubmit(handleFormSubmit)}
          variant="contained"
          startIcon={<Add htmlColor={darkMode ? 'rgba(244,246,248,0.88)' : '#fff'} />}
        >
          Đăng Ký
        </Button>
      </Box>
    </form>
  );
}

export default SignUpForm;
