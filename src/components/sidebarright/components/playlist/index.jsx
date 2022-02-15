import { KeyboardArrowDownRounded, MoreVertRounded, Pause, PlayArrow } from '@mui/icons-material';
import { Divider, Grow, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MusicItem from './components/item';

// import PropTypes from 'prop-types';

// PlayList.propTypes = {

// };

function PlayList({
  openList,
  titleAudio,
  artistAudio,
  handlePopper,
  musiclist,
  onClickChangeMusic,
  darkMode,
  isPlay,
}) {
  return (
    <Box>
      <Grow in={openList} timeout={500} transformOrigin="bottom">
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,

            height: 'calc(100vh - 16em)',
            overflow: 'scroll',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            backgroundColor: darkMode ? 'rgb(24, 34, 45)' : '#fff',
            '&::-webkit-scrollbar': {
              width: 0,
              height: 0,
            },
          }}
          display="flex"
          width="100%"
        >
          <Box pt={2} width="100%">
            <Box ml={2} display="flex" justifyContent="space-between" alignItems="center">
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  color: darkMode ? 'rgba(244,246,248,0.88)' : 'rgba(28,30,32,0.88)',
                }}
              >
                Đang phát
              </Typography>
              <IconButton onClick={handlePopper}>
                <KeyboardArrowDownRounded
                  fontSize="small"
                  htmlColor={darkMode ? 'rgba(244, 246, 248, 0.5)' : 'rgba(0, 0, 0, 0.54)'}
                />
              </IconButton>
            </Box>
            <Box ml={2} pr={2}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                  >
                    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1} width={200}>
                      <Box
                        position="relative"
                        width="40px"
                        height="40px"
                        bgcolor="yellow"
                        sx={{ borderRadius: '5px' }}
                      >
                        {!isPlay && (
                          <PlayArrow
                            fontSize="small"
                            htmlColor="#FFFFFF"
                            sx={{ position: 'absolute', bottom: 0, right: 0 }}
                          />
                        )}
                        {isPlay && (
                          <Pause
                            fontSize="small"
                            htmlColor="#FFFFFF"
                            sx={{ position: 'absolute', bottom: 0, right: 0 }}
                          />
                        )}
                      </Box>
                      <Box width={150}>
                        <Box
                          sx={{
                            
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          <Typography
                            noWrap
                            sx={{
                              color: darkMode ? 'rgba(244,246,248,0.88)' : 'rgba(28,30,32,0.88)',
                              fontSize: '14px',
                            }}
                          >
                            {titleAudio}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          <Typography
                            noWrap
                            sx={{
                              color: darkMode ? 'rgba(244, 246, 248, 0.5)' : 'rgba(28,30,32,0.5)',
                              fontSize: '13px',
                            }}
                          >
                            {artistAudio}
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
                <IconButton
                  sx={{
                    '&:hover': {
                      backgroundColor: darkMode ? 'rgba(244,246,248,0.02)' : 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  <MoreVertRounded
                    htmlColor={darkMode ? 'rgba(244, 246, 248, 0.5)' : 'rgba(0, 0, 0, 0.54)'}
                  />
                </IconButton>
              </Stack>
            </Box>
            <Box p="24px 0 0 24px">
              <Typography
                sx={{ fontSize: '14px', fontWeight: 500, color:  darkMode ? 'rgba(244,246,248,0.88)' : 'rgba(28,30,32,0.88)' }}
              >
                Danh sách bài hát
              </Typography>
            </Box>
            <Divider sx={{ backgroundColor: 'rgba(244, 246, 248, 0.5)', margin: '8px 24px 0' }} />
            <Stack direction="column">
              <Box>
                {musiclist.map((item, index) => (
                  <Box p="14px 24px" key={index}>
                    <MusicItem
                      onClickChangeMusic={onClickChangeMusic}
                      item={item}
                      index={index}
                      darkMode={darkMode}
                    />
                  </Box>
                ))}
              </Box>
            </Stack>
          </Box>
        </Box>
      </Grow>
    </Box>
  );
}

export default PlayList;
