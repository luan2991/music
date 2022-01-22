import { Home, MusicNoteRounded, StarBorderRounded } from '@mui/icons-material';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

// MenuSideBar.propTypes = {

// };
// };
const style = {
  link: {
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'rgba(51, 153, 255, 0.24)',
    },
  },
  button: {
    fontSize: '0.8rem',
    color: '#FFFFFF',

    '&:hover': {
      backgroundColor: 'rgba(51, 153, 255, 0.24)',
      '& .itemText':{
        color: '#1976d2',
        transition: 'color 0.5s ease',
      },
      '& .opacityIcon': {
        color: '#1976d2',
        transition: 'color 0.5s ease',
      },
    },
  },
  iconList: {
    htmlColor: '#FFFFFF',
    transition: 'color 0.5s ease',
  },
  text: {
    fontSize: '0.2rem',
  },
};
function MenuSideBar(props) {
  // let navigate = useNavigate();
  return (
    <>
      <List component="nav" aria-label="main mailbox folders">
        <Link style={style.link} to="/">
          <ListItemButton sx={style.button}>
            <ListItemIcon>
              <Home className="opacityIcon" htmlColor="#FFFFFF" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              className='itemText'
              primaryTypographyProps={{
                fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
              }}
              primary="Trang chủ"
            />
          </ListItemButton>
        </Link>
        <Link style={style.link} to="/new-music">
          <ListItemButton sx={style.button}>
            <ListItemIcon>
              <MusicNoteRounded className="opacityIcon" htmlColor="#FFFFFF" fontSize="small" />
            </ListItemIcon>
            <ListItemText
             className='itemText'
              primaryTypographyProps={{
                fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
              }}
              primary="Nhạc mới"
            />
          </ListItemButton>
        </Link>
        <Link style={style.link} to="/top100/vn/young">
          <ListItemButton sx={style.button}>
            <ListItemIcon>
              <StarBorderRounded className="opacityIcon" htmlColor="#FFFFFF" fontSize="small" />
            </ListItemIcon>
            <ListItemText
              className='itemText'
              primaryTypographyProps={{
                fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
              }}
              primary="Top 100"
            />
          </ListItemButton>
        </Link>
        <Link style={style.link} to="/playlist">
          <ListItemButton sx={style.button}>
            <ListItemIcon>
              <StarBorderRounded className="opacityIcon" htmlColor="#FFFFFF" fontSize="small" />
            </ListItemIcon>
            <ListItemText
            className='itemText'
              primaryTypographyProps={{
                fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
              }}
              primary="Playlist"
            />
          </ListItemButton>
        </Link>
        <Link style={style.link} to="/rank/vn">
          <ListItemButton sx={style.button}>
            <ListItemIcon>
              <StarBorderRounded className="opacityIcon" htmlColor="#FFFFFF" fontSize="small" />
            </ListItemIcon>
            <ListItemText
            className='itemText'
              primaryTypographyProps={{
                fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
              }}
              primary="BXH Nhạc"
            />
          </ListItemButton>
          
        </Link>
      </List>
    </>
  );
}

export default MenuSideBar;
