import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import MusicDisk from './components/musicdisk';
import MusicPlay from './components/musicplay';
import MusicSlider from './components/musicslider';
import MusicStatus from './components/musicstatus';
import PlayList from './components/playlist';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

SidebarRight.propTypes = {
  isPlay: PropTypes.bool,
  titleAudio: PropTypes.string,
  artistAudio: PropTypes.array,
  open: PropTypes.bool,
  openMore: PropTypes.bool,
  anchorEl: PropTypes.any,
  openList: PropTypes.bool,
  anchorElList: PropTypes.any,
  anchorElMore: PropTypes.any,
  handlePopper: PropTypes.func,
  handlePopoverOpen: PropTypes.func,
  handlePopoverClose: PropTypes.func,
  handlePopperMoreOpen: PropTypes.func,
  handlePopperMoreClose: PropTypes.func,
  onClickChangeMusic: PropTypes.func,
  volumeAudio: PropTypes.number,
  handleVolumeAudio: PropTypes.func,
  volumeStatus: PropTypes.bool,
  handleVolumeStatus: PropTypes.func,
  formatDuration: PropTypes.func,
  duration: PropTypes.number,
  currentTime: PropTypes.number,
  handleTimeSliderChange: PropTypes.func,
  handlePausePlayClick: PropTypes.func,
  handlePrevNextClick: PropTypes.func,
  repeat: PropTypes.number,
  onRepeat: PropTypes.func,
  random: PropTypes.bool,
  onRandom: PropTypes.func,
  darkMode: PropTypes.bool,
  songImg: PropTypes.string,
  songId: PropTypes.string,
  playlist: PropTypes.array,
  formatView: PropTypes.func,
  handlePopperPLMoreClose: PropTypes.func,
  openPLMore: PropTypes.bool,
  anchorElPLMore: PropTypes.any,
  handlePopperPLMoreOpen: PropTypes.func,
};

const drawerWidth = 320;
function SidebarRight(props) {
  const widthModal = useSelector((state) => state.theme.widthModal);
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: props.darkMode ? 'rgb(24, 34, 45)' : '#fff',
        '&:focus': { outline: 'none' },
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          // display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            marginRight: { sx: 0, sm: 0, md: 0, lg: `${widthModal}px` },
            borderColor: props.darkMode ? 'rgb(24, 56, 50)' : 'rgba(28,30,32,0.05)',
            width: { xs: 0, sm: 0, md: 0, lg: drawerWidth },

            transition: 'width 0.2s',
          },
          zIndex: 1205,
        }}
        anchor="right"
      >
        <MusicDisk
          isPlay={props.isPlay}
          titleAudio={props.titleAudio}
          artistAudio={props.artistAudio}
          darkMode={props.darkMode}
          songImg={props.songImg}
          songId={props.songId}
        />
        <PlayList
          openList={props.openList}
          anchorEl={props.anchorElList}
          titleAudio={props.titleAudio}
          artistAudio={props.artistAudio}
          handlePopper={props.handlePopper}
          onClickChangeMusic={props.onClickChangeMusic}
          isPlay={props.isPlay}
          darkMode={props.darkMode}
          songImg={props.songImg}
          songId={props.songId}
          playlist={props.playlist}
          formatView={props.formatView}
          handlePopperPLMoreOpen={props.handlePopperPLMoreOpen}
          handlePopperPLMoreClose={props.handlePopperPLMoreClose}
          openPLMore={props.openPLMore}
          anchorElPLMore={props.anchorElPLMore}
        />
        <MusicStatus
          openMore={props.openMore}
          anchorElMore={props.anchorElMore}
          handlePopperMoreOpen={props.handlePopperMoreOpen}
          handlePopperMoreClose={props.handlePopperMoreClose}
          openList={props.openList}
          handlePopper={props.handlePopper}
          volume={props.volumeAudio}
          handleVolumeAudio={props.handleVolumeAudio}
          volumeStatus={props.volumeStatus}
          handleVolumeStatus={props.handleVolumeStatus}
          darkMode={props.darkMode}
        />
        <MusicSlider
          formatDuration={props.formatDuration}
          duration={props.duration}
          currentTime={props.currentTime}
          handleTimeSliderChange={props.handleTimeSliderChange}
          darkMode={props.darkMode}
        />

        <MusicPlay
          isPlay={props.isPlay}
          handlePausePlayClick={props.handlePausePlayClick}
          handlePrevNextClick={props.handlePrevNextClick}
          repeat={props.repeat}
          onRepeat={props.onRepeat}
          random={props.random}
          onRandom={props.onRandom}
          openRandom={props.openRandom}
          openPrev={props.penPrev}
          openPlay={props.openPlay}
          openNext={props.openNext}
          openRepeat={props.openRepeat}
          anchorElRandom={props.anchorElRandom}
          anchorElPrev={props.anchorElPrev}
          anchorElPlay={props.anchorElPlay}
          anchorElNext={props.anchorElNext}
          anchorElRepeat={props.anchorElRepeat}
          handlePopoverRandomOpen={props.handlePopoverRandomOpen}
          handlePopoverRandomClose={props.handlePopoverRandomClose}
          handlePopoverPrevOpen={props.handlePopoverPrevOpen}
          handlePopoverPrevClose={props.handlePopoverPrevClose}
          handlePopoverPlayOpen={props.handlePopoverPlayOpen}
          handlePopoverPlayClose={props.handlePopoverPlayClose}
          handlePopoverNextOpen={props.handlePopoverNextOpen}
          handlePopoverNextClose={props.handlePopoverNextClose}
          handlePopoverRepeatOpen={props.handlePopoverRepeatOpen}
          handlePopoverRepeatClose={props.handlePopoverRepeatClose}
          darkMode={props.darkMode}
        />
      </Drawer>
    </Box>
  );
}

export default SidebarRight;
