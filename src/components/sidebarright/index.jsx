import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useRef } from 'react';

import MusicDisk from './components/musicdisk';
import MusicPlay from './components/musicplay';
import MusicSlider from './components/musicslider';
import MusicStatus from './components/musicstatus';
import PlayList from './components/playlist';
import audios from './audio';
// import PropTypes from 'prop-types';

// index.propTypes = {

// };

const drawerWidth = 320;
function SidebarRight(props) {
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [repeat, setRepeat] = useState(0);
  const [random, setRandom] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElMore, setAnchorElMore] = useState(null);
  const [anchorElRandom, setAnchorElRandom] = useState(null);
  const [anchorElPrev, setAnchorElPrev] = useState(null);
  const [anchorElPlay, setAnchorElPlay] = useState(null);
  const [anchorElNext, setAnchorElNext] = useState(null);
  const [anchorElRepeat, setAnchorElRepeat] = useState(null);
  const [anchorElList, setAnchorElList] = useState(null);
  console.log(audioIndex);

  const formatDuration = (value) => {
    const minute = Math.floor(value / 60);
    const secondLeft = parseInt(value) - minute * 60;
    return `${minute}:${secondLeft <= 9 ? `0${secondLeft}` : secondLeft}`;
  };
  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);

    if (isPlay) audioRef.current.play();
  };
  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = (value) => {
    audioRef.current.currentTime = value;
    setCurrentTime(value);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };
  const handlePrevNextClick = (value) => {
    setAudioIndex(() => {
      let audioIdx = (audioIndex + value) % audios.length;
      if (audioIdx < 0) audioIdx = audios.length - 1;

      return audioIdx;
    });
  };
  const handleRepeatRandom = () => {
    if (random === false) {
      if (repeat === 0) {
        setPlay(false);
      }
      if (repeat === 1) {
        handlePrevNextClick(1);
      }
      if (repeat === 2) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }
    if (random === true) {
      setAudioIndex(() => {
        let audio = randomAudio(audios);
        let audioIdx = audios.indexOf(audio);
        while (audioIdx === audioIndex){
          audio = randomAudio(audios);
          audioIdx = audios.indexOf(audio);
        } 
        return audioIdx;
      });
    }
  };
  const randomAudio = (list) => {
    let audio = list[Math.floor(Math.random() * list.length)];
    return audio;
  };
  const onRandom = (stattus) => {
    setRandom(stattus);
  };
  const onRepeat = (status) => {
    setRepeat(status);
    setRandom(false);
  };
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverMoreOpen = (event) => {
    setAnchorElMore(event.currentTarget);
  };

  const handlePopoverMoreClose = () => {
    setAnchorElMore(null);
  };
  const handlePopoverRandomOpen = (event) => {
    setAnchorElRandom(event.currentTarget);
  };

  const handlePopoverRandomClose = () => {
    setAnchorElRandom(null);
  };
  const handlePopoverPrevOpen = (event) => {
    setAnchorElPrev(event.currentTarget);
  };

  const handlePopoverPrevClose = () => {
    setAnchorElPrev(null);
  };
  const handlePopoverPlayOpen = (event) => {
    setAnchorElPlay(event.currentTarget);
  };

  const handlePopoverPlayClose = () => {
    setAnchorElPlay(null);
  };
  const handlePopoverNextOpen = (event) => {
    setAnchorElNext(event.currentTarget);
  };

  const handlePopoverNextClose = () => {
    setAnchorElNext(null);
  };
  const handlePopoverRepeatOpen = (event) => {
    setAnchorElRepeat(event.currentTarget);
  };

  const handlePopoverRepeatClose = () => {
    setAnchorElRepeat(null);
  };
  const handlePopper = (event) => {
    setAnchorElList(anchorElList ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const openMore = Boolean(anchorElMore);
  const openRandom = Boolean(anchorElRandom);
  const openPrev = Boolean(anchorElPrev);
  const openPlay = Boolean(anchorElPlay);
  const openNext = Boolean(anchorElNext);
  const openRepeat = Boolean(anchorElRepeat);
  const openList = Boolean(anchorElList);
  return (
    <Box sx={{ display: 'flex', backgroundColor: 'rgb(24, 34, 45)' }}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
        anchor="right"
      >
        <MusicDisk isPlay={isPlay} />
        <PlayList open={openList} anchorEl={anchorElList} />
        <MusicStatus
          open={open}
          anchorEl={anchorEl}
          handlePopoverOpen={handlePopoverOpen}
          handlePopoverClose={handlePopoverClose}
          openMore={openMore}
          anchorElMore={anchorElMore}
          handlePopoverMoreOpen={handlePopoverMoreOpen}
          handlePopoverMoreClose={handlePopoverMoreClose}
          openList={openList}
          handlePopper={handlePopper}
        />
        <MusicSlider
          formatDuration={formatDuration}
          duration={duration}
          currentTime={currentTime}
          handleTimeSliderChange={handleTimeSliderChange}
        />
        <MusicPlay
          isPlay={isPlay}
          handlePausePlayClick={handlePausePlayClick}
          handlePrevNextClick={handlePrevNextClick}
          repeat={repeat}
          onRepeat={onRepeat}
          random={random}
          onRandom={onRandom}
          openRandom={openRandom}
          openPrev={openPrev}
          openPlay={openPlay}
          openNext={openNext}
          openRepeat={openRepeat}
          anchorElRandom={anchorElRandom}
          anchorElPrev={anchorElPrev}
          anchorElPlay={anchorElPlay}
          anchorElNext={anchorElNext}
          anchorElRepeat={anchorElRepeat}
          handlePopoverRandomOpen={handlePopoverRandomOpen}
          handlePopoverRandomClose={handlePopoverRandomClose}
          handlePopoverPrevOpen={handlePopoverPrevOpen}
          handlePopoverPrevClose={handlePopoverPrevClose}
          handlePopoverPlayOpen={handlePopoverPlayOpen}
          handlePopoverPlayClose={handlePopoverPlayClose}
          handlePopoverNextOpen={handlePopoverNextOpen}
          handlePopoverNextClose={handlePopoverNextClose}
          handlePopoverRepeatOpen={handlePopoverRepeatOpen}
          handlePopoverRepeatClose={handlePopoverRepeatClose}
        />
      </Drawer>
      <audio
        ref={audioRef}
        src={audios[audioIndex].src}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={handleRepeatRandom}
      />
    </Box>
  );
}

export default SidebarRight;
