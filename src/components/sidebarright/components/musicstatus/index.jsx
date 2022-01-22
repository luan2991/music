import React from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import {
  Button,
  ClickAwayListener,
  Fade,
  IconButton,
  MenuItem,
  Paper,
  Popper,
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
  VolumeMuteOutlined,
  VolumeUpOutlined,
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
    bgcolor: 'rgb(24, 34, 45)',
    color: 'rgba(244,246,248,0.5)',
    zIndex: 1230,
    borderRadius: '6px',
    backgroundColor: 'rgba(24,1,45,1)',
  },
  buttonPlayList: {
    borderRadius: 50,
    backgroundColor: 'rgba(244,246,248,0.02)',
    color: 'rgba(244,246,248,0.5)',
  },
  volumnFont: { fontSize: '24px' },
  volumnSlider: {
    position: 'absolute',
    width: '30px',
    transformOrigin: 'bottom',
    transform: 'scale(0,0)',
    opacity: 1,
    visibility: 'hidden',
    transition: 'transform 0.3s ease-in-out,opacity 0.3s ease-in-out',
    boxShadow: '0 0.2rem 0.4rem rgb(0 0 0 / 20%)',
  },
  volumnHover: {
    '&:hover': {
      '& .volumnSlider': {
        pt: '20px',
        pb: '26px',
        transformOrigin: 'bottom',
        transform: 'scale(1,1)',
        opacity: 1,
        visibility: 'visible',
        borderRadius: '50px',
        bgcolor: 'rgba(24,1,45,1)',
      },
    },
  },
};
function MusicStatus({
  openMore,
  anchorElMore,
  openList,
  handlePopperMoreOpen,
  handlePopperMoreClose,
  handlePopper,
  volume,
  handleVolumeAudio,
  volumeStatus,
  handleVolumeStatus,
}) {
  return (
    <Box sx={{ backgroundColor: 'rgb(24, 34, 45)' }} paddingTop="20px">
      <Box width="272px" margin="auto">
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Stack direction="row" alignItems="flex-end" justifyContent="center" spacing={2}>
            <Box sx={style.volumnHover}>
              <Stack direction="column" justifyContent="flex-end" alignItems="center" spacing={0.5}>
                <Box className="volumnSlider" sx={style.volumnSlider}>
                  <Slider
                    sx={{
                      height: '60px',
                      marginBottom: '10px',
                    }}
                    size="small"
                    max={100}
                    min={0}
                    aria-label="Small"
                    orientation="vertical"
                    value={volumeStatus === true ? 0 : volume * 100}
                    onChange={(_, value) => handleVolumeAudio(value)}
                  />
                </Box>
                <Box
                  onClick={handleVolumeStatus}
                  sx={{ cursor: 'pointer' }}
                  zIndex={10}
                  pl="3px"
                  mb="3px"
                  pr="3px"
                >
                  {(volume >= 0.6 && volumeStatus === false) && (
                    <VolumeUpOutlined sx={style.volumnFont} htmlColor="rgba(244,246,248,0.5)" />
                  )}
                  {(volume > 0.0 && volumeStatus === false) && volume < 0.6 && (
                    <VolumeDownOutlined sx={style.volumnFont} htmlColor="rgba(244,246,248,0.5)" />
                  )}
                  {(volume === 0.0 || volumeStatus === true) && (
                    <VolumeMuteOutlined sx={style.volumnFont} htmlColor="rgba(244,246,248,0.5)" />
                  )}
                </Box>
              </Stack>
            </Box>

            <Button sx={style.buttonPlayList} onClick={handlePopper} variant="contained">
              {!openList && <Typography variant="caption">Danh sách phát</Typography>}
              {openList && <Typography variant="caption">Đang phát</Typography>}
            </Button>

            <Box>
              <Popper
                sx={style.popperpaper}
                open={openMore}
                anchorEl={anchorElMore}
                placement="top-end"
                transition
                disablePortal
              >
                {({ TransitionProps }) => (
                  <ClickAwayListener onClickAway={handlePopperMoreClose}>
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper sx={style.menupaper}>
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
                      </Paper>
                    </Fade>
                  </ClickAwayListener>
                )}
              </Popper>

              <IconButton
                aria-haspopup="true"
                aria-expanded={openMore ? 'true' : undefined}
                color="primary"
                onClick={handlePopperMoreOpen}
              >
                <MoreVert htmlColor="rgba(244,246,248,0.5)" />
              </IconButton>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicStatus;
