import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  RepeatOneRounded,
  RepeatRounded,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from '@mui/icons-material';
import { IconButton, Stack, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// import PropTypes from 'prop-types';

// MusicPlay.propTypes = {

// };

const iconColor = 'rgba(244,246,248,0.5)';

function MusicPlay({
  isPlay,
  handlePausePlayClick,
  handlePrevNextClick,
  repeat,
  onRepeat,
  random,
  onRandom,
}) {
  return (
    <Box
      sx={{ backgroundColor: 'rgb(24, 34, 45)' }}
      paddingBottom={10}
      color="rgba(244,246,248,0.5)"
      paddingTop="10px"
    >
      <Box width="272px" margin="auto">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Stack
            direction="row"
            width="272px"
            sx={{ mb: 1, px: 1 }}
            alignItems="center"
            spacing={2}
          >
            {/*Random Button */}
            <Tooltip title="Ngẫu nhiên" placement="bottom">
              <Box>
                {random === false && (
                  <IconButton onClick={() => onRandom(true)}>
                    <Shuffle htmlColor={iconColor} />
                  </IconButton>
                )}
                {random === true && (
                  <IconButton onClick={() => onRandom(false)}>
                    <Shuffle color="primary" />
                  </IconButton>
                )}
              </Box>
            </Tooltip>

            {/*Prev Button*/}
            <Tooltip title="Bài trước" placement="bottom">
              <IconButton onClick={() => handlePrevNextClick(-1)}>
                <SkipPrevious htmlColor={iconColor} />
              </IconButton>
            </Tooltip>

            {/*Button Play Music*/}
            <Tooltip title={isPlay ? 'Tạm dừng' : 'Phát'} placement="bottom">
              <Box>
                <IconButton onClick={handlePausePlayClick}>
                  {!isPlay && <PlayCircleOutlined htmlColor={iconColor} sx={{ fontSize: 45 }} />}
                  {isPlay && <PauseCircleOutlined color="primary" sx={{ fontSize: 45 }} />}
                </IconButton>
              </Box>
            </Tooltip>

            {/*Button Play Music popover*/}

            {/*Next Button*/}
            <Tooltip title="Bài sau" placement="bottom">
              <IconButton onClick={() => handlePrevNextClick(1)}>
                <SkipNext htmlColor={iconColor} />
              </IconButton>
            </Tooltip>

            {/*Repeat Button*/}
            <Tooltip
              title={repeat === 2 ? 'Lặp lại 1 bài' : 'Lặp lại'}
              placement={repeat === 2 ? 'bottom-end' : 'bottom'}
            >
              <Box>
                {repeat === 0 && (
                  <IconButton onClick={() => onRepeat(1)}>
                    <RepeatRounded htmlColor={iconColor} />
                  </IconButton>
                )}
                {repeat === 1 && (
                  <IconButton onClick={() => onRepeat(2)}>
                    <RepeatRounded color="primary" />
                  </IconButton>
                )}
                {repeat === 2 && (
                  <IconButton onClick={() => onRepeat(0)}>
                    <RepeatOneRounded color="primary" />
                  </IconButton>
                )}
              </Box>
            </Tooltip>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicPlay;
