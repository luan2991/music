import { PlayCircleFilledOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

// ItemPlayList.propTypes = {

// };

function ItemPlayList(props) {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          borderRadius: '10px',
          height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
          width: '100%',
          bgcolor: props.darkMode ? '#353535' : '',
          transition: 'height 0.2s',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            '&:hover': {
              transform: 'scale(1.1)',
              transition: 'transform 0.5s,opacity 0.5s',
            },
            '&:hover .playicon': {
              opacity: 1,
              transition: 'opacity 0.5s',
            },
            transform: 'scale(1)',
            transition: 'transform 0.5s,opacity 0.5s',
            zIndex: 1,
          }}
        >
          <img
            className="imageSong"
            style={{ height: '100%', width: '100%' }}
            alt={`${props.playlistitem.playlist_title}`}
            src={`http://localhost:5000/images/playlist/${props.playlistitem.playlist_img}`}
          />
          <PlayCircleFilledOutlined
            onClick={() => props.handleChangePlaylist(props.playlistitem)}
            className="playicon"
            sx={{
              opacity: 0,
              transition: 'opacity 0.5s', 
              zIndex: 3,
              fontSize: '3em',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              '&:hover': {
                fontSize: '3.5em',
              },
              '&:hover + .link .opacity': {
                background: 'rgba(0, 0, 0, 0.5)',
                transition: 'background 0.5s',
              },
            }}
            htmlColor="white"
          />
          <Link className="link" to={`/playlist/${props.playlistitem._id}`}>
            <Box
              className="opacity"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 2,
                height: '100%',
                width: '100%',
                '&:hover': { background: 'rgba(0, 0, 0, 0.5 )', transition: 'background 0.5s' },
              }}
            ></Box>
          </Link>
        </Box>
      </Box>
      <Box>
        <Link to={`/playlist/${props.playlistitem._id}`} style={{ textDecoration: 'none' }}>
          <Typography
            noWrap
            sx={{
              color: props.darkMode ? 'rgba(244,246,248,0.88)' : '',
              '&:hover': {
                color: '#2DAAED',
              },
            }}
          >
            {props.playlistitem.playlist_title}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default ItemPlayList;
