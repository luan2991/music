import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Typography, Stack, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

SongArtists.propTypes = {
  darkMode: PropTypes.bool,
};

function SongArtists(props) {
  return (
    <Box pt={2}>
      <Typography
        sx={{
          color: props.darkMode ? '#FFFFFF' : '#353535',
        }}
        variant="h5"
        component="div"
      >
        Nhạc của {props.songData[0]?.artist[0].artist_name}
      </Typography>
      <Stack mt={2} direction="row" spacing={2} alignItems="flex-start" justifyContent="flex-start">
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ width: '24%' }}
        >
          <Box
            sx={{
              width: '100%%',
              height: '14em',
            }}
          >
            <Link style={{textDecoration:'none'}} to={`/ca-si/${props.songData[0]?.artist[0]._id}`}>
            <img
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '10em',
                boxShadow: '0 8px 16px rgb(0 0 0 / 20%)',
              }}
              className="imageArtsit"
              src={`http://localhost:5000/${props.songData[0]?.artist[0].artist_image.replace(
                './',
                ''
              )}`}
              alt="ca sĩ"
            />
            </Link>
          </Box>
          <Link style={{textDecoration:'none'}} to={`/ca-si/${props.songData[0]?.artist[0]._id}`}>
            <Typography
              noWrap
              sx={{
                color: props.darkMode ? 'rgba(244,246,248,0.88)' : '',
                '&:hover': {
                  color: '#2DAAED',
                },
              }}
            >
              {props.songData[0]?.artist[0].artist_name}
            </Typography>
          </Link>
        </Stack>

        {/* <Skeleton
          animation="wave"
          variant="circular"
          sx={{
            width: '24%',
            height: '14em',
            bgcolor: props.darkMode ? '#353535' : '',
          }}
        /> */}
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            width: '24%',
            borderRadius: '0.4em',
            height: '14em',
            bgcolor: props.darkMode ? '#353535' : '',
          }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            width: '24%',
            borderRadius: '0.4em',
            height: '14em',
            bgcolor: props.darkMode ? '#353535' : '',
          }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            width: '24%',
            borderRadius: '0.4em',
            height: '14em',
            bgcolor: props.darkMode ? '#353535' : '',
          }}
        />
      </Stack>
    </Box>
  );
}

export default SongArtists;
