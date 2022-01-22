import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Stack, Tooltip, Typography } from '@mui/material';
import NewMusicItem from './components/Item';
import { PlayCircleFilled } from '@mui/icons-material';

// NewMusicFeature.propTypes = {

// };

function NewMusicFeature(props) {
  return (
    <Box>
      <Box mt="60px" width="100%" >
        <Box
          width="100%"
          height="120px"
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
                Danh Sách Nhạc Mới
              </Typography>
            </Box>
          </Stack>
          <Tooltip title="Phát Toàn Bộ" arrow placement="right">
            <PlayCircleFilled
              sx={{ fontSize: '50px', marginLeft: 2 }}
              htmlColor="rgba(244,246,248,0.88)"
            />
          </Tooltip>
        </Box>
        <Box width="100%" mt={1}>
          {Array.from({ length: 6 }, (index) => (
            <NewMusicItem />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default NewMusicFeature;
