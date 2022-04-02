import { Headphones, MoreVertRounded, MusicNoteRounded } from '@mui/icons-material';
import { ClickAwayListener, Fade, IconButton, MenuItem, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Popper from '@mui/material/Popper';

MusicItem.propTypes = {
  item: PropTypes.any,
  onClickChangeMusic: PropTypes.func,
  index: PropTypes.number,
  darkMode: PropTypes.bool,
  songId: PropTypes.string,
  formatView: PropTypes.func,
  handlePopperPLMoreClose: PropTypes.func,
  openPLMore: PropTypes.bool,
  anchorElPLMore: PropTypes.any,
  handlePopperPLMoreOpen:PropTypes.func,
};

function MusicItem({
  item,
  onClickChangeMusic,
  index,
  darkMode,
  songId,
  formatView,
  handlePopperPLMoreClose,
  openPLMore,
  anchorElPLMore,
  handlePopperPLMoreOpen,
}) {
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
      <Box display="flex" alignItems="center" justifyContent="center">
       
        <IconButton
          className="iconBtnMore"
          onClick={handlePopperPLMoreOpen}
          sx={{
            display: 'none',
            '&:hover': {
              backgroundColor: darkMode ? 'rgba(244,246,248,0.02)' : 'rgba(0, 0, 0, 0.04)',
            },
            '&:focus':{
              display: 'flex',
            },
            '&:focus + .iconView':{
              display: 'none',
            },
          }}
        >
          <MoreVertRounded
            htmlColor={darkMode ? 'rgba(244, 246, 248, 0.5)' : 'rgba(0, 0, 0, 0.54)'}
          />
          <Popper
            open={openPLMore}
            anchorEl={anchorElPLMore}
            placement="top-end"
            transition
            disablePortal
          >
            {({ TransitionProps }) => (
              <ClickAwayListener onClickAway={handlePopperPLMoreClose}>
                <Fade {...TransitionProps} timeout={350}>
                  <Paper
                    sx={{
                      color: darkMode ? 'rgba(244,246,248,0.5)' : '#353535',
                      zIndex: 1230,
                      borderRadius: '6px',
                      backgroundColor: darkMode ? 'rgba(24,1,45,1)' : '#fff',
                      
                    }}
                  >
                    <MenuItem>
                      <MusicNoteRounded
                        htmlColor={darkMode ? 'rgba(244,246,248,0.5)' : 'rgba(28,30,32,0.5)'}
                        fontSize="small"
                      />
                      <Typography sx={{ fontSize: '1em', paddingLeft: '0.5em' }}>
                        Đi đến bài hát
                      </Typography>
                    </MenuItem>
                  </Paper>
                </Fade>
              </ClickAwayListener>
            )}
          </Popper>
        </IconButton>
        <Box className="iconView" display="flex" alignItems="center" justifyContent="center">
          <Headphones
            sx={{ fontSize: '0.8em' }}
            htmlColor={darkMode ? 'rgba(244,246,248,0.88)' : 'rgba(28,30,32,0.5)'}
          />
          <Typography
            component="span"
            sx={{
              fontSize: '0.8em',
              paddingLeft: '0.2em',
              color: darkMode ? 'rgba(244, 246, 248, 0.5)' : 'rgba(28,30,32,0.5)',
            }}
          >
            {formatView(11100)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicItem;
