import { MoreVertRounded } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import PropTypes from 'prop-types';

// MusicItem.propTypes = {

// };

function MusicItem({ item, add3Dots, onClickChangeMusic, index }) {
  return (
    <Box display="flex" alignItems="center">
      <Box
        sx={{
          display: 'inline-block',
          width: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        onClick={() => onClickChangeMusic(index)}
      >
        <Typography noWrap sx={{ fontSize: '14px', fontWeight: 500, color: 'rgba(244,246,248,0.88)' }}>
          {item.title}
        </Typography>
        <Typography noWrap sx={{ fontSize: '14px', fontWeight: 500, color: 'rgba(244, 246, 248, 0.5)' }}>
          {item.artist}
        </Typography>
      </Box>
      <IconButton
        onClick={() => {}}
        sx={{ '&:hover': { backgroundColor: 'rgba(244,246,248,0.02);' } }}
      >
        <MoreVertRounded htmlColor="rgba(244, 246, 248, 0.5)" />
      </IconButton>
    </Box>
  );
}

export default MusicItem;
