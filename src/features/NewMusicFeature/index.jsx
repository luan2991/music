import { Pagination, Stack, Typography } from '@mui/material';
// import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useSearchParams, useNavigate } from 'react-router-dom';
import audiosApi from '../../api/audiosApi';
import { setPlay, setSong } from '../../redux/songSlide';
import NewSongList from './components/List';

// NewMusicFeature.propTypes = {

// };
const limit = 2;
function NewMusicFeature(props) {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispath = useDispatch();
  const [metadata, setMetaData] = useState([]);

  const [songList, setSongList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await audiosApi.getNewSongs({
          limit: limit,
          page: searchParams.get('page') || 1,
        });
        setMetaData(data[0].metadata);
        setSongList(data[0].data);
      } catch (error) {
        console.log('failed to fretch new song list', error);
      }
    })();
  }, [searchParams]);

  const handleChangeSong = (song) => {
    localStorage.setItem('song', JSON.stringify(song));
    dispath(setSong(song));
    dispath(setPlay(true));
  };
  const onChangePage = (event, value) => {
    navigate(`/new-music?page=${value}`);
  };
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: props.darkMode ? 'rgb(24, 34, 45)' : '#fff' }}>
      <Box mt="4em" width="100%">
        <Box
          width="100%"
          sx={{
            background: props.darkMode
              ? 'linear-gradient(38deg, rgba(2,0,36,1) 0%, rgba(0,29,154,1) 50%, rgba(48,88,96,1) 100%)'
              : 'linear-gradient(354deg, rgba(232,254,178,1) 0%, rgba(191,202,39,1) 35%, rgba(190,191,192,1) 100%)',
          }}
        >
          <Stack
            mt={3}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Box ml={2}>
              <Typography
                sx={{
                  fontSize: '40px',
                  fontWeight: '500',
                  color: props.darkMode ? 'rgba(244,246,248,0.88)' : '#353535',
                }}
              >
                Danh Sách Nhạc Mới
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box width="100%" mt={1}>
          <NewSongList
            darkMode={props.darkMode}
            songList={songList}
            handleChangeSong={handleChangeSong}
          />
        </Box>
      </Box>
      {songList.length > 0 && (
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
  );
}

export default NewMusicFeature;
