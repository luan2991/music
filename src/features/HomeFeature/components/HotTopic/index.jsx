import React from 'react';

import { Box, Skeleton, Stack, /*Typography*/ 
Typography} from '@mui/material';
// import { NavigateNext } from '@mui/icons-material';
// import PropTypes from 'prop-types';
// HotTopic.propTypes = {

// };

function HotTopic(props) {
  return (
    <Box width="100%" marginTop="30px">
      <Box
        sx={{
          flexGrow: 1,
          margin: '0 auto',
          position: 'relative',
          width: '100%',
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
           Chủ đề Hot
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
            {Array.from({ length: 4 }, (index) => (
              <Skeleton
                variant="rectangular"
                key={index}
                animation="wave"
                sx={{
                  borderRadius:'10px',
                  height: { xs: '140px', sm: '160px', md: '180px', lg: '200px' },
                  width: '23%',
                  bgcolor: '#353535',
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

export default HotTopic;
