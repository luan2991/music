import { Headphones, MoreVertRounded } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

MusicItem.propTypes = {
  item: PropTypes.array,
  onClickChangeMusic: PropTypes.func,
  index: PropTypes.number,
  darkMode: PropTypes.bool,
  songId: PropTypes.string,
  formatView: PropTypes.func,
};

function MusicItem({ item, onClickChangeMusic, index, darkMode, songId, formatView }) {
  return (
    <Box
      display="flex"
      p="0.8em 1.2em"
      sx={{
        position: 'relative',
        height: '2.4em',
        background:
          songId === item._id
            ? darkMode
              ? 'rgba(11, 88, 128, 0.55)'
              : 'rgba(216, 212, 147, 0.26)'
            : '',
        '&:hover': {
          background: darkMode ? 'rgba(11, 88, 128, 0.55)' : 'rgba(216, 212, 147, 0.26)',
        },
        '&:hover .iconBtnMore': {
          display: 'flex',
        },
        '&:hover .iconView': {
          display: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'inline-block',
          width: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        onClick={() => onClickChangeMusic(item, index)}
      >
        <Typography
          noWrap
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'default',
            color: darkMode ? 'rgba(244,246,248,0.88)' : 'rgba(28,30,32,0.88)',
          }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            position: 'absolute',
            zIndex: 1401,
            fontSize: '0.8em',
            '&:hover  .spansinger': {
              color: darkMode ? 'rgba(10, 118, 151, 0.96)' : '#353535',
            },
            cursor: 'pointer',
          }}
          noWrap
        >
          {item.artist.map((artistitem, index) => (
            <span key={index}>
              {index > 1 ? ',' : ''}
              <Link
                style={{
                  textDecoration: 'none',
                  color: darkMode ? 'rgba(244,246,248,0.5)' : '',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                to={`/ca-si/${artistitem._id}`}
              >
                <span className="spansinger" style={{}}>
                  {artistitem.artist_name}
                </span>
              </Link>
            </span>
          ))}
        </Typography>
      </Box>
      <Box display='flex' alignItems='center' justifyContent='center'>
      <Box className='iconView' display='flex' alignItems='center' justifyContent='center'>
      <Headphones sx={{fontSize:'0.8em'}} htmlColor={darkMode ? 'rgba(244,246,248,0.88)': 'rgba(28,30,32,0.5)'}/>
      <Typography component="span" sx={{fontSize:'0.8em', paddingLeft:'0.2em',color: darkMode ? 'rgba(244, 246, 248, 0.5)': 'rgba(28,30,32,0.5)'}}>{formatView(11100)}</Typography>
      </Box>
      <IconButton
        className="iconBtnMore"
        sx={{
          display: 'none',
          '&:hover': {
            backgroundColor: darkMode ? 'rgba(244,246,248,0.02)' : 'rgba(0, 0, 0, 0.04)',
          },
        }}
      >
        <MoreVertRounded
          htmlColor={darkMode ? 'rgba(244, 246, 248, 0.5)' : 'rgba(0, 0, 0, 0.54)'}
        />
      </IconButton>
      </Box>
    </Box>
  );
}

export default MusicItem;
