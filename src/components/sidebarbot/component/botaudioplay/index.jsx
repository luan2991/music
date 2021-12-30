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

// BotAudioPlay.propTypes = {

// };

const iconColor = 'rgba(244,246,248,0.5)';

function BotAudioPlay({
  isPlay,
  handlePausePlayClick,
  handlePrevNextClick,
  repeat,
  onRepeat,
  random,
  onRandom,
}) {
  return (
    <Box>
      <Box>
        <Stack direction="row" alignItems="center" spacing={2}>
          {/*Random Button */}
          <Tooltip title="Ngẫu nhiên" placement="top">
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
          <Tooltip title="Bài trước" placement="top">
            <IconButton onClick={() => handlePrevNextClick(-1)}>
              <SkipPrevious htmlColor={iconColor} />
            </IconButton>
          </Tooltip>

          {/*Button Play Music*/}
          <Tooltip title={isPlay ? 'Tạm dừng' : 'Phát'} placement="top">
            <Box>
              <IconButton onClick={handlePausePlayClick}>
                {!isPlay && <PlayCircleOutlined htmlColor={iconColor} sx={{ fontSize: 27 }} />}
                {isPlay && <PauseCircleOutlined color="primary" sx={{ fontSize: 27 }} />}
              </IconButton>
            </Box>
          </Tooltip>

          {/*Next Button*/}
          <Tooltip title="Bài sau" placement="top">
            <IconButton onClick={() => handlePrevNextClick(1)}>
              <SkipNext htmlColor={iconColor} />
            </IconButton>
          </Tooltip>

          {/*Repeat Button*/}
          <Tooltip title={repeat === 2 ? 'Lặp lại 1 bài' : 'Lặp lại'} placement="top">
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
  );
}

export default BotAudioPlay;
