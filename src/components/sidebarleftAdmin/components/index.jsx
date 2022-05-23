import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { FeaturedPlayList } from '@mui/icons-material';

MenuSideBarAdmin.propTypes = {
  darkMode: PropTypes.bool,
};
const style = {
  link: {
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'rgba(51, 153, 255, 0.24)',
    },
  },
  iconList: {
    htmlColor: '#FFFFFF',
    transition: 'color 0.5s ease',
  },
  text: {
    fontSize: '0.2rem',
  },
  listitembutton: (props) => ({
    fontSize: '0.8rem',
    color: props.darkMode ? '#FFFFFF' : '#000000',
    '&:hover': {
      backgroundColor: 'rgba(51, 153, 255, 0.24)',
      '& .itemText': {
        color: props.darkMode ? '#1976d2' : '#F46040',
        transition: 'color 0.5s ease',
      },
      '& .opacityIcon': {
        color: props.darkMode ? '#1976d2' : '#F46040',
        transition: 'color 0.5s ease',
      },
    },
  }),
  listitemtext: { fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' } },
};

function MenuSideBarAdmin(props) {
  const { darkMode } = props;

  return (
    <>
      <List component="nav" aria-label="main mailbox folders">
        <Link style={style.link} to="/">
          <ListItemButton sx={style.listitembutton(props)}>
            <ListItemIcon>
              <FeaturedPlayList
                className="opacityIcon"
                htmlColor={darkMode ? '#fff' : '#00b509'}
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemText
              className="itemText"
              primaryTypographyProps={style.listitemtext}
              primary="Danh sách bài hát"
            />
          </ListItemButton>
        </Link>
      </List>
    </>
  );
}

export default MenuSideBarAdmin;
