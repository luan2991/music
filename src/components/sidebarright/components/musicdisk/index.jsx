import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
// import PropTypes from 'prop-types';

// MusicDisk.propTypes = {

// };

const useStyles = makeStyles(() => ({
  backgroundBox: {
    backgroundColor: 'rgb(24, 34, 45)',
    justifyContent: 'center',
    height: '100vh',
  },
  whBox: {
    width: '272px',
    height: 'calc(100vh - 20em)',
    overflow: 'hidden',
    margin: '0 auto',
  },
  rdBox: {
    marginTop: '16px',
    padding: '12px 0',
    borderRadius: '4px',
    backgroundColor: 'rgba(244,246,248,0.02)',
  },
  whoutBox: {
    position: 'relative',
    width: '240px',
    height: '320px',
    margin: '0 auto',
    zIndex: '1',
    cursor: 'pointer',
  },
  whinBox: {
    position: 'relative',
    width: '240px',
    height: '240px',
    overflow: 'hidden',
    borderRadius: '0.4rem',
    boxShadow: '0 8px 16px rgb(0 0 0 / 20%)',
  },
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
  boxRotate: {
    borderRadius: '200px',
    animation: '$rotate 8s linear infinite',
  },
}));
function MusicDisk({ isPause }) {
  const classes = useStyles();
  return (
    <Box className={classes.backgroundBox}>
      <Box display="flex">
        <Box className={classes.whBox}>
          <Box className={classes.rdBox}>
            <Box className={classes.whoutBox}>
              <Box
                className={`${classes.whinBox}+${classes.boxRotate}`}
                style={{ animationPlayState: `${isPause === true ? 'paused' : 'running'}` }}
              >
                <img
                  className={`${classes.imgRotate}`}
                  style={{ animationPlayState: `${isPause === true ? 'paused' : 'running'}` }}
                  alt="default disk"
                  src={require('./../../components/musicdisk/note.jpg').default}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicDisk;
