import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material';

BotAudioDisk.propTypes = {
  titleAudio:PropTypes.string,
  artistAudio:PropTypes.string,
  darkMode:PropTypes.bool,
};
const useStyles = makeStyles(() => ({
  imgSong: {
    width: '100%',
    height: '100%',
    borderRadius:'0.5em',
  },
}));
function BotAudioDisk({ titleAudio, artistAudio, darkMode }) {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
          <Box width="4em" height="4em">
            <img
              className={classes.imgSong}
              alt="song"
              src={require('./../../../sidebarright/components/musicdisk/note.jpg').default}
            />
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
            <Typography
              noWrap
              sx={{ color: darkMode ? 'rgba(244,246,248,0.88)' : 'rgba(28,30,32,0.88)' }}
            >
              {titleAudio}
            </Typography>
            <Typography
              noWrap
              sx={{ color: darkMode ? 'rgba(244,246,248,0.88)' : 'rgba(28,30,32,0.88)' }}
              variant="caption"
            >
              {artistAudio}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default BotAudioDisk;
