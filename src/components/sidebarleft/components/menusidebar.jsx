import {

  Home,
  MusicNoteRounded,
  StarBorderRounded,
} from '@mui/icons-material';
import {  List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

// import PropTypes from 'prop-types';

// MenuSideBar.propTypes = {

// };
// };
const style = {
  button: {
    fontSize: '0.8rem',
    '&:hover': {
      bgcolor: 'rgba(244,246,248,0.02);',
    },
  },
  topbutton: {
    pl: 7,
    '&:hover': {
      bgcolor: 'rgba(244,246,248,0.02);',
      '& .opacityIcon': {
        color: '#1976d2',
        transition: 'color 0.5s ease',
      },
    },
  },
  iconList: {
    color: '#FFFFFF',
    transition: 'color 0.5s ease',
  },
  text: {
    fontSize: '0.2rem',
  },
};
function MenuSideBar(props) {
  return (
    <>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton sx={style.button}>
          <ListItemIcon>
            <Home fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
            }}
            primary="Trang chủ"
          />
        </ListItemButton>
        <ListItemButton sx={style.button}>
          <ListItemIcon>
            <MusicNoteRounded fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
            }}
            primary="Nhạc mới"
          />
        </ListItemButton>
        <ListItemButton sx={style.button}>
          <ListItemIcon>
            <StarBorderRounded fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
            }}
            primary="Top 100"
          />
        </ListItemButton>
      </List>
    </>
  );
}

export default MenuSideBar;
