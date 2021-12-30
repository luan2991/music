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
    <Box
      sx={{
        bgcolor: 'rgb(24, 34, 45)',
        width: {
          xs: 'calc(100% - 50px)',
          sm: 'calc(100% - 50px)',
          md: 'calc(100% - 50px)',
          lg: 'calc(100% - 560px)',
        },
        marginRight: { xs: '50px', sm: '50px', md: '50px', lg: '320px' },
        marginLeft: { xs: '50px', sm: '50px', md: '50px', lg: '240px' },
      }}
    >
      <Box
        sx={{
          width: {
            xs: 'calc(100% - 10px)',
            sm: 'calc(100% - 10px)',
            md: 'calc(100% - 10px)',
            lg: 'calc(100% - 20px)',
          },
          marginTop: '2em',
        }}
        margin="auto"
      >
        <HotCarousel />
        <NewMusic />
        <MusicRank />
        <HotTopic />
        <TopMusic />
      </Box>
    </Box>
  );
}

export default HomeFeature;
