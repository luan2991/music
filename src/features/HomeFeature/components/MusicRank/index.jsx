import React from 'react';

import { Box, Skeleton, Stack,/* Typography*/ } from '@mui/material';
// import { NavigateNext } from '@mui/icons-material';

// import PropTypes from 'prop-types';
// MusicRank.propTypes = {

// };

function MusicRank(props) {
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
        {/* <Box
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
            BXH Bài Hát
          </Typography>
        </Box> */}
        <Skeleton
          animation="wave"
          sx={{
            height: { xs: '60px', sm: '60px', md: '60px', lg: '60px' },
            width: { xs: '260px', sm: '180px', md: '220px', lg: '260px' },
            bgcolor: '#353535',
          }}
        />
        <Box marginTop="-50px" position="relative">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            {Array.from({ length: 3 }, (index) => (
              <Skeleton
                key={index}
                animation="wave"
                sx={(theme) => ({
                  width: {
                    xs: '120px',
                    sm: '200px',
                    md: '240px',
                    lg: '230px',
                    xl: '240px',
                  },
                  height: {
                    xs: '180px',
                    sm: '200px',
                    md: '280px',
                    lg: '300px',
                  },
                  bgcolor: '#353535',
                })}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicRank;
