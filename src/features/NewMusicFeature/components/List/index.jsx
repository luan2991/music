import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import NewMusicListItem from '../Item';
import { Grid, Skeleton } from '@mui/material';

NewSongList.propTypes = {
  darkMode: PropTypes.bool,
  songList: PropTypes.array,
  handleChangeSong: PropTypes.func,
};

function NewSongList(props) {
  return (
    <Box pl={2} pr={2}>
      <Grid container spacing={2}>
        {props.songList.map((songitem, index) => (
          <Grid key={index} item xs={3}>
            <NewMusicListItem
              songitem={songitem}
              darkMode={props.darkMode}
              handleChangeSong={props.handleChangeSong}
            />
          </Grid>
        ))}
        {props.songList.length < 1 &&
          Array.from({ length: 30 }, (item, index) =>(
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
            )
          )}
      </Grid>
    </Box>
  );
}

export default NewSongList;
