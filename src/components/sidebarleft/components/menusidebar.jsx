import {
    CatchingPokemonRounded,
    ExpandLess,
    ExpandMore,
    Home,
    MusicNoteRounded,
    StarBorderRounded,
  } from '@mui/icons-material';
  import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
  };
function MenuSideBar({open,handleClick}) {
    return (
        <>
             <List component="nav" aria-label="main mailbox folders">
            <ListItemButton sx={style.button}>
              <ListItemIcon>
                <Home fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Trang chủ" />
            </ListItemButton>
            <ListItemButton sx={style.button}>
              <ListItemIcon>
                <MusicNoteRounded fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Nhạc mới" />
            </ListItemButton>
            <ListItemButton sx={style.button} onClick={handleClick}>
              <ListItemIcon>
                <StarBorderRounded fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Top 100" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={style.topbutton}>
                  <ListItemIcon>
                    <CatchingPokemonRounded className="opacityIcon" sx={style.iconList}/>
                  </ListItemIcon>
                  <ListItemText primary="Việt Nam" />
                </ListItemButton>
                <ListItemButton sx={style.topbutton}>
                  <ListItemIcon>
                    <CatchingPokemonRounded className="opacityIcon" sx={style.iconList}/>
                  </ListItemIcon>
                  <ListItemText primary="Âu Mỹ" />
                </ListItemButton>
                <ListItemButton sx={style.topbutton}>
                  <ListItemIcon>
                    <CatchingPokemonRounded className="opacityIcon" sx={style.iconList}/>
                  </ListItemIcon>
                  <ListItemText primary="Hàn Quốc" />
                </ListItemButton>
                <ListItemButton sx={style.topbutton}>
                  <ListItemIcon>
                    <CatchingPokemonRounded className="opacityIcon" sx={style.iconList}/>
                  </ListItemIcon>
                  <ListItemText primary="Trung Quốc" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </>
    );
}

export default MenuSideBar;