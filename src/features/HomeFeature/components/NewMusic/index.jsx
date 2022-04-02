import React from 'react';

import { Box, IconButton, Skeleton, Typography } from '@mui/material';

// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation } from 'swiper';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import NewMusicItem from './components/Item';
import { Link } from 'react-router-dom';
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material';
NewMusic.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  allNewMusic: PropTypes.any,
  newSongList: PropTypes.array,
};
NewMusic.defaultProps = { newSongList: [] };

function NewMusic(props) {
  return (
    <Box pl={2} pr={2} marginTop="30px">
      <Box
        sx={{
          flexGrow: 1,
          margin: '0 auto',
          position: 'relative',
          width: '100%',
          '&:hover': {
            '& .allNew': {
              opacity: 1,
              transform: 'translateX(0px)',
            },
          },
        }}
      >
        {/* <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            borderRadius:'50px',
            height: '40px',
            width: { xs: '260px', sm: '180px', md: '220px', lg: '260px' },
            bgcolor: '#353535',
          }}
        /> */}

        <Box sx={{ width: '100%' }}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.prevNewSong',
              nextEl: '.nextNewSong',
            }}
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            allowTouchMove={false}
            spaceBetween={10}
            slidesPerView={5}
            slidesPerGroup={5}
            style={{ width: '100%' }}
          >
            <Box
              mb={2}
              slot="container-start"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Link to="new-music?page=1" style={{ textDecoration: 'none' }}>
                <Typography
                  sx={{
                    color: props.darkMode ? '#FFFFFF' : '#353535',
                    '&:hover': {
                      color: props.darkMode ? '#2DAAED' : '#353535',
                    },
                  }}
                  variant="h4"
                  component="div"
                >
                  Nhạc mới
                </Typography>
              </Link>
              <Box>
                <IconButton size="small" className="prevNewSong">
                  <ArrowBackIosNewRounded htmlColor={props.darkMode ? '#2DAAED' : '#353535'} />
                </IconButton>
                <IconButton size="small" className="nextNewSong">
                  <ArrowForwardIosRounded htmlColor={props.darkMode ? '#2DAAED' : '#353535'} />
                </IconButton>
              </Box>
            </Box>
            {typeof props.newSongList !== 'undefined' &&
              props.newSongList.length > 0 &&
              props.newSongList.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      borderRadius: '10px',
                      width: '100%',
                    }}
                  >
                    <NewMusicItem
                      item={item}
                      darkMode={props.darkMode}
                      handleChangeSong={props.handleChangeSong}
                    />
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>
          {(typeof props.newSongList === 'undefined' || props.newSongList.length === 0) && (  
          <Stack direction="row" justifyContent="flex-start" alignItems='flex-start' spacing={2}>
            {Array.from({ length: 4 }, (item, index) => (
              <Skeleton
                key={index}
                animation="wave"
                variant="rectangular"
                sx={{
                  borderRadius: '10px',
                  height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
                  width: '23%',
                  bgcolor: props.darkMode ? '#353535' : '',
                  transition: 'height 0.2s',
                }}
              />
            ))}
          </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default NewMusic;
