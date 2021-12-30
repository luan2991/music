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
  add3Dots,
  isPlay
}) {
  return (
    <Box>
      <Grow in={openList} timeout={500} transformOrigin="bottom" >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            // zIndex: 1,
            height: 'calc(100vh - 16em)',
            overflow: 'scroll',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            backgroundColor: 'rgb(24, 34, 45)',
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
              <Typography sx={{ fontSize: '0.8rem', color: 'rgba(244,246,248,0.88)' }}>
                Đang phát
              </Typography>
              <IconButton onClick={handlePopper}>
                <KeyboardArrowDownRounded fontSize="small" htmlColor="rgba(244, 246, 248, 0.5)" />
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
                    <Box 
                    position='relative'
                      width="40px"
                      height="40px"
                      bgcolor="yellow"
                      sx={{ borderRadius: '5px' }}
                    >
                    {!isPlay &&  <PlayArrow fontSize='small' htmlColor='#FFFFFF' sx={{position:'absolute', bottom: 0, right:0}}/>}
                    {isPlay &&  <Pause fontSize='small' htmlColor='#FFFFFF' sx={{position:'absolute', bottom: 0, right:0}}/>}
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(244,246,248,0.88)', fontSize: '14px' }}>
                        {add3Dots(titleAudio, 27)}
                      </Typography>
                      <Typography sx={{ color: 'rgba(244, 246, 248, 0.5)', fontSize: '13px' }}>
                        {add3Dots(artistAudio, 27)}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
                <IconButton sx={{ '&:hover': { backgroundColor: 'rgba(244,246,248,0.02);' } }}>
                  <MoreVertRounded htmlColor="rgba(244, 246, 248, 0.5)" />
                </IconButton>
              </Stack>
            </Box>
            <Box p="24px 0 0 24px">
              <Typography
                sx={{ fontSize: '14px', fontWeight: 500, color: 'rgba(244, 246, 248, 0.5)' }}
              >
                Danh sách bài hát
              </Typography>
            </Box>
            <Divider sx={{ backgroundColor: 'rgba(244, 246, 248, 0.5)', margin: '8px 24px 0' }} />
            <Stack direction="column">
              <Box bgcolor="rgba(244,246,248,0.02)">
                {musiclist.map((item, index) => (
                  <Box p="14px 24px" key={index}>
                    <MusicItem
                      onClickChangeMusic={onClickChangeMusic}
                      add3Dots={add3Dots}
                      item={item}
                      index={index}
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
