import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

BotAudioDisk.propTypes = {
  titleAudio: PropTypes.string,
  artistAudio: PropTypes.array,
  darkMode: PropTypes.bool,
  songId: PropTypes.string,
  songImg: PropTypes.string,
};
const useStyles = makeStyles(() => ({
  imgSong: {
    width: '100%',
    height: '100%',
    borderRadius: '0.5em',
  },
}));
function BotAudioDisk({ titleAudio, artistAudio, darkMode, songId, songImg }) {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
          <Box width="4em" height="4em">
            <Link to={`/song/${songId}`}>
              <img
                className={classes.imgSong}
                alt="song"
                src={
                  songImg === ''
                    ? require('./../../../sidebarright/components/musicdisk/note.jpg').default
                    : `http://localhost:5000/images/songs/${songImg}`
                }
              />
            </Link>
          </Box>
          <Box
            sx={{
              width: { xs: '4em', sm: '10em', md: '18em', lg: '18em' },
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              transition: 'width 0.2s',
            }}
          >
            <Link to={`/song/${songId}`} style={{ textDecoration: 'none' }}>
              <Typography
                noWrap
                sx={{
                  color: darkMode ? 'rgba(244,246,248,0.88)' : 'rgba(28,30,32,0.88)',
                  '&:hover': {
                    color: darkMode ? '#2DAAED' : '#353535',
                  },
                }}
              >
                {titleAudio}
              </Typography>
            </Link>
            <Typography noWrap variant="caption">
              {artistAudio.map((artistitem, index) => (
                <span key={index}>
                  {index > 1 ? ', ' : ''}
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
        </Stack>
      </Box>
    </Box>
  );
}

export default BotAudioDisk;
