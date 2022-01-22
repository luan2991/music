import { Box, Skeleton, Stack } from '@mui/material';
import React from 'react';
import ItemRank from '../ItemRank';

// import PropTypes from 'prop-types';

// ListRank.propTypes = {

// };

function ListRank(props) {
  return (
    // <>

    // </>
    <Box width="100%">
      <Skeleton
        sx={{ backgroundColor: 'rgba(244,246,248,0.06)' }}
        animation="wave"
        variant="rectangular"
        width="100%"
        height={200}
      />

      <Box width="100%" mt={1}>
        {Array.from({ length: 4 }, (index) => (
          <ItemRank />
        ))}
      </Box>
    </Box>
  );
}

export default ListRank;
