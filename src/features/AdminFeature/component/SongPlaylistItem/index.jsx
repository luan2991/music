import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, ListItem, Stack, Typography } from '@mui/material';
import { RemoveCircle } from '@mui/icons-material';

SongPlaylistItem.propTypes = {
  song: PropTypes.object,
  handleRemoveSong: PropTypes.func,
};

function SongPlaylistItem({ song, handleRemoveSong }) {
  return (
    <ListItem>
      <Stack
        direction={'row'}
        justifyContent="space-between"
        alignItems="flex-start"
        width={'100%'}
      >
        <Box>
          <img
            alt={song.title}
            style={{ width: '3rem', height: '3rem', float: 'left', marginRight: '8px' }}
            src={`http://localhost:5000/images/songs/${song.simage}`}
          />
          <Stack direction={'column'} justifyContent="flex-start" alignItems={'flex-start'}>
            <Typography noWrap variant="caption">
              {song.title}
            </Typography>
            <Typography noWrap sx={{ fontSize: '14px' }} variant="caption">
              {song.artist.map((singer, index) => (
                <Typography key={index} variant="caption">
                  {index > 0 && <span>, </span>}
                  {singer.artist_name}
                </Typography>
              ))}
            </Typography>
          </Stack>
        </Box>
        <IconButton onClick={() => handleRemoveSong(song)}>
          <RemoveCircle color="primary" />
        </IconButton>
      </Stack>
    </ListItem>
  );
}

export default SongPlaylistItem;
