import React from 'react';
import PropTypes from 'prop-types';
import { Step, StepLabel, Stepper } from '@mui/material';
StepperChangePassword.propTypes = {
  activeStep: PropTypes.number,
  steps: PropTypes.array,
  darkMode: PropTypes.bool,
  completed: PropTypes.object,
};

function StepperChangePassword(props) {
  const { activeStep, steps, darkMode, completed } = props;
  return (
    <Stepper sx={{ mt: '1em', mb: '1em' }} activeStep={activeStep}>
      {steps.map((label, index) => {
        return (
          <Step
            completed={completed[index]}
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
  );
}

export default StepperChangePassword;
