import { Pagination, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setPlay, setSong, setPlaylist } from '../../redux/songSlide';
import playlistApi from '../../api/playlistApi';
import AllPlaylistList from './components/List';

// import PropTypes from 'prop-types';

// AllPlayList.propTypes = {

// };
const limit = 1;
function AllPlayList(props) {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispath = useDispatch();
  const [metadata, setMetaData] = useState([]);

  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await playlistApi.getNewPlaylist({
          limit: limit,
          page: searchParams.get('page') || 1,
        });
        setMetaData(data[0].metadata);
        setPlayList(data[0].data);
      } catch (error) {
        console.log('failed to fretch new song list', error);
      }
    })();
  }, [searchParams]);

  const handleChangePlaylist = (id) => {
    (async () => {
      try {
        const { data } = await playlistApi.getSongFromPlaylist({
          playlistId: id,
        });

        console.log(data);
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
  const onChangePage = (event, value) => {
    navigate(`/new-music?page=${value}`);
  };
  return (
    <Box bgcolor="rgb(24, 35, 45)" minHeight="100vh">
      <Box pt="1em">
        <Typography
          sx={{
            paddingTop: '40px',
            paddingLeft: '10px',
            fontSize: '30px',
            fontWeight: '700',
            color: props.darkMode ? 'rgba(244,246,248,0.88)' : '',
          }}
        >
          Toàn bộ tuyển tập
        </Typography>
        <AllPlaylistList playlist={playList} handleChangePlaylist={handleChangePlaylist} />
        {playList.length > 0 && (
          <Stack pt="0.8em" spacing={2} alignItems="center" justifyContent="center">
            <Pagination
              sx={{
                '& .MuiPaginationItem-root': {
                  border: '1px solid rgba(25, 118, 210, 0.5)',
                  color: '#1976d2',
                  backgroundColor: 'rgba(25, 118, 210, 0.12)',
                  borderRadius: '0.5em',
                },
              }}
              onChange={onChangePage}
              count={metadata[0].total / limit}
              page={parseInt(searchParams.get('page')) || 1}
              color="primary"
              shape="rounded"
              variant="outlined"
            />
          </Stack>
        )}
      </Box>
    </Box>
  );
}

export default AllPlayList;
