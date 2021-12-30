import React from 'react';
import { Skeleton, Stack } from '@mui/material';
// import PropTypes from 'prop-types';

// HotCarousel.propTypes = {

// };

function HotCarousel(props) {
  return (
    <Stack direction="row" spacing={1} justifyContent="space-around" alignItems="center">
      {Array.from({ length: 3 }, (index) => (
        <Skeleton
          key={index}
          animation="wave"
          sx={{
            height: { xs: '180px', sm: '200px', md: '230px', lg: '300px' },
            width: { xs: '200px', sm: '220px', md: '280px', lg: '300px' },
            bgcolor: '#353535',
          }}
        />
      ))}
    </Stack>
  );
}

export default HotCarousel;
