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
import SideBarBot from '../sidebarbot';
import PlayListBot from '../sidebarbot/component/playlistbot';
// import KeyboardEventHandler from 'react-keyboard-event-handler';

// import PropTypes from 'prop-types';

// index.propTypes = {

// };

const drawerWidth = 320;
function SidebarRight() {
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [drawerBotPL, setDrawerBotPL] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volumeAudio, setVolumeAudio] = useState(1);
  const [isPlay, setPlay] = useState(false);
  const [titleAudio, setTitleAudio] = useState('');
  const [artistAudio, setArtistAudio] = useState('');
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
  const [hoverVolumnBot, setHoverVolumnBot] = useState(false);
  const [active, setActiveAudio] = useState(null);
  const add3Dots = (text, limit) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };
  const hanldBotStatusList = (index) => {
    setActiveAudio(index);
  };
  const changeHoverVolumnBot = (status) => {
    setHoverVolumnBot(status);
  };
  const handleDrawerBotPlayList = () => {
    setDrawerBotPL(!drawerBotPL);
  };
  const handleDrawerBotPlayListClose = (state) => {
    setDrawerBotPL(state);
  };
  const formatDuration = (value) => {
    const minute = Math.floor(value / 60);
    const secondLeft = parseInt(value) - minute * 60;
    return `${minute}:${secondLeft <= 9 ? `0${secondLeft}` : secondLeft}`;
  };
  const handleVolumeAudio = (value) => {
    const volume = value / 100;
    audioRef.current.volume = volume;
    setVolumeAudio(volume);
  };
  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    setTitleAudio(audios[audioIndex].title);
    setArtistAudio(audios[audioIndex].artist);
    audioRef.current.volume = volumeAudio;
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
        while (audioIdx === audioIndex) {
          audio = randomAudio(audios);
          audioIdx = audios.indexOf(audio);
        }
        return audioIdx;
      });
    }
  };

  // const handlePausePlay = (key) => {
  //   if(key==='space')
  //   handlePausePlayClick();
  // };

  const randomAudio = (list) => {
    let audio = list[Math.floor(Math.random() * list.length)];
    return audio;
  };
  const onRandom = (status) => {
    setRandom(status);
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
  const onClickChangeMusic = (index) => {
    setAudioIndex(index);
    setPlay(true);
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
    <Box
      sx={{ display: 'flex', backgroundColor: 'rgb(24, 34, 45)', '&:focus': { outline: 'none' } }}
    >
      <Drawer
        variant="permanent"
        sx={{
          // display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: 0, sm: 0, md: 0, lg: drawerWidth },
            transition: 'width 0.2s',
          },
        }}
        anchor="right"
      >
        <MusicDisk
          isPlay={isPlay}
          titleAudio={titleAudio}
          artistAudio={artistAudio}
          add3Dots={add3Dots}
        />
        <PlayList
          open={openList}
          anchorEl={anchorElList}
          titleAudio={titleAudio}
          artistAudio={artistAudio}
          handlePopper={handlePopper}
          musiclist={audios}
          onClickChangeMusic={onClickChangeMusic}
          add3Dots={add3Dots}
          isPlay={isPlay}
        />
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
          volume={volumeAudio}
          handleVolumeAudio={handleVolumeAudio}
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

      <PlayListBot
        drawerBotPL={drawerBotPL}
        handleDrawerBotPlayListClose={handleDrawerBotPlayListClose}
        audios={audios}
        add3Dots={add3Dots}
        audioIndex={audioIndex}
        onClickChangeMusic={onClickChangeMusic}
        isPlay={isPlay}
        hanldBotStatusList={hanldBotStatusList}
        active={active}
      />
      <SideBarBot
        isPlay={isPlay}
        titleAudio={titleAudio}
        artistAudio={artistAudio}
        add3Dots={add3Dots}
        formatDuration={formatDuration}
        duration={duration}
        currentTime={currentTime}
        handleTimeSliderChange={handleTimeSliderChange}
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
        volume={volumeAudio}
        handleVolumeAudio={handleVolumeAudio}
        hoverVolumnBot={hoverVolumnBot}
        changeHoverVolumnBot={changeHoverVolumnBot}
        drawerBotPL={drawerBotPL}
        handleDrawerBotPlayList={handleDrawerBotPlayList}
      />

      {/* <KeyboardEventHandler  handleKeys={['space']} onKeyEvent={(key, e) =>{
 handlePausePlay()
      }} /> */}
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
