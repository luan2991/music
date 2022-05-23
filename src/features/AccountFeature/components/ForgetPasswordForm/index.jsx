import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/FormField/InputField';
import { Box } from '@mui/system';
import { Send } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

ForgetPasswordFrom.propTypes = {
  darkMode: PropTypes.bool,
  inputPropStyle: PropTypes.object,
  sxInput: PropTypes.object,
  handleFormSubmit: PropTypes.func,
};

function ForgetPasswordFrom(props) {
  const { inputPropStyle, darkMode, sxInput, handleFormSubmit } = props;
  const schema = yup
    .object()
    .shape({
      emailInput: yup
        .string()
        .email('Email không đúng, mời nhập lại')
        .max(255)
        .required('Email cần được thêm vào'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      emailInput: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <form autoComplete="off">
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
          startIcon={<Send htmlColor={darkMode ? 'rgba(244,246,248,0.88)' : '#fff'} />}
        >
          Gửi email
        </Button>
      </Box>
    </form>
  );
}

export default ForgetPasswordFrom;
