import { Box } from '@mui/material';
import React from 'react';
import LibraryItem from './../../components/LibraryItem';

// import PropTypes from 'prop-types';

// LibraryList.propTypes = {

// };

function LibraryList(props) {
  return (
    <Box width="100%" mt={1}>
      {Array.from({ length: 6 }, (index) => (
        <LibraryItem darkMode={props.darkMode} />
      ))}
    </Box>
  );
}

export default LibraryList;
