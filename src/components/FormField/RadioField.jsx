import React from 'react';
import PropTypes from 'prop-types';

import {
  Radio,
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';

RadioField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  darkMode: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      gender: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  sx: PropTypes.any,
};

RadioField.defaultProps = {
  label: '',
  disabled: false,
 
};

function RadioField(props) {
  const { name, label, form, disabled, options, sx } = props;
  const { errors } = form.formState;

  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    <Box mt={1} mb={2}>
      <FormControl error={hasError} component="fieldset">
        <FormLabel sx={sx}>{label}</FormLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ field: { value, onChange, onBlur } }) => (
            <RadioGroup row aria-label={name} name={name} onChange={onChange} onBlur={onBlur}>
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio sx={{ color: '#1B3976' }} color="primary" />}
                  label={<Typography sx={sx}>{option.gender}</Typography>}
                  disabled={disabled}
                />
              ))}
            </RadioGroup>
          )}
        />
        <FormHelperText>{errorMessage}</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default RadioField;
