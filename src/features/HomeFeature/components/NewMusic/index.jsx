import React from 'react';

import { Box, Skeleton, Stack, Typography, /*Typography*/ } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
// import { NavigateNext } from '@mui/icons-material';
// import PropTypes from 'prop-types';
// NewMusic.propTypes = {

// };

function NewMusic(props) {
 
  return (
    <Box width="100%" marginTop="30px">
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            
          }}
        >
          <Typography
            sx={{
              color: '#FFFFFF',
            }}
            variant="h4"
            component="div"
          >
            Nhạc mới
          </Typography>
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
            Tất cả
            <NavigateNext />
          </Typography>
        </Box>
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
        <Box mt={2} position="relative">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            {Array.from(
              { length: 4 },
              (index) => (
                <Skeleton
                  key={index}
                  animation="wave"
                  variant="rectangular"
                  sx={{
                    borderRadius:'10px',
                    height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
                    width: '23%',
                    bgcolor: '#353535',
                    transition:'height 0.2s',
                  }}
                />
              )
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default NewMusic;
