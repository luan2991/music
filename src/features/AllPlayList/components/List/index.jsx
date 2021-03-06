import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Grid, Skeleton } from '@mui/material';
import ItemPlayList from '../Item';

AllPlaylistList.propTypes = {
  darkMode: PropTypes.bool,
  handleChangePlaylist: PropTypes.func,
  playlist: PropTypes.array,
};

function AllPlaylistList(props) {
  return (
    <Box pl={2} pr={2}>
      <Grid container spacing={2}>
        {props.playlist.map((playlistitem, index) => (
          <Grid key={index} item xs={3}>
            <ItemPlayList
              playlistitem={playlistitem}
              darkMode={props.darkMode}
              handleChangePlaylist={() => props.handleChangePlaylist(playlistitem._id)}
            />
          </Grid>
        ))}
        {props.playlist.length < 1 &&
          Array.from({ length: 30 }, (item, index) => (
            <Grid key={index} item xs={3}>
              <Skeleton
                key={index}
                animation="wave"
                variant="rectangular"
                sx={{
                  borderRadius: '10px',
                  height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
                  width: '100%',
                  bgcolor: props.darkMode ? '#353535' : '',
                  transition: 'height 0.2s',
                }}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default AllPlaylistList;
