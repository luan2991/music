import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import {
  InsertLink,
  LibraryMusic,
  MoreVert,
  MusicNoteRounded,
  VolumeDownOutlined,
} from '@mui/icons-material';


// MusicStatus.propTypes = {

// };
const style = {
  typography: {
    '&.MuiTypography-root': {
      fontSize: '13px',
      marginLeft: '5px',
    },
  },
  menupaper: {
    '& .MuiMenu-paper': {
      bgcolor: 'rgb(24, 34, 45)',
      color: 'rgba(244,246,248,0.5)',
    },
  },
  popoverpaper: {
    '& .MuiPopover-paper': {
      borderRadius: '25px',
      bgcolor: 'rgb(24, 34, 45)',
    },
  },
};
function MusicStatus({
  open,
  anchorEl,
  openMore,
  anchorElMore,
  openList,
  handlePopoverOpen,
  handlePopoverClose,
  handlePopoverMoreOpen,
  handlePopoverMoreClose,
  handlePopper,
}) {
  return (
    <Box sx={{backgroundColor:'rgb(24, 34, 45)'}} paddingTop="20px">
      <Box width="272px"  margin='auto'>
        <Box  display="flex" justifyContent="space-around" alignItems='center' >
          <Stack direction="row" alignItems='center' spacing={2}>
            <Box>
              <Popover
                sx={style.popoverpaper}
                elevation={3}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
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
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="center"
                  height="130px"
                >
                  <Stack
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={1}
                  >
                    <Slider
                      sx={{
                        height: '80px',
                      }}
                      size="small"
                      max={100}
                      min={0}
                      aria-label="Small"
                      orientation="vertical"
                      defaultValue={30}
                    />
                    <VolumeDownOutlined htmlColor="rgba(244,246,248,0.5)" />
                  </Stack>
                </Box>
              </Popover>
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
              onClick={handlePopper}
              variant="contained"
            >
             {!openList && (<Typography variant="caption">Danh sách phát</Typography>)  } 
             { openList && (<Typography variant="caption">Đang phát</Typography>)  }
            </Button>
            
           
            <Box>
              <IconButton
                aria-haspopup="true"
                aria-expanded={openMore ? 'true' : undefined}
                color="primary"
                onClick={handlePopoverMoreOpen}
              >
                <MoreVert htmlColor="rgba(244,246,248,0.5)" />
              </IconButton>
              <Menu
                sx={style.menupaper}
                onClose={handlePopoverMoreClose}
                open={openMore}
                anchorEl={anchorElMore}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <MenuItem>
                  <LibraryMusic htmlColor="rgba(244,246,248,0.5)" fontSize="small" />
                  <Typography sx={style.typography}>Thêm vào chờ phát</Typography>
                </MenuItem>
                <MenuItem>
                  <InsertLink htmlColor="rgba(244,246,248,0.5)" fontSize="small" />
                  <Typography sx={style.typography}>Sao chép Link</Typography>
                </MenuItem>
                <MenuItem>
                  <MusicNoteRounded htmlColor="rgba(244,246,248,0.5)" fontSize="small" />
                  <Typography sx={style.typography}>Đi đến bài hát</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicStatus;
