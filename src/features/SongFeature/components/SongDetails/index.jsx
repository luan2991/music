import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Grid, Skeleton, Stack, Typography } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

SongDetail.propTypes = {
  darkMode: PropTypes.bool,
  songData: PropTypes.array,
  handlePlaySong: PropTypes.func.isRequired,
};

function SongDetail(props) {
  console.log(props.songData);
  return (
    <Box pt={3}>
      <Grid container spacing={{ xs: 5, sm: 5, md: 6 }}>
        <Grid item xs={3} sm={3}>
          {/* Anh cua nhac */}
          <Box
            className="imageBox"
            sx={{
              position: 'relative',
              width: '15em',
              height: '15em',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.4em',
            }}
          >
            <PlayCircle
              onClick={() => {
                props.handlePlaySong(props.songData[0]);
              }}
              sx={{
                position: 'absolute',
                top: '85%',
                left: '85%',
                zIndex: 2,
                cursor: 'pointer',
                fontSize: '2em',
              }}
              htmlColor="#fff"
            />
            {props.songData.length > 0 && (
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.4em',
                  boxShadow: '0 8px 16px rgb(0 0 0 / 20%)',
                }}
                className="imageSong"
                src={`http://localhost:5000/images/songs/${props.songData[0].simage}`}
                alt="song"
              />
            )}
            {props.songData.length <= 0 && (
              <Skeleton
                animation="wave"
                variant="rectangular"
                sx={{
                  borderRadius: '1.5em',
                  height: '100%',
                  width: '100%',
                  bgcolor: props.darkMode ? '#353535' : '',
                }}
              />
            )}
          </Box>
        </Grid>
        <Grid item>
          {/* Tên Bai Hat*/}
          {props.songData.length > 0 && (
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Typography
                noWrap
                sx={{
                  color: props.darkMode ? 'rgba(244,246,248,0.88)' : '',
                  '&:hover': {
                    color: '#2DAAED',
                  },
                }}
              >
                {props.songData[0]?.title}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                {props.songData[0].artist.map((artistitem, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      width={40}
                      height={40}
                      sx={{ border: '3px solid #2DAAED', borderRadius: '10em' }}
                    >
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/ca-si/${props.songData[0]?.artist[0]._id}`}
                      >
                        <img
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '10em',
                          }}
                          className="imageArtsit"
                          src={
                            props.songData.length > 0
                              ? `http://localhost:5000/images/artist/${artistitem.artist_image}`
                              : 'http://localhost:5000/images/artist/default_user.png'
                          }
                          alt="ca sĩ"
                        />
                      </Link>
                    </Box>
                    <Link style={{ textDecoration: 'none' }} to={`/ca-si/${artistitem._id}`}>
                      <Typography
                        noWrap
                        sx={{
                          color: props.darkMode ? 'rgba(244,246,248,0.88)' : '',
                          '&:hover': {
                            color: '#2DAAED',
                          },
                        }}
                      >
                        {artistitem.artist_name}
                      </Typography>
                    </Link>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          )}

          {props.songData.length <= 0 && (
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Skeleton
                animation="wave"
                variant="rectangular"
                sx={{
                  borderRadius: '0.4em',
                  height: '2em',
                  width: '20em',
                  bgcolor: props.darkMode ? '#353535' : '',
                }}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                sx={{
                  borderRadius: '0.4em',
                  height: '1.5em',
                  width: '15em',
                  bgcolor: props.darkMode ? '#353535' : '',
                }}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                sx={{
                  borderRadius: '0.4em',
                  height: '4em',
                  width: '30em',
                  bgcolor: props.darkMode ? '#353535' : '',
                }}
              />
            </Stack>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default SongDetail;
