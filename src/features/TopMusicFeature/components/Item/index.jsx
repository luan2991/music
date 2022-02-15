import { Skeleton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// import PropTypes from 'prop-types';

// ItemTop.propTypes = {

// };

function ItemTop(props) {
  return (
    <Box width="100%" mt={1}>
      <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
        <Skeleton
          sx={{ backgroundColor: props.darkMode ? 'rgba(244,246,248,0.06)':'' }}
          animation="wave"
          variant="circular"
          width={40}
          height={40}
        />
        <Skeleton
          sx={{ backgroundColor: props.darkMode ? 'rgba(244,246,248,0.06)' : '' }}
          animation="wave"
          variant="rectangular"
          width="100%"
          height={40}
        />
      </Stack>
    </Box>
  );
}

export default ItemTop;
