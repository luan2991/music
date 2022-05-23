import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import SongDetail from './components/SongDetails';
import SongArtists from './components/SongArtists';
import { useParams } from 'react-router-dom';
import audiosApi from '../../api/audiosApi';
import { useDispatch } from 'react-redux';
import { setSong } from './../../redux/songSlide';
SongFeature.propTypes = {
  darkMode: PropTypes.bool,
};

function SongFeature(props) {
  let { songId } = useParams();
  const dispath = useDispatch();
  const [songData, setSongData] = useState([]);
  console.log(songData);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await audiosApi.getSong({
          songId: songId,
        });

        setSongData(data);
      } catch (error) {
        console.log('failed to fretch post list', error);
      }
      //  console.log(response);
    })();
  }, [songId]);
  const handlePlaySong = (song) => {
    localStorage.setItem('song', JSON.stringify(song));
    dispath(setSong(song));
  };

  return (
    <Box mt="4em" mr={2} ml={2} sx={{ minHeight: '100vh' }}>
      <SongDetail darkMode={props.darkMode} songData={songData} handlePlaySong={handlePlaySong} />
      <SongArtists darkMode={props.darkMode} songData={songData} />
    </Box>
  );
}

export default SongFeature;
