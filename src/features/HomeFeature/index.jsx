import React from 'react';
import { Box } from '@mui/system';
import NewMusic from './components/NewMusic';
import HotCarousel from './components/HotCarousel';
import MusicRank from './components/MusicRank';
import HotTopic from './components/HotTopic';
import TopMusic from './components/TopMusic';
// import PropTypes from 'prop-types';
// HomeFeature.propTypes = {

// };

function HomeFeature(props) {
  return (
    
    <Box>
      <HotCarousel />
      <NewMusic />
      <MusicRank />
      <HotTopic />
      <TopMusic />
    </Box>
   
  );
}

export default HomeFeature;
