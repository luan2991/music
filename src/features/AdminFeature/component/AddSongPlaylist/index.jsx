import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import AddSongPlaylistItem from '../AddSongPlaylistItem';
import { Divider, IconButton, Paper, Stack, Typography } from '@mui/material';
import SongPlaylistItem from '../SongPlaylistItem';
import { Box } from '@mui/system';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
AddSongPlaylist.propTypes = {};

function AddSongPlaylist({ songAddList, songList, handleAddSongToList }) {
  return (
    <Stack
      justifyContent={'space-between'}
      alignItems={'flex-start'}
      flexDirection={'row'}
      width={'100%'}
      height={300}
      sx={{ mb: 5 }}
    >
      <Box width={'100%'} maxWidth={360} height={'100%'}>
        <Typography sx={{ fontSize: '1em', fontWeight: '500' }} variant="caption">
          Danh sách nhạc:
        </Typography>
        <Paper
          sx={{ width: '100%', maxWidth: 360, height: '80%', overflow: 'hidden scroll' }}
          elevation={5}
        >
          <List dense>
            {songList.map((song, index) => (
              <Box key={index}>
                <AddSongPlaylistItem song={song} handleAddSongToList={handleAddSongToList} />
                <Divider />
              </Box>
            ))}
          </List>
        </Paper>
        <Stack justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
          <IconButton>
            <NavigateBefore />
          </IconButton>
          <Typography variant="caption">page</Typography>
          <IconButton>
            <NavigateNext />
          </IconButton>
        </Stack>
      </Box>

      <Box width={'100%'} maxWidth={360} height={'100%'}>
        <Typography sx={{ fontSize: '1em', fontWeight: '500' }} variant="caption">
          Nhạc được thêm vào playlist:
        </Typography>
        <Paper sx={{ width: '100%', maxWidth: 360, height: '90%' }} elevation={5}>
          <List dense>
            {songAddList.map((song, index) => (
              <Box key={index}>
                <SongPlaylistItem songAddList={songAddList} />
                <Divider />
              </Box>
            ))}
          </List>
        </Paper>
      </Box>
    </Stack>
  );
}

export default AddSongPlaylist;
