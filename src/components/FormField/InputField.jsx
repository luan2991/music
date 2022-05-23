import React from 'react';
import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';
import { Box, TextField } from '@mui/material';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  inputLabelProps: PropTypes.object,
  inputProps: PropTypes.object,
  sx: PropTypes.any,
  endadornment: PropTypes.any,
};
InputField.defaultProps = {
  label: '',
  defaultValues: '',
  disabled: false,
  type: 'text',
  size: 'small',
  inputLabelProps: {},
  sx: {},
  inputProps: {},
  endadornment: [],
};

function InputField(props) {
  const { name, type, label, form, disabled, size, inputLabelProps, sx, inputProps, endadornment } =
    props;
  const { errors } = form.formState;
  const errorsMessage = errors[name]?.message;
  const hasErrors = !!errorsMessage;

  return (
    <Box mt={1} mb={2}>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            disabled={disabled}
            fullWidth
            label={label}
            value={value}
            variant="outlined"
            error={!!hasErrors}
            helperText={errorsMessage}
            type={type}
            size={size}
            inputProps={inputProps}
            InputProps={{ endAdornment: endadornment }}
            InputLabelProps={inputLabelProps}
            sx={sx}
          />
        )}
      />
    </Box>
  );
}

export default InputField;
