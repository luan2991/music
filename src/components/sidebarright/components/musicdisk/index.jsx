import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// MusicDisk.propTypes = {

// };

const useStyles = makeStyles(() => ({
  backgroundBox: {
    backgroundColor: (props) => (props.darkMode ? 'rgb(24, 34, 45)' : '#fff'),
    justifyContent: 'center',
    height: '100vh',
    color: (props) => (props.darkMode ? 'rgba(244, 246, 248, 0.5)' : '#353535'),
  },
  whBox: {
    width: '272px',
    height: 'calc(100vh - 20em)',
    overflow: 'hidden',
    margin: '0 auto',
    borderRadius: '12px',
  },
  rdBox: {
    marginTop: '16px',
    padding: '12px 0',
    borderRadius: '0.5em',
    backgroundColor: (props) => (props.darkMode ? 'rgba(244,246,248,0.02)' : 'rgba(28,30,32,0.08)'),
  },
  whoutBox: {
    position: 'relative',
    width: '240px',
    height: '320px',
    margin: '0 auto',
    zIndex: '1',
  },
  whinBox: {
    position: 'relative',
    width: '15em',
    height: '15em',
    overflow: 'hidden',
    borderRadius: '0.4rem',
    boxShadow: '0 8px 16px rgb(0 0 0 / 20%)',
  },
  imageSong: {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
}));
function MusicDisk({  titleAudio, artistAudio, darkMode, songImg, songId }) {
  const classes = useStyles({ darkMode });
  return (
    <Box
      className={classes.backgroundBox}
      sx={{ position: 'relative', zIndex: 0, top: 0, left: 0 }}
    >
      <Box display="flex">
        <Box className={classes.whBox}>
          <Box className={classes.rdBox}>
            <Box className={classes.whoutBox}>
              <Box className={classes.whinBox}>
                <Link to={`/song/${songId}`}>
                  <img
                    className={classes.imageSong}
                    alt="song"
                    src={
                      songImg === ''
                        ? require('./../musicdisk/note.jpg').default
                        : `http://localhost:5000/images/songs/${songImg}`
                    }
                  />
                </Link>
              </Box>
              <Box mt={2}>
                <Link to={`/song/${songId}`} style={{ textDecoration: 'none' }}>
                  <Typography
                    noWrap
                    sx={{
                      color: darkMode ? 'rgba(244,246,248,0.88)' : '#353535',
                      '&:hover': {
                        color: darkMode ? '#2DAAED' : '#353535',
                      },
                    }}
                  >
                    {titleAudio}
                  </Typography>
                </Link>
                <Typography noWrap variant="caption">
                  {artistAudio.length > 0 &&
                    artistAudio.map((artistitem, index) => (
                      <span key={index}>
                        {index > 0 ? ', ' : ''}
                        <Link to={`/ca-si/${artistitem._id}`} style={{ textDecoration: 'none' }}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: darkMode ? 'rgba(244,246,248,0.5)' : '#353535',
                              '&:hover': {
                                color: darkMode ? '#2DAAED' : '#353535',
                              },
                            }}
                          >
                            {artistitem.artist_name}
                          </Typography>
                        </Link>
                      </span>
                    ))}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicDisk;
