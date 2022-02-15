import {  Skeleton } from '@mui/material';
import React from 'react';

// import PropTypes from 'prop-types';

// ItemPlayList.propTypes = {

// };

function ItemPlayList(props) {
  return (
    
      <Skeleton
        sx={{
          borderRadius: '12px',
          backgroundColor: props.darkMode ? 'rgba(244,246,248,0.06)' : '',
        }}
        animation="wave"
        variant="rectangular"
        height="inherit"
      />
    
  );
}

export default ItemPlayList;
