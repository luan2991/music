import { Popper } from '@mui/core';
import { Grow } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import PropTypes from 'prop-types';

// PlayList.propTypes = {

// };

function PlayList({ open, anchorEl }) {
  return (
    <Box >
      <Popper style={{zIndex:1201}}  open={open} anchorEl={anchorEl} placement="top" >
        <Grow in={open} >
        <Box  sx={{backgroundColor:'rgb(24, 34, 45)'}} display='flex' marginBottom='10px' marginLeft='15px' width="319px"   height="calc(100vh - 15em)">
            {/* <Box sx={{backgroundColor:'red'}}>
            </Box> */}
        </Box>
        </Grow>
      </Popper>
    </Box>
  );
}

export default PlayList;
