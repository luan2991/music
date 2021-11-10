import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import {
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Popover,
  Slider,
  Stack,
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

function MusicStatus({
  open,
  anchorEl,
  openMore,
  anchorElMore,
  handlePopoverOpen,
  handlePopoverClose,
  handlePopoverMoreOpen,
  handlePopoverMoreClose,
}) {
  return (
    <Box bgcolor="rgba(0, 0, 0, 0.87)" paddingTop="20px">
      <Box width="272px" margin="auto">
        <Box display="flex" justifyContent="space-between">
          <Stack direction="row" sx={{ mb: 1, px: 1 }} alignItems="center" spacing={2}>
            <Box>
              <Popover
                sx={{
                  '& .MuiPopover-paper': {
                    borderRadius: '25px',
                    bgcolor: 'rgb(24, 34, 45)',
                  },
                }}
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
                      // getAriaValueText={valuetext}
                      defaultValue={30}
                      // onKeyDown={preventHorizontalKeyboardNavigation}
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
              variant="contained"
            >
              Danh sách phát
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
                sx={{
                  '& .MuiMenu-paper': {
                    bgcolor: 'rgb(24, 34, 45)',
                  },
                }}
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
                <MenuList sx={{ color: 'rgba(244,246,248,0.5)' }}>
                  <MenuItem>
                    <ListItemText sx={{ paddingRight: '5px' }}>Thêm vào chờ phát</ListItemText>
                    <ListItemIcon>
                      <LibraryMusic htmlColor="rgba(244,246,248,0.5)" fontSize="small" />
                    </ListItemIcon>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText sx={{ paddingRight: '5px' }}>Sao chép Link</ListItemText>
                    <ListItemIcon>
                      <InsertLink htmlColor="rgba(244,246,248,0.5)" fontSize="small" />
                    </ListItemIcon>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText sx={{ paddingRight: '5px' }}>Đi đến bài hát</ListItemText>
                    <ListItemIcon>
                      <MusicNoteRounded htmlColor="rgba(244,246,248,0.5)" fontSize="small" />
                    </ListItemIcon>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicStatus;
