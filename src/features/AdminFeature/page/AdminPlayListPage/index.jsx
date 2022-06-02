import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { PersonAddAlt, Public, Search } from '@mui/icons-material';
import {
  Button,
  Typography,
  Slide,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
  TextField,
  InputAdornment,
} from '@mui/material';
import AdminSingerlistTable from '../../component/AdminSingerlistTable';
import artistApi from '../../../../api/artistsApi';
import AddSingerDialog from '../../component/AddNewSingerDialog';
import UpdateSingerDialog from '../../component/UpdateSingerDialog';
import AdminPlaylistTable from '../../component/AdminPlaylistTable';
import playlistApi from '../../../../api/playlistApi';
import AddNewPlaylistDialog from '../../component/AddNewPlaylistDialog';
import audiosApi from '../../../../api/audiosApi';
function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}
const countrySelect = [
  {
    value: 'vn',
    label: 'Việt Nam',
    imageLink: 'https://countryflagsapi.com/svg/vn',
  },
  {
    value: 'usuk',
    label: 'US-UK',
    imageLink: 'https://countryflagsapi.com/svg/us',
  },
  {
    value: 'kr',
    label: 'Hàn Quốc',
    imageLink: 'https://countryflagsapi.com/svg/kr',
  },
  {
    value: 'cn',
    label: 'Trung Quốc',
    imageLink: 'https://countryflagsapi.com/svg/cn',
  },
  {
    value: 'jp',
    label: 'Nhật Bản',
    imageLink: 'https://countryflagsapi.com/svg/jp',
  },
];
AdminPlaylistPage.propTypes = {
  darkMode: PropTypes.bool,
};

function AdminPlaylistPage(props) {
  const { darkMode } = props;
  const [filesImage, setFilesImage] = useState([]);
  const [songList, setSongList] = useState([]);
  const [songAddList, setSongAddList] = useState([]);
  const [pageSong, setPageSong] = useState(1);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [addLoading, setAddLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progressUpdate, setProgressUpdate] = useState(0);
  const [progressAdd, setProgressAdd] = useState(0);
  const [snackBar, setSnakeBar] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [countryList, setCountryList] = useState('all');
  const [country, setCountry] = useState('all');
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [searchAddSong, setSearchAddSong] = useState('');
  const [filter, setFilter] = useState({
    title: '',
    timeCreated: 'desc',
    lastUpdate: '',
    refresh: false,
  });
  const [openAddCountry, setOpenAddCountry] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState({
    id: '',
    title: '',
    image: '',
  });
  const [transition, setTransition] = useState(undefined);
  const [message, setMessage] = useState('');
  const typingTimeoutRef = useRef(null);
  const handleChangeCountry = (event) => {
    //Thay dổi quốc gia trong add playlist
    setCountry(event.target.value);
  };

  const handleDropFileImage = (acceptedFiles) => {
    setFilesImage(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
  // const handleOpenUpdateDialog = (data) => {
  //   //Mở update dialog
  //   setCurrentPlaylist({
  //     id: data._id,
  //     title: data.playlist_title,
  //     image: data.playlist_img,
  //   });
  //   (async () => {
  //     const
  //   })();
  //   setSongAddList([data.song_list]);
  //   setOpenUpdate(true);
  // };
  const handleCloseUpdateSingerDialog = () => {
    //Đóng update dialog
    setOpenUpdate(false);
  };
  const handleCloseAddDialog = () => {
    setOpenAdd(false);
    setSongAddList([]);
  };
  const handleOpenAddDialog = () => {
    //Mở add singer dialog
    setOpenAdd(true);
    getSongList(pageSong, limit, countryList);
  };

  const getSongList = (pageSong, limit, countryList) => {
    (async () => {
      try {
        const { data } = await audiosApi.getSongList({
          page: pageSong,
          limit: limit,
          song_name: 'asc',
          country: countryList,
        });
        if (data) {
          setSongList(data[0].data);
          setIsLoading(false);
          setCount(data[0].metadata[0].total);
        }
      } catch (errors) {
        console.log(errors);
      }
    })();
  };
  const handleAddSongToList = (song) => {
    if (songAddList.find((item) => item._id === song._id)) {
      setMessage('Nhạc đã có trong danh sách playlist');
      setSeverity('error');
      setSnakeBar(true);
    }
    if (!songAddList.find((item) => item._id === song._id)) {
      setSongList(songList.filter((item) => item._id !== song._id));
      setSongAddList([...songAddList, song]);
    }
  };
  const handleRemoveSong = (song) => {
    setSongAddList(songAddList.filter((item) => item._id !== song._id));
  };
  const handleCloseSnackBar = () => {
    //Đóng snack bar
    setSnakeBar(false);
  };
  const handleCloseSelect = () => {
    // Đóng danh sách quốc gia trong add playlist
    setOpenAddCountry(false);
  };
  const handleOpenSelect = () => {
    //Mở danh sách quốc gia trong add playlist
    setOpenAddCountry(true);
  };
  const handleCloseSelectList = () => {
    // Đóng danh sách quốc gia
    setOpenCountry(false);
  };
  const handleOpenSelectList = () => {
    //Mở danh sách quốc gia
    setOpenCountry(true);
  };
  const handleChangeCountryList = (event) => {
    //Thay dổi quốc gia
    setCountryList(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    //đổi trang cho bảng ca sĩ
    setPage(newPage);
  };
  const handleSnackBar = (Transition) => {
    //Mở snackbar
    setTransition(() => Transition);
    setSnakeBar(true);
  };

  const handleChangeRowsPerPage = (event) => {
    // Đổi số dòng dữ liệu hiện ra trong 1 trang của ca sĩ
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleNextPageAddSong = () => {
    (async () => {
      try {
        setPageSong(pageSong + 1);
        const { data } = await audiosApi.getSongList(
          searchAddSong !== ''
            ? {
                title: searchAddSong,
                page: pageSong + 1,
                limit: limit,
              }
            : {
                page: pageSong + 1,
                limit: limit,
                song_name: 'asc',
                country: countryList,
              }
        );
        if (data) {
          setSongList(data[0].data);
          setCount(data[0].metadata[0].total);
        }
      } catch (error) {
        console.log('failed to fretch song list', error);
      }
    })();
  };
  const handlePrevPageAddSong = () => {
    (async () => {
      try {
        setPageSong(pageSong - 1);
        const { data } = await audiosApi.getSongList(
          searchAddSong !== ''
            ? {
                title: searchAddSong,
                page: pageSong - 1,
                limit: limit,
              }
            : {
                page: pageSong - 1,
                limit: limit,
                song_name: 'asc',
                country: countryList,
              }
        );
        if (data) {
          setSongList(data[0].data);
          setCount(data[0].metadata[0].total);
        }
      } catch (error) {
        console.log('failed to fretch song list', error);
      }
    })();
  };

  const formatView = (view) => {
    if (view < 1e3) return view;
    if (view >= 1e3 && view < 1e6) return +(view / 1e3).toFixed(1) + 'K';
    if (view >= 1e6 && view < 1e9) return +(view / 1e6).toFixed(1) + 'M';
    if (view >= 1e9 && view < 1e12) return +(view / 1e9).toFixed(1) + 'B';
    if (view >= 1e12) return +(view / 1e12).toFixed(1) + 'T';
  };
  const handleSearchTermChange = (e) => {
    const value = e.target.value;

    //set -- 100 -- clear -- set--300 -->submit
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      (async () => {
        try {
          const { data } = await audiosApi.getSongList({
            title: value,
            page: pageSong,
            limit: limit,
          });
          if (data) {
            setSongList(data[0].data);
            setCount(data[0].metadata[0].total);
            setSearchAddSong(value);
            setPageSong(0);
          }
        } catch (error) {
          console.log('failed to fretch song list', error);
        }
      })();
    }, 800);
  };
  const handleAddFormSubmit = (value, form) => {
    // Thêm playlist mới
    (async () => {
      console.log(value);
      if (songAddList.length > 0) {
        try {
          const songList = songAddList.map((song) => song._id);
          setLoading(true);
          setAddLoading(true);
          const formData = new FormData();

          formData.append('title', value.playlistTitle);
          formData.append('song_list', JSON.stringify(songList));
          formData.append('file[]', value.fileImage[0]);

          const { data } = await playlistApi.addNewPlaylist(formData, form, setProgressUpdate);
          if (data) {
            setLoading(false);
            setAddLoading(false);
            setMessage('Thêm playlist thành công');
            handleSnackBar(TransitionLeft);
            setProgressAdd(0);
          }
        } catch (error) {
          console.log('failed to add playlist ', error);
        }
      }
      if (songAddList.length <= 0) {
        setMessage('Danh sách nhạc còn trống');
        setSeverity('error');
        setSnakeBar(true);
      }
    })();
  };
  const handleUpdateFormSubmit = (value, form) => {
    (async () => {
      try {
        setLoading(true);
        setAddLoading(true);
        const formData = new FormData();
        formData.append('singerName', value.singerName);
        if (filesImage.length > 0) {
          formData.append('playlist_img', currentPlaylist.image);
          formData.append('file[]', value.fileImage);
        }
        if (filesImage.length > 0) {
          formData.append('file[]', value.fileImage);
        }

        const { data } = await playlistApi.addNewPlaylist(formData, form, setProgressAdd);
        if (data) {
          setLoading(false);
          setUpdateLoading(false);
          setMessage('Thêm playlist thành công');
          handleSnackBar(TransitionLeft);
          setProgressAdd(0);
          setFilter({ ...filter, refresh: !filter.refresh });
        } else {
        }
      } catch (error) {
        console.log('failed to fretch singers list', error);
      }
    })();
  };
  // useEffect(() => {
  //   // Lấy danh sách song playlist
  //   (async () => {
  //     try {
  //       const { data } = await audiosApi.getSongList({
  //         page: pageSong,
  //         limit: limit,
  //         song_name: 'asc',
  //         country: countryList,
  //       });

  //       if (data) {
  //         setSongList(data[0].data);
  //         setIsLoading(false);
  //         setCount(data[0].metadata[0].total);
  //       }
  //     } catch (errors) {
  //       console.log(errors);
  //     }
  //   })();
  // }, [pageSong, limit, countryList]);
  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }} pt={8}>
      <Typography sx={{ color: darkMode ? 'rgba(244,246,248,0.88)' : '#353535' }}>
        Quản lý Playlist
      </Typography>
      <Stack
        direction={'row'}
        flexWrap="wrap"
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        sx={{ gap: '1em' }}
      >
        <Button
          sx={{ ml: '1em' }}
          variant="contained"
          onClick={handleOpenAddDialog}
          startIcon={<PersonAddAlt htmlColor={darkMode ? '#fff' : 'black'} />}
        >
          Thêm Playlist Mới
        </Button>
        <AddNewPlaylistDialog
          handleAddSongToList={handleAddSongToList}
          openAdd={openAdd}
          open={openAddCountry}
          addLoading={addLoading}
          handleCloseAddDialog={handleCloseAddDialog}
          handleChangeCountry={handleChangeCountry}
          handleFormSubmit={handleAddFormSubmit}
          filesImage={filesImage}
          handleDropFileImage={handleDropFileImage}
          loading={loading}
          songList={songList}
          country={country}
          handleCloseSelect={handleCloseSelect}
          handleOpenSelect={handleOpenSelect}
          songAddList={songAddList}
          pageSong={pageSong}
          progressAdd={progressAdd}
          handleSearchSongTermChange={handleSearchTermChange}
          handleRemoveSong={handleRemoveSong}
          handlePrevPageAddSong={handlePrevPageAddSong}
          handleNextPageAddSong={handleNextPageAddSong}
        />
        <UpdateSingerDialog
          filesImage={filesImage}
          currentSinger={currentPlaylist}
          updateLoading={updateLoading}
          openUpdate={openUpdate}
          handleChangeCountry={handleChangeCountry}
          handleDropFileImage={handleDropFileImage}
          handleUpdateFormSubmit={handleUpdateFormSubmit}
          handleCloseUpdateSingerDialog={handleCloseUpdateSingerDialog}
          loading={loading}
          progressUpdate={progressUpdate}
        />
        <TextField
          name="searchSingers"
          size="small"
          onChange={handleSearchTermChange}
          label="Tìm kiếm tiêu đề playlist"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search htmlColor={darkMode ? '#fff' : '#4A4A87'} />
              </InputAdornment>
            ),
          }}
          sx={{
            input: { color: darkMode ? 'rgba(244,246,248,0.88)' : 'black' },
            '& .MuiInputLabel-root': {
              color: '#fff',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: darkMode ? 'rgba(244,246,248,0.88)' : 'black',
              },
              '&:hover fieldset': {
                borderColor: '#0060DF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#0060DF',
              },
            },
          }}
        />

        <FormControl size="small" sx={{ ml: '1rem', mr: '1rem' }}>
          <InputLabel sx={{ color: '#fff' }} id="test-select-label">
            Nước
          </InputLabel>
          <Select
            size="small"
            variant="outlined"
            sx={{
              width: '100%',
              color: '#fff',
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
                borderWidth: '0.15rem',
              },
              '& .MuiSelect-icon': {
                color: '#fff',
              },
            }}
            open={openCountry}
            onClose={handleCloseSelectList}
            onOpen={handleOpenSelectList}
            value={countryList}
            label="Nước"
            onChange={handleChangeCountryList}
          >
            <MenuItem value={'all'}>
              <Public fontSize="small" htmlColor="#fff" />
              <span style={{ marginLeft: '1rem' }}>Tất cả</span>
            </MenuItem>
            {countrySelect.map((item, index) => (
              <MenuItem value={item.value} key={index}>
                <img style={{ width: '1.5em', height: '1em' }} alt="country" src={item.imageLink} />
                <span style={{ marginLeft: '1rem' }}>{item.label}</span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      {/* <AdminPlaylistTable
        formatView={formatView}
        page={page}
        isLoading={isLoading}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleOpenUpdateDialog={handleOpenUpdateDialog}
        rows={singersList}
        count={count}
        darkMode={darkMode}
      /> */}
      <Snackbar
        open={snackBar}
        onClose={handleCloseSnackBar}
        TransitionComponent={transition}
        autoHideDuration={2000}
        message="I love snacks"
        key={transition ? transition.name : ''}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={severity}
          sx={{
            width: '100%',
            bgcolor: '#2e7d32',
            color: '#ffffff',
            '& .MuiAlert-icon': {
              color: '#ffffff',
            },
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AdminPlaylistPage;
