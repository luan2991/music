import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import NewPlaylistItem from '../Item';

NewPlaylistList.propTypes = {
  handlePlayListSong: PropTypes.func.isRequired,
};

function NewPlaylistList(props) {
  return (
    <Box>
      {props.newPlaylists.map((item, index) => (
        <Box
          key={index}
          sx={{
            borderRadius: '10px',
            width: '100%',
          }}
        >
          <NewPlaylistItem
            item={item}
            darkMode={props.darkMode}
            handlePlayListSong={props.handlePlayListSong}
          />
        </Box>
      ))}
    </Box>
  );
}

export default NewPlaylistList;
