import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { PlayCircleFilledOutlined } from '@mui/icons-material';

NewMusicListItem.propTypes = {
  handleChangeSong:PropTypes.func,
  darkMode:PropTypes.bool,
  songitem:PropTypes.any,
};

function NewMusicListItem(props) {
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
            alt={`${props.songitem.title}`}
            src={`http://localhost:5000/images/songs/${props.songitem.simage}`}
          />
          <PlayCircleFilledOutlined
            onClick={() => props.handleChangeSong(props.songitem)}
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
          <Link className="link" to={`/song/${props.songitem._id}`}>
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
        <Link to={`/song/${props.songitem._id}`} style={{ textDecoration: 'none' }}>
          <Typography
            noWrap
            sx={{
              color: props.darkMode ? 'rgba(244,246,248,0.88)' : '',
              '&:hover': {
                color: '#2DAAED',
              },
            }}
          >
            {props.songitem.title}
          </Typography>
        </Link>
        <Typography noWrap sx={{ fontSize: '0.8em' }}>
          {props.songitem.artist.map((artistitem, index) => (
            <span key={index}>
              {index > 1 ? ', ' : ''}
              <Link to={`/ca-si/${artistitem._id}`} style={{ textDecoration: 'none' }}>
                <span
                  style={{
                    color: props.darkMode ? 'rgba(244,246,248,0.5)' : '',
                    '&:hover': {
                      color:  '#2DAAED',
                    },
                  }}
                >
                  {artistitem.artist_name}
                </span>
              </Link>
            </span>
          ))}
        </Typography>
      </Box>
    </Box>
  );
}

export default NewMusicListItem;
