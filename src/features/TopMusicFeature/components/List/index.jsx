import React from 'react';
import { Box } from '@mui/system';
import { IconButton, Stack, Typography } from '@mui/material';
import { DownloadOutlined } from '@mui/icons-material';
import ItemTop from '../Item';
// import PropTypes from 'prop-types';
// ListTop.propTypes = {

// };

function ListTop({ area, topic, darkMode }) {
  let find = area.find((item) => item.topic === topic);
  console.log(find);
  return (
    <Box width="100%">
      <Box
        width="100%"
        height="100px"
        sx={{
          background: darkMode ? 
            'linear-gradient(38deg, rgba(2,0,36,1) 0%, rgba(0,29,154,1) 50%, rgba(48,88,96,1) 100%)':
            'linear-gradient(354deg, rgba(172,232,24,1) 0%, rgba(191,204,15,1) 35%, rgba(0,162,194,1) 100%);',
        }}
      >
        <Stack
          mt={3}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Box ml={2}>
            <Typography
              sx={{ fontSize: '40px', fontWeight: '500', color: darkMode ?  'rgba(244,246,248,0.88)' : '#353535' }}
            >
              Top 100
            </Typography>
            <Typography
              ml={1}
              sx={{ fontSize: '14px', fontWeight: '400', color: darkMode ?  'rgba(244,246,248,0.88)' : '#353535' }}
            >{find.title}</Typography>
          </Box>
          <Box>
            <Stack pr={2} direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
              <IconButton>
                <DownloadOutlined sx={{ fontSize: '40px' }} htmlColor={darkMode ?  'rgba(244,246,248,0.88)' : '#353535'} />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box width="100%" mt={1}>
        {Array.from({ length: 8 }, (index) => (
          <ItemTop darkMode={darkMode} />
        ))}
      </Box>
    </Box>
  );
}

export default ListTop;
