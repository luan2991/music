import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material';

// BotAudioDisk.propTypes = {

// };
const useStyles = makeStyles(() => ({
  '@keyframes rotate': {
    '100%': {
      transform: 'rotate(-360deg)',
    },
  },
  imgRotate: {
    borderRadius: '200px',
    animation: '$rotate 8s linear infinite',
    width: '100%',
    height: 'auto',
    verticalAlign: 'middle',
  },
}));
function BotAudioDisk({ isPlay, titleAudio, artistAudio, add3Dots }) {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
          <Box
            sx={{ backgroundColor: '#989898', borderRadius: '200px' }}
            padding="0.2rem 0.2rem 0.2rem 0.2rem"
            width="55px"
            height="55px"
          >
            <img
              className={`${classes.imgRotate}`}
              style={{ animationPlayState: `${isPlay === true ? 'running' : 'paused'}` }}
              alt="default disk"
              src={require('./../../../sidebarright/components/musicdisk/note.jpg').default}
            />
          </Box>
          <Box>
            <Typography sx={{ color: 'rgba(244,246,248,0.88)' }}>{add3Dots(titleAudio,22)}</Typography>
            <Typography sx={{ color: 'rgba(244, 246, 248, 0.5)' }} variant="caption">
              {add3Dots(artistAudio,22)}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default BotAudioDisk;
