import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, ListItem, Stack, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';

AddSongPlaylistItem.propTypes = {};

function AddSongPlaylistItem({ song, handleAddSongToList }) {
  console.log(song);
  return (
    <ListItem>
      <Stack direction={'row'} justifyContent="center" ml={1}>
        <img
          alt={song.title}
          style={{ width: '3rem', height: '3rem' }}
          src={`http://localhost:5000/images/songs/${song.simage}`}
        />
        <Stack direction={'column'} justifyContent="center" ml={1}>
          <Typography noWrap variant="caption">
            {song.title}
          </Typography>
          <Typography noWrap sx={{ fontSize: '14px' }} variant="caption">
            {song.artist.map((singer, index) => (
              <Typography variant="caption">
                {index > 0 && <span>, </span>}
                {singer.artist_name}
              </Typography>
            ))}
          </Typography>
        </Stack>
        <IconButton onClick={handleAddSongToList}>
          <Add color="primary" />
        </IconButton>
      </Stack>
    </ListItem>
  );
}

export default AddSongPlaylistItem;
