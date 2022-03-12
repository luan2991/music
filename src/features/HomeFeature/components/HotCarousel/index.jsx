import React from 'react';
import { Skeleton, Stack } from '@mui/material';

// import PropTypes from 'prop-types';

// HotCarousel.propTypes = {

// };

function HotCarousel(props) {
  return (
    <Stack
      mt={2}
      pl={2}
      pr={2}
      height="300px"
      direction="row"
      spacing={1}
      justifyContent="space-around"
      alignItems="center"
    >
      {Array.from({ length: 3 }, (item, index) => (
        <Skeleton
          key={index}
          animation="wave"
          variant="rectangular"
          sx={{
            borderRadius: '10px',
            height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
            width: '30% ',
            bgcolor: props.darkMode ? '#353535' : '',
            transition: 'height 0.2s',
          }}
        />
      ))}
    </Stack>
  );
}

export default HotCarousel;
