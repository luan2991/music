import React from 'react';
import { Box, IconButton, Skeleton, Stack /*Typography*/, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import NewPlaylistItem from './../Item/';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation } from 'swiper';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material';
NewPlayList.propTypes = {
  darkMode: PropTypes.bool,
  newPlaylists: PropTypes.array,
  handlePlayListSong: PropTypes.func.isRequired,
};

function NewPlayList(props) {
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
        <Box position="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.prevNewPlaylist',
              nextEl: '.nextNewPlaylist',
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
              <Typography
                sx={{
                  color: props.darkMode ? '#FFFFFF' : '#353535',
                }}
                variant="h4"
                component="div"
              >
                Playlist Mới Nhất
              </Typography>
              <Box>
                <IconButton size="small" className="prevNewPlaylist">
                  <ArrowBackIosNewRounded htmlColor={props.darkMode ? '#2DAAED' : '#353535'} />
                </IconButton>
                <IconButton size="small" className="nextNewPlaylist">
                  <ArrowForwardIosRounded htmlColor={props.darkMode ? '#2DAAED' : '#353535'} />
                </IconButton>
              </Box>
            </Box>
            {typeof props.newPlaylists !== 'undefined' &&
              props.newPlaylists.length > 0 &&
              props.newPlaylists.map((item, index) => (
                <SwiperSlide key={index}>
                  <NewPlaylistItem
                    item={item}
                    darkMode={props.darkMode}
                    handlePlayListSong={props.handlePlayListSong}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          {(typeof props.newPlaylists === 'undefined' || props.newPlaylists.length === 0) && (
            <Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={2}>
              {Array.from({ length: 4 }, (item, index) => (
                <Skeleton
                  variant="rectangular"
                  key={index}
                  animation="wave"
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

export default NewPlayList;
