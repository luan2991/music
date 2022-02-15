import React from 'react';
import { Box, Skeleton, Stack, /*Typography*/ 
Typography} from '@mui/material';
// import { NavigateNext } from '@mui/icons-material';

// import PropTypes from 'prop-types';
// TopMusic.propTypes = {

// };

function TopMusic(props) {
  return (
    <Box width="100%" marginTop="30px" height={500}>
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
            color: props.darkMode ?  '#FFFFFF':'#353535',
          }}
          variant="h4"
          component="div"
        >
         Top 100
        </Typography>
        {props.allTopMusic('Tất cả')}
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
            {Array.from({ length: 4 }, (index) => (
              <Skeleton
                key={index}
                animation="wave"
                variant="rectangular"
                sx={{
                  borderRadius:'10px',
                  height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
                  width: '23%',
                  bgcolor: props.darkMode ? '#353535' : '',
                  transition:'height 0.2s',
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default TopMusic;
