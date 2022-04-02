import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import NewMusic from './components/NewMusic';
import HotCarousel from './components/HotCarousel';
import MusicRank from './components/MusicRank';
import NewPlayListList from './components/NewPlayList/components/List';
import TopMusic from './components/TopMusic';

import audiosApi from '../../api/audiosApi';
import playlistApi from '../../api/playlistApi';
import { useDispatch } from 'react-redux';
import { setPlay, setSong, setPlaylist } from '../../redux/songSlide';
import PropTypes from 'prop-types';
HomeFeature.propTypes = {
  darkMode: PropTypes.bool,
};

function HomeFeature(props) {
  const dispath = useDispatch();
  const [newSongList, setNewSongList] = useState([]);
  const [newPlaylists, setNewPlaylists] = useState([]);

  useEffect(() => {
    // lấy nhạc mới nhất
    (async () => {
      try {
        const { data } = await audiosApi.getNewSongs({
          limit: 10,
          page: 1,
        });
        setNewSongList(data[0].data);
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
          page: 1,
        });
        setNewPlaylists(data[0].data);
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
    <Box sx={{ bgcolor: props.darkMode ? 'rgb(24, 34, 45)' : '#fff' }}>
      <HotCarousel darkMode={props.darkMode} />
      <NewMusic
        darkMode={props.darkMode}
        newSongList={newSongList}
        handleChangeSong={handleChangeSong}
      />
      <MusicRank darkMode={props.darkMode} />
      <NewPlayListList
        darkMode={props.darkMode}
        newPlaylists={newPlaylists}
        handlePlayListSong={handlePlayListSong}
      />
      <TopMusic darkMode={props.darkMode} />
    </Box>
  );
}

export default HomeFeature;
