import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Button, Popover, Slider, Stack } from '@mui/material';
import { MoreVert, VolumeDownOutlined } from '@mui/icons-material';

// MusicStatus.propTypes = {

// };

function MusicStatus({ open, anchorEl, handlePopoverOpen, handlePopoverClose }) {
  return (
    <Box bgcolor="rgba(0, 0, 0, 0.87)" paddingTop="20px">
      <Box width="272px" margin="auto">
        <Box display="flex" justifyContent="space-between">
          <Popover
            sx={{
              '& .MuiPaper-root': {
                borderRadius: '25px',
              },
            }}
            open={anchorEl}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <Box
              onMouseLeave={handlePopoverClose}
              width={30}
              bgcolor="rgba(0, 0, 0, 0.87)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="121px"
            >
              <Slider
                sx={{
                  height: '80px',
                  '& .MuiSlider-track': {
                    border: 'none',
                  },
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                  },
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                }}
                size="small"
                max={100}
                min={0}
                aria-label="Small"
                orientation="vertical"
                // getAriaValueText={valuetext}
                defaultValue={30}
                // onKeyDown={preventHorizontalKeyboardNavigation}
              />
            </Box>
          </Popover>
          <Stack direction="row" sx={{ mb: 1, px: 1 }} alignItems="center" spacing={2}>
            <Box>
              <VolumeDownOutlined
                onMouseEnter={handlePopoverOpen}
                htmlColor="rgba(244,246,248,0.5)"
              />
            </Box>
            <Button
              style={{
                borderRadius: 50,
                backgroundColor: 'rgba(244,246,248,0.02)',
                color: 'rgba(244,246,248,0.5)',
              }}
              variant="contained"
            >
              Danh sách phát
            </Button>
            <MoreVert htmlColor="rgba(244,246,248,0.5)" />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicStatus;
