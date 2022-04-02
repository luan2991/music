import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../../components/FormField/InputField';
import { Send } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import { Box } from '@mui/system';
import useCountdown from '../../../../custom_hook/countdown';
PasswordOtpForm.propTypes = {
  darkMode: PropTypes.bool,
  inputPropStyle: PropTypes.object,
  sxInput: PropTypes.object,
  handleOtpFormSubmit: PropTypes.func,
};

function PasswordOtpForm(props) {
  const date = new Date();
  const time = parseInt(props.timeOtp.exp - date.getTime() / 1000);
  const [minutes, seconds] = useCountdown(time);
  console.log(minutes + 'm : ' + seconds + 's');

  const { inputPropStyle, darkMode, sxInput, handleFormSubmit } = props;
  const noSxInput = { ...sxInput, width: '50%',paddingLeft:'2rem' };
  const schema = yup
    .object()
    .shape({
      otpInputNo1: yup
        .string()
        .matches(/^[0-9]+$/, 'Otp phải là số')
        .max(1, 'Bạn chỉ có thể nhập 1 số')
        .required('Bạn cần nhập sô thứ 1 Otp'),
      otpInputNo2: yup
        .string()
        .matches(/^[0-9]+$/, 'Otp phải là số')
        .max(1, 'Bạn chỉ có thể nhập 1 số')
        .required('Bạn cần nhập sô thứ 2 Otp'),
      otpInputNo3: yup
        .string()
        .matches(/^[0-9]+$/, 'Otp phải là số')
        .max(1, 'Bạn chỉ có thể nhập 1 số')
        .required('Bạn cần nhập sô thứ 3 Otp'),
      otpInputNo4: yup
        .string()
        .matches(/^[0-9]+$/, 'Otp phải là số')
        .max(1, 'Bạn chỉ có thể nhập 1 số')
        .required('Bạn cần nhập sô thứ 4 Otp'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      otpInputNo1: '',
      otpInputNo2: '',
      otpInputNo3: '',
      otpInputNo4: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <form autoComplete="off">
      <Stack direction={'row'} justifyContent="center" alignItems={'flex-start'} spacing={0}>
        <InputField
          name="otpInputNo1"
          label=""
          form={form}
          type="number"
          inputLabelProps={{
            style: {
              inputPropStyle,
              color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
            },
          }}
          sx={noSxInput}
        />
        <InputField
          name="otpInputNo2"
          label=""
          form={form}
          type="number"
          inputLabelProps={{
            style: {
              inputPropStyle,
              color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
            },
          }}
          sx={noSxInput}
        />
        <InputField
          name="otpInputNo3"
          label=""
          form={form}
          type="number"
          inputLabelProps={{
            style: {
              inputPropStyle,
              color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
            },
          }}
          sx={noSxInput}
        />
        <InputField
          name="otpInputNo4"
          label=""
          form={form}
          type="number"
          inputLabelProps={{
            style: {
              inputPropStyle,
              color: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
            },
          }}
          sx={noSxInput}
        />
      </Stack>

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
          type="button"
          variant="contained"
          startIcon={<Send htmlColor={darkMode ? 'rgba(244,246,248,0.88)' : '#fff'} />}
        >
          Xác nhận OTP
        </Button>
      </Box>
    </form>
  );
}

export default PasswordOtpForm;
