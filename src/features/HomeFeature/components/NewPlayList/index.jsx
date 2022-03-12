import React from 'react';

import { Box, Skeleton, Stack /*Typography*/, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import NewPlaylistList from './components/List';
NewPlayList.propTypes = {
  darkMode: PropTypes.bool,
  newPlaylists: PropTypes.array,
  handlePlayListSong:PropTypes.func.isRequired,
};

function NewPlayList(props) {
  return (
    <Box pl={2} pr={2} marginTop="30px">
      <Box
        sx={{
          flexGrow: 1,
          margin: '0 auto',
          position: 'relative',
          width: '100%',
          '&:hover': {
            '& .allNew': {
              opacity: 1,
              transform: 'translateX(0px)',
            },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              color: props.darkMode ? '#FFFFFF' : '#353535',
            }}
            variant="h4"
            component="div"
          >
            Playlist Mới Nhất
          </Typography>
          {props.allNewPlayList('Tất cả')}
        </Box>
        {/* <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            borderRadius:'50px',
            height: '40px',
            width: { xs: '260px', sm: '180px', md: '220px', lg: '260px' },
            bgcolor: '#353535',
          }}
        /> */}
        <Box mt={2} position="relative">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            {typeof props.newPlaylists !== 'undefined' && props.newPlaylists.length > 0 && (
              <NewPlaylistList darkMode={props.darkMode} newPlaylists={props.newPlaylists} handlePlayListSong={props.handlePlayListSong} />
            )}
            {(typeof props.newPlaylists  === 'undefined' || props.newPlaylists.length === 0) &&
              Array.from({ length: 4 }, (item,index) => (
                <Skeleton
                  variant="rectangular"
                  key={index}
                  animation="wave"
                  sx={{
                    borderRadius: '10px',
                    height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
                    width: '23%',
                    bgcolor: props.darkMode ? '#353535' : '',
                    transition: 'height 0.2s',
                  }}
                />
              ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default NewPlayList;
