import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import SideBarBot from '../sidebarbot';
import PlayListBot from '../sidebarbot/component/playlistbot';
import SidebarRight from '../sidebarright';
import audios from './../audio';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

// DrawerAudio.propTypes = {

// };

function DrawerAudio() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [drawerBotPL, setDrawerBotPL] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volumeAudio, setVolumeAudio] = useState(1);
  const [volumeStatus, setVolumeStatus] = useState(false);
  const [isPlay, setPlay] = useState(false);
  const [titleAudio, setTitleAudio] = useState('');
  const [artistAudio, setArtistAudio] = useState('');
  const [repeat, setRepeat] = useState(0);
  const [random, setRandom] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMore, setOpenMore] = useState(false);
  const [anchorElMore, setAnchorElMore] = useState(null);
  const [anchorElList, setAnchorElList] = useState(null);
  const [hoverVolumeBot, setHoverVolumeBot] = useState(false);
  const [active, setActiveAudio] = useState(null);


  const hanldBotStatusList = (index) => {
    setActiveAudio(index);
  };
  const changeHoverVolumeBot = (status) => {
    setHoverVolumeBot(status);
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
  const handleVolumeStatus = () => {
    audioRef.current.volume = !volumeStatus ? 0 : volumeAudio;
    setVolumeStatus(!volumeStatus);
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

  const handlePopperMoreOpen = (event) => {
    setAnchorElMore(event.currentTarget);
    setOpenMore(!openMore);
  };
  const handlePopperMoreClose = () => {
    setOpenMore(false);
  };

  const handlePopper = (event) => {
    setAnchorElList(anchorElList ? null : event.currentTarget);
  };
  const onClickChangeMusic = (index) => {
    setAudioIndex(index);
    setPlay(true);
  };
  const open = Boolean(anchorEl);
  const openList = Boolean(anchorElList);
  return (
    <Box>
      <SidebarRight
        isPlay={isPlay}
        titleAudio={titleAudio}
        artistAudio={artistAudio}
        open={open}
        openMore={openMore}
        anchorEl={anchorEl}
        openList={openList}
        anchorElList={anchorElList}
        anchorElMore={anchorElMore}
        handlePopper={handlePopper}
        handlePopoverOpen={handlePopoverOpen}
        handlePopoverClose={handlePopoverClose}
        handlePopperMoreOpen={handlePopperMoreOpen}
        handlePopperMoreClose={handlePopperMoreClose}
        audios={audios}
        onClickChangeMusic={onClickChangeMusic}
        volumeAudio={volumeAudio}
        handleVolumeAudio={handleVolumeAudio}
        volumeStatus={volumeStatus}
        handleVolumeStatus={handleVolumeStatus}
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
        darkMode={darkMode}
      />
      <PlayListBot
        drawerBotPL={drawerBotPL}
        handleDrawerBotPlayListClose={handleDrawerBotPlayListClose}
        audios={audios}
        audioIndex={audioIndex}
        onClickChangeMusic={onClickChangeMusic}
        isPlay={isPlay}
        hanldBotStatusList={hanldBotStatusList}
        active={active}
        darkMode={darkMode}
      />
      <SideBarBot
        isPlay={isPlay}
        titleAudio={titleAudio}
        artistAudio={artistAudio}
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
        volume={volumeAudio}
        handleVolumeAudio={handleVolumeAudio}
        volumeStatus={volumeStatus}
        handleVolumeStatus={handleVolumeStatus}
        hoverVolumeBot={hoverVolumeBot}
        changeHoverVolumeBot={changeHoverVolumeBot}
        drawerBotPL={drawerBotPL}
        handleDrawerBotPlayList={handleDrawerBotPlayList}
        darkMode={darkMode}
      />
      <audio
        ref={audioRef}
        type="audio/mpeg"
        src={audios[audioIndex].src}//'http://localhost:5000/audios/mp3' //
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={handleRepeatRandom}
      />
    </Box>
  );
}

export default DrawerAudio;
