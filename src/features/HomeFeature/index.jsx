import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import NewMusic from './components/NewMusic';
import HotCarousel from './components/HotCarousel';
import MusicRank from './components/MusicRank';
import NewPlayList from './components/NewPlayList';
import TopMusic from './components/TopMusic';
import { NavigateNext } from '@mui/icons-material';
import { Typography } from '@mui/material';
import audiosApi from '../../api/audiosApi';
import playlistApi from '../../api/playlistApi';
import { useDispatch } from 'react-redux';
import { setPlay, setSong, setPlaylist } from '../../redux/songSlide';
// import PropTypes from 'prop-types';
// HomeFeature.propTypes = {

// };
const moreAll = (text) => (
  <Typography
    variant="h5"
    component="div"
    className="allNew"
    sx={{
      color: '#c662ef',
      fontSize: '12px',
      fontWeight: '500',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      opacity: 0,
      transform: 'translateX(-20px)',
      transition: 'opacity .5s ease-in-out,transform .5s ease-in-out',
    }}
  >
    {text}
    <NavigateNext />
  </Typography>
);

function HomeFeature(props) {
  const dispath = useDispatch();
  const [newSongList, setNewSongList] = useState([]);
  const [newPlaylists, setNewPlaylists] = useState([]);

  useEffect(() => {
    // lấy nhạc mới nhất
    (async () => {
      try {
        const { data } = await audiosApi.getNewSongsHome({
          limit: 5,
        });
        setNewSongList(data);
      } catch (error) {
        console.log('failed to fretch new song list', error);
      }
      //  console.log(response);
    })();
  }, []);

  useEffect(() => {
    // lấy danh sách nhạc mới nhất
    (async () => {
      try {
        const { data } = await playlistApi.getNewPlaylist({
          limit: 10,
        });
        setNewPlaylists(data);
      } catch (error) {
        console.log('failed to fretch playlist list', error);
      }
      //  console.log(response);
    })();
  }, []);

  const handleChangeSong = (song) => {
    localStorage.setItem('song', JSON.stringify(song));
    dispath(setSong(song));
    dispath(setPlay(true));
  };
  const handlePlayListSong = (playlist) => {
    (async () => {
      try {
        const { data } = await playlistApi.getSongFromPlaylist({
          playlistId: playlist._id,
        });

        localStorage.setItem('playlist', JSON.stringify(data[0]));
        localStorage.setItem('song', JSON.stringify(data[0].song_list[0]));
        dispath(setPlaylist(data[0]));
        dispath(setSong(data[0].song_list[0]));
        dispath(setPlay(true));
      } catch (error) {
        console.log('failed to fretch song list from playlist', error);
      }
    })();
  };
  return (
    <Box sx={{ bgcolor: props.darkMode ? 'rgb(24, 34, 45)' : '#fff', width: '100%' }}>
      <HotCarousel darkMode={props.darkMode} />
      <NewMusic
        darkMode={props.darkMode}
        allNewMusic={moreAll}
        newSongList={newSongList}
        handleChangeSong={handleChangeSong}
      />
      <MusicRank darkMode={props.darkMode} allRankMusic={moreAll} />
      <NewPlayList
        darkMode={props.darkMode}
        allNewPlayList={moreAll}
        newPlaylists={newPlaylists}
        handlePlayListSong={handlePlayListSong}
      />
      <TopMusic darkMode={props.darkMode} allTopMusic={moreAll} />
    </Box>
  );
}

export default HomeFeature;
