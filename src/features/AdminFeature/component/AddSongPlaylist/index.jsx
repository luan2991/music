import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import AddSongPlaylistItem from '../AddSongPlaylistItem';
import { Divider, IconButton, Paper, Stack, Typography } from '@mui/material';
import SongPlaylistItem from '../SongPlaylistItem';
import { Box } from '@mui/system';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
AddSongPlaylist.propTypes = {
  songAddList: PropTypes.array,
  songList: PropTypes.array,
  handleAddSongToList: PropTypes.func,
  handleRemoveSong: PropTypes.func,
  pageSong: PropTypes.number,
  handleNextPageAddSong: PropTypes.func,
  handlePrevPageAddSong: PropTypes.func,
};

function AddSongPlaylist({
  songAddList,
  songList,
  handleAddSongToList,
  handleRemoveSong,
  pageSong,
  handleNextPageAddSong,
  handlePrevPageAddSong,
}) {
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
              <Box key={index} sx={{ bgcolor: index % 2 === 0 ? '#f9dba6' : '#fff' }}>
                <AddSongPlaylistItem
                  song={song}
                  index={index}
                  handleAddSongToList={handleAddSongToList}
                />
                <Divider />
              </Box>
            ))}
          </List>
        </Paper>
        <Stack justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
          <IconButton onClick={handlePrevPageAddSong} disabled={pageSong === 1 ? true : false}>
            <NavigateBefore />
          </IconButton>
          <Typography variant="caption">{pageSong}</Typography>
          <IconButton onClick={handleNextPageAddSong}>
            <NavigateNext />
          </IconButton>
        </Stack>
      </Box>

      <Box width={'100%'} maxWidth={360} height={'100%'}>
        <Typography sx={{ fontSize: '1em', fontWeight: '500' }} variant="caption">
          Nhạc được thêm vào playlist:
        </Typography>
        <Paper
          sx={{ width: '100%', maxWidth: 360, height: '90%', overflow: 'hidden scroll' }}
          elevation={5}
        >
          <List dense>
            {songAddList.map((song, index) => (
              <Box key={index} sx={{ bgcolor: index % 2 === 0 ? '#f9dba6' : '#fff' }}>
                <SongPlaylistItem song={song} index={index} handleRemoveSong={handleRemoveSong} />
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
