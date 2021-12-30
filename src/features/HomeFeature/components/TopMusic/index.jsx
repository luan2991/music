import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Skeleton, Stack, /*Typography*/ } from '@mui/material';
// import { NavigateNext } from '@mui/icons-material';

// import PropTypes from 'prop-types';
// TopMusic.propTypes = {

// };

function TopMusic(props) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));
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
         Top 100
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
            {Array.from(
              { length: matchesSM ? 2 : matchesMD ? 3 : matchesLG ? 4 : matchesXL ? 4 : 4 },
              (index) => (
                <Skeleton
                  key={index}
                  animation="wave"
                  sx={{
                    height: { xs: '300px', sm: '300px', md: '300px', lg: '300px' },
                    width: { xs: '240px', sm: '160px', md: '200px', lg: '220px' },
                    bgcolor: '#353535',
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

export default TopMusic;
