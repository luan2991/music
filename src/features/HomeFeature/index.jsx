import React from 'react';
import { Box } from '@mui/system';
import NewMusic from './components/NewMusic';
import HotCarousel from './components/HotCarousel';
import MusicRank from './components/MusicRank';
import HotTopic from './components/HotTopic';
import TopMusic from './components/TopMusic';
import { NavigateNext } from '@mui/icons-material';
import { Typography } from '@mui/material';
// import PropTypes from 'prop-types';
// HomeFeature.propTypes = {

// };
const moreAll=(text)=>(
  <Typography
            variant="h5"
            component="div"
            className="allNew"
            sx={{
              color: '#c662ef',
              fontSize: '12px',
              fontWeight: '500',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              opacity: 0,
              transform: 'translateX(-20px)',
              transition: 'opacity .5s ease-in-out,transform .5s ease-in-out',
            }}
          >
         {text}
            <NavigateNext />
          </Typography>
)

function HomeFeature(props) {
  
  return (
    
    <Box sx={{bgcolor: props.darkMode ? 'rgb(24, 34, 45)':'#fff',}}>
      <HotCarousel darkMode={props.darkMode}/>
      <NewMusic darkMode={props.darkMode} allNewMusic={moreAll}/>
      <MusicRank darkMode={props.darkMode} allRankMusic={moreAll}/>
      <HotTopic darkMode={props.darkMode} allHotTopic={moreAll}/>
      <TopMusic darkMode={props.darkMode} allTopMusic={moreAll}/>
    </Box>
   
  );
}

export default HomeFeature;
