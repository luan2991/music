import React from 'react';

import { Box, Stack /* Typography*/, Typography } from '@mui/material';

// import { NavigateNext } from '@mui/icons-material';

// import PropTypes from 'prop-types';
// MusicRank.propTypes = {

// };

function MusicRank(props) {
  return (
    <Box pl={2} pr={2} marginTop="30px">
      <Box
        sx={{
          flexGrow: 1,
          margin: '0 auto',
          position: 'relative',

          '&:hover': {
            '& .allNew': {
              opacity: 1,
              transform: 'translateX(0px)',
            },
          },
        }}
      >
        <Box
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
            BXH Bài Hát
          </Typography>
        </Box>
        {/* <Skeleton
          animation="wave"
          sx={{
            borderRadius:'50px',
            height: '40px',
            width: { xs: '260px', sm: '180px', md: '220px', lg: '260px' },
            bgcolor: '#353535',
          }}
          variant="rectangular"
        /> */}
        {}
        <Box mt={2} position="relative">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box
              sx={{
                cursor: 'pointer',
                borderRadius: '10px',
                overflow: 'hidden',
                width: '30%',
                height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
              }}
            >
              <Box
                sx={{
                  opacity: 0.7,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundImage: `url(${require('./../../images/vn_rank.png').default})`,
                  backgroundSize: 'cover',
                  width: '100%',
                  height: '100%',
                  '&:hover': {
                    transform: `scale(1.1)`,
                    transition: 'transform 0.5s',
                  },
                }}
              >
                <Typography
                  sx={{ opacity: 1, fontSize: '2em', color: '#FFFFFF', fontWeight: '500' }}
                >
                  Việt Nam
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                cursor: 'pointer',
                borderRadius: '10px',
                overflow: 'hidden',
                width: '30%',
                height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
              }}
            >
              <Box
                sx={{
                  opacity: 0.7,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${require('./../../images/usuk_rank.jpg').default})`,
                  backgroundSize: 'cover',
                  '&:hover': {
                    transform: `scale(1.1)`,
                    transition: 'transform 0.5s',
                  },
                }}
              >
                <Typography
                  sx={{ opacity: 1, fontSize: '2em', color: '#FFFFFF', fontWeight: '500' }}
                >
                  Âu Mỹ
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                cursor: 'pointer',
                borderRadius: '10px',
                width: '30%',
                overflow: 'hidden',
                height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
              }}
            >
              <Box
                sx={{
                  opacity: 0.7,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${require('./../../images/kpop_rank.jpg').default})`,
                  backgroundSize: 'cover',
                  '&:hover': {
                    transform: `scale(1.1)`,
                    transition: 'transform 0.5s',
                  },
                }}
              >
                <Typography
                  sx={{ opacity: 1, fontSize: '2em', color: '#FFFFFF', fontWeight: '500' }}
                >
                  KPOP
                </Typography>
              </Box>
            </Box>
            {/* {Array.from({ length: 3 }, (item,index) => (
              <Skeleton
                key={index}
                animation="wave"
                variant="rectangular"
                sx={{
                  borderRadius: '10px',
                  width: '30%',
                  height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
                  bgcolor: props.darkMode ? '#353535' : '',
                  transition:'height 0.2s',
                }}
              />
            ))} */}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicRank;
