import React from 'react';
import { Box } from '@mui/system';
import { IconButton, Stack, Typography } from '@mui/material';
import { DownloadOutlined } from '@mui/icons-material';
import ItemTop from '../Item';
// import PropTypes from 'prop-types';
// ListTop.propTypes = {

// };

function ListTop({ area, topic }) {
  let find = area.find((item) => item.topic === topic);
  console.log(find);
  return (
    <Box width="100%">
      <Box
        width="100%"
        height="100px"
        sx={{
          background:
            'linear-gradient(38deg, rgba(2,0,36,1) 0%, rgba(0,29,154,1) 50%, rgba(48,88,96,1) 100%)',
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
              sx={{ fontSize: '40px', fontWeight: '500', color: 'rgba(244,246,248,0.88)' }}
            >
              Top 100
            </Typography>
            <Typography
              ml={1}
              sx={{ fontSize: '14px', fontWeight: '400', color: 'rgba(255,255,255,0.5)' }}
            >{find.title}</Typography>
          </Box>
          <Box>
            <Stack pr={2} direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
              <IconButton>
                <DownloadOutlined sx={{ fontSize: '40px' }} htmlColor="rgba(244,246,248,0.88)" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box width="100%" mt={1}>
        {Array.from({ length: 4 }, (index) => (
          <ItemTop />
        ))}
      </Box>
    </Box>
  );
}

export default ListTop;
