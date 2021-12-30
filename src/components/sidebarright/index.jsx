import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import MusicDisk from './components/musicdisk';
import MusicPlay from './components/musicplay';
import MusicSlider from './components/musicslider';
import MusicStatus from './components/musicstatus';
import PlayList from './components/playlist';

// import KeyboardEventHandler from 'react-keyboard-event-handler';

// import PropTypes from 'prop-types';

// index.propTypes = {

// };

const drawerWidth = 320;
function SidebarRight(props) {
  return (
    <Box
      sx={{ display: 'flex', backgroundColor: 'rgb(24, 34, 45)', '&:focus': { outline: 'none' } }}
    >
      <Drawer
        variant="permanent"
        sx={{
          // display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            borderColor:'rgb(24, 56, 50)',
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
          add3Dots={props.add3Dots}
        />
        <PlayList
          openList={props.openList}
          anchorEl={props.anchorElList}
          titleAudio={props.titleAudio}
          artistAudio={props.artistAudio}
          handlePopper={props.handlePopper}
          musiclist={props.audios}
          onClickChangeMusic={props.onClickChangeMusic}
          add3Dots={props.add3Dots}
          isPlay={props.isPlay}
        />
        <MusicStatus
          open={props.open}
          anchorEl={props.anchorEl}
          handlePopoverOpen={props.handlePopoverOpen}
          handlePopoverClose={props.handlePopoverClose}
          openMore={props.openMore}
          anchorElMore={props.anchorElMore}
          handlePopoverMoreOpen={props.handlePopoverMoreOpen}
          handlePopoverMoreClose={props.handlePopoverMoreClose}
          openList={props.openList}
          handlePopper={props.handlePopper}
          volume={props.volumeAudio}
          handleVolumeAudio={props.handleVolumeAudio}
        />
        <MusicSlider
          formatDuration={props.formatDuration}
          duration={props.duration}
          currentTime={props.currentTime}
          handleTimeSliderChange={props.handleTimeSliderChange}
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
        />
      </Drawer>
    </Box>
  );
}

export default SidebarRight;
