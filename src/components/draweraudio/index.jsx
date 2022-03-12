import { Box } from '@mui/system';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import SideBarBot from '../sidebarbot';
import PlayListBot from '../sidebarbot/component/playlistbot';
import SidebarRight from '../sidebarright';
import audios from './../audio';
import { useDispatch, useSelector } from 'react-redux';
import { setPlay, setSong, setSongIdx } from '../../redux/songSlide';

// import PropTypes from 'prop-types';

// DrawerAudio.propTypes = {

// };

function DrawerAudio() {
  const dispath = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const songIdx = useSelector((state) => state.music.songIndex);
  const song = useSelector((state) => state.music.song);
  const play = useSelector((state) => state.music.isPlay);
  const playlist = useSelector((state) => state.music.playlist);
  const audioRef = useRef();
  const [songSrc, setSongSrc] = useState(song === '' ? '' : song.src.replace('./', ''));
  const [songImg, setSongImg] = useState(song === '' ? '' : song.simage);
  const [songId, setSongId] = useState(song === '' ? '' : song._id);
  // const [isLoading, setIsLoading] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);
  const [drawerBotPL, setDrawerBotPL] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volumeAudio, setVolumeAudio] = useState(1);
  const [volumeStatus, setVolumeStatus] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [titleAudio, setTitleAudio] = useState(song === '' ? '' : song.title);
  const [artistAudio, setArtistAudio] = useState(song === '' ? [] : song.artist);
  const [repeat, setRepeat] = useState(0);
  const [random, setRandom] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMore, setOpenMore] = useState(false);
  const [anchorElMore, setAnchorElMore] = useState(null);
  const [anchorElList, setAnchorElList] = useState(null);
  const [hoverVolumeBot, setHoverVolumeBot] = useState(false);
  const [active, setActiveAudio] = useState(null);

  useEffect(() => {
    setSongSrc(song === '' ? '' : song.src.replace('./', ''));
    setTitleAudio(song === '' ? '' : song.title);
    setArtistAudio(song === '' ? [] : song.artist);
    setSongImg(song === '' ? '' : song.simage);
    setSongId(song === '' ? '' : song._id);
    if (play) {
      setIsPlay(true);
    }
    // setIsLoading(true);
  }, [song, play]);
  // console.log('ca si:',artistAudio.length);
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
    // setIsLoading(false);

    audioRef.current.volume = volumeAudio;
    if (isPlay) audioRef.current.play();
  };
  const handlePausePlayClick = () => {
    if (song !== '') {
      if (isPlay) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlay(!isPlay);
    } else {
      console.log('chua co nhac');
    }
  };

  const handleTimeSliderChange = (value) => {
    audioRef.current.currentTime = value;
    setCurrentTime(value);
    if (!isPlay) {
      setIsPlay(true);
      audioRef.current.play();
    }
  };
  const handlePrevNextClick = (value) => {
    let audioIdx = (songIdx + value) % playlist.song_list.length;
    if (audioIdx < 0) audioIdx = playlist.song_list.length - 1;
    console.log(audioIdx);
    dispath(setSongIdx(audioIdx));
    localStorage.setItem('song', JSON.stringify(playlist.song_list[audioIdx]));
    dispath(setSong(playlist.song_list[audioIdx]));
    dispath(setPlay(true));
    setIsPlay(true);
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
  const formatView = (view) => {
    if (view < 1e3) return view;
    if (view>= 1e3 && view < 1e6) return +(view / 1e3).toFixed(1) + 'K';
    if (view >= 1e6 && view < 1e9) return +(view / 1e6).toFixed(1) + 'M';
    if (view >= 1e9 && view < 1e12) return +(view / 1e9).toFixed(1) + 'B';
    if (view >= 1e12) return +(view / 1e12).toFixed(1) + 'T';
  };
  const onClickChangeMusic = (song, index) => {
    localStorage.setItem('song', JSON.stringify(song));
    dispath(setSong(song));
    dispath(setSongIdx(index));
    setPlay(true);
    setIsPlay(true);
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
        // isLoading={isLoading}
        songImg={songImg}
        songId={songId}
        playlist={playlist.song_list}
        formatView={formatView}
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
        playlist={playlist}
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
        songId={songId}
        songImg={songImg}
      />
      <audio
        ref={audioRef}
        type="audio/mpeg"
        src={song === '' ? '#' : `http://localhost:5000/audios/${songSrc}`} //'http://localhost:5000/audios/mp3'
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={handleRepeatRandom}
      />
    </Box>
  );
}

export default DrawerAudio;
