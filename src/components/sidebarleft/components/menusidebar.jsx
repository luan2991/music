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
          <ListItemButton
            sx={{
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
            }}
          >
            <ListItemIcon>
              <Home
                className="opacityIcon"
                htmlColor={props.darkMode ? '#fff' : '#00b509'}
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemText
              className="itemText"
              primaryTypographyProps={{
                fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
              }}
              primary="Trang chủ"
            />
          </ListItemButton>
        </Link>
        <Link style={style.link} to="/new-music?page=1">
          <ListItemButton
            sx={{
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
            }}
          >
            <ListItemIcon>
              <MusicNoteRounded
                className="opacityIcon"
                htmlColor={props.darkMode ? '#fff' : '#00b509'}
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemText
              className="itemText"
              primaryTypographyProps={{
                fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
              }}
              primary="Nhạc mới"
            />
          </ListItemButton>
        </Link>
        <Link style={style.link} to="/top100/vn/young">
          <ListItemButton
            sx={{
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
            }}
          >
            <ListItemIcon>
              <StarBorderRounded
                className="opacityIcon"
                htmlColor={props.darkMode ? '#fff' : '#00b509'}
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemText
              className="itemText"
              primaryTypographyProps={{
                fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
              }}
              primary="Top 100"
            />
          </ListItemButton>
        </Link>
        <Link style={style.link} to="/new-playlist?page=1">
          <ListItemButton
            sx={{
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
            }}
          >
            <ListItemIcon>
              <StarBorderRounded
                className="opacityIcon"
                htmlColor={props.darkMode ? '#fff' : '#00b509'}
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemText
              className="itemText"
              primaryTypographyProps={{
                fontSize: { xs: '0.2rem', sm: '0.2rem', md: '0.2rem', lg: '1rem' },
              }}
              primary="Playlist"
            />
          </ListItemButton>
        </Link>
        <Link style={style.link} to="/rank/vn">
          <ListItemButton
            sx={{
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
            }}
          >
            <ListItemIcon>
              <StarBorderRounded
                className="opacityIcon"
                htmlColor={props.darkMode ? '#fff' : '#00b509'}
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemText
              className="itemText"
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
