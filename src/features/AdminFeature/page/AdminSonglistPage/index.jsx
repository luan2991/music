import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Search } from '@mui/icons-material';
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
import AdminSonglistTable from '../../component/AdminSonglistTable';
import { AddCircle, MusicNote, Public } from '@mui/icons-material';
import audiosApi from '../../../../api/audiosApi';
import artistApi from '../../../../api/artistsApi';
import AddSongDialog from '../../component/AddSongDialog';
import AddSongFilter from '../../component/AddSongFilter';
import UpdateSongDialog from '../../component/UpdateSongDialog';

AdminSonglistPage.propTypes = {
  darkMode: PropTypes.bool,
};
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
function AdminSonglistPage(props) {
  const { darkMode } = props;
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filter, setFilter] = useState({
    view: '',
    name: '',
    timeCreated: 'desc',
    lastUpdate: '',
    refresh: false,
  });

  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState('vn');
  const [countryList, setCountryList] = useState('all');
  const [openCountry, setOpenCountry] = useState(false);
  const [singersList, setSingersList] = useState([]);
  const [singersAddList, setSingersAddList] = useState([]);
  const [addIdList, setAddIdList] = useState([]);
  const [filesMp, setFilesMp] = useState([]);
  const [filesImage, setFilesImage] = useState([]);
  const [progress, setProgress] = useState(0);
  const [progressUpdate, setProgressUpdate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [snackBar, setSnakeBar] = useState(false);
  const [songsList, setSongsList] = useState([]);
  const [count, setCount] = useState(0);
  const [addLoading, setAddLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [transition, setTransition] = useState(undefined);

  const [message, setMessage] = useState('');
  const [currentSong, setCurrentSong] = useState({
    id: '',
    title: '',
    src: '',
    image: '',
  });
  const formatView = (view) => {
    if (view < 1e3) return view;
    if (view >= 1e3 && view < 1e6) return +(view / 1e3).toFixed(1) + 'K';
    if (view >= 1e6 && view < 1e9) return +(view / 1e6).toFixed(1) + 'M';
    if (view >= 1e9 && view < 1e12) return +(view / 1e9).toFixed(1) + 'B';
    if (view >= 1e12) return +(view / 1e12).toFixed(1) + 'T';
  };
  const handleSnackBar = (Transition) => {
    //Mở snackbar
    setTransition(() => Transition);
    setSnakeBar(true);
  };
  const handleFilterSong = (filter, value) => {
    let view = '';
    let created = '';
    let name = '';
    let update = '';
    if (filter === 'view') {
      view = value;
    }
    if (filter === 'name') {
      name = value;
    }
    if (filter === 'create') {
      created = value;
    }
    if (filter === 'update') {
      update = value;
    }
    setFilter({ view: view, timeCreated: created, name: name, lastUpdate: update });
  };

  const handleCloseSnackBar = () => {
    //Đóng snack bar
    setSnakeBar(false);
  };
  const typingTimeoutRef = useRef(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleCloseSelect = () => {
    // Đón select country dialog
    setOpen(false);
  };
  const handleCloseAddDialog = () => {
    // Đóng add music dialog
    setSingersAddList([]);
    setFilesImage([]);
    setFilesMp([]);
    setOpenAdd(false);
  };
  const handleCloseUpdateSongDialog = () => {
    // Đóng update music dialog
    setSingersAddList([]);
    setFilesImage([]);
    setFilesMp([]);
    setAddIdList([]);
    setOpenUpdate(false);
  };
  const handleSearchTermChange = (e) => {
    //tìm ca sĩ dựa trên tên và quốc gia
    const value = e.target.value;

    //set -- 100 -- clear -- set--300 -->submit
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      (async () => {
        try {
          const { data } = await artistApi.getSearchSingers({
            search: value,
            area: country,
          });
          setSingersList(data);
        } catch (error) {
          console.log('failed to fretch singers list', error);
        }
      })();
    }, 800);
  };

  const handleSearchSongTermChange = (e) => {
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
            page: page,
            limit: rowsPerPage,
          });

          if (data) {
            setSongsList(data[0].data);

            setCount(data[0].metadata[0].total);
          }
        } catch (error) {
          console.log('failed to fretch song list', error);
        }
      })();
    }, 800);
  };
  const handleOpenSelect = () => {
    //mở bảng chọn nước của ca sĩ trong add music dialog
    setOpen(true);
  };
  const handleOpenAddDialog = () => {
    //Mở add music dialog
    setOpenAdd(true);
  };

  const handleOpenUpdateSongDialog = (data) => {
    //Mở update music dialog
    setSingersAddList(data.artist);
    setAddIdList([data.artist.map((item) => item._id)]);

    setCurrentSong({
      id: data._id,
      title: data.title,
      src: data.src,
      image: data.simage,
    });
    setOpenUpdate(true);
  };

  const handleChangeCountry = (event) => {
    //Thay dổi nước
    setCountry(event.target.value);
  };
  const handleAddSinger = (result) => {
    setSingersAddList([...singersAddList, result]);
    setAddIdList([...addIdList, result._id]);
    setSingersList(singersList.filter((item) => item._id !== result._id));
  };
  const handleRemoveSinger = (result) => {
    setSingersAddList(singersAddList.filter((item) => item._id !== result._id));
    setAddIdList(addIdList.filter((item) => item !== result._id));
    if (result.country === country) setSingersList([...singersList, result]);
  };

  const onDragEnd = (result) => {
    // kéo, thả ca sĩ trong thêm bài hát dialog
    const { source, destination } = result;
    console.log(result);
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;
    let add,
      active = singersList,
      complete = singersAddList;
    if (source.droppableId === 'singersList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      active.splice(source.index, 1);
    }
    if (destination.droppableId === 'singerList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setSingersAddList(complete);
    setSingersList(active);
    setAddIdList([...addIdList, add._id]);
  };
  const handleDropFileImage = (acceptedFiles) => {
    // Chức năng thả file hình ảnh
    setFilesImage(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
  const handleDropFileMp = (acceptedFiles) => {
    //Chức năng thả file mp3
    console.log(acceptedFiles);
    setFilesMp(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const handleFormSubmit = (value, form) => {
    // Chức năng submit thêm bài hát mới trong add music dialog

    (async () => {
      try {
        setLoading(true);
        setAddLoading(true);
        const formData = new FormData();
        formData.append('file[]', value.fileImage[0]);
        formData.append('file[]', value.fileSong[0]);
        formData.append('songName', value.songName);
        formData.append('singerList', JSON.stringify(...addIdList));

        const { data } = await audiosApi.addNewSong(formData, form, setProgress);
        if (data) {
          setLoading(false);
          setAddLoading(false);
          setMessage('Thêm nhạc thành công');
          handleSnackBar(TransitionLeft);
          handleCloseAddDialog();
          setProgress(0);
        }
      } catch (error) {
        console.log('failed to fretch singers list', error);
      }
    })();
  };
  const handleCloseSelectList = () => {
    setOpenCountry(false);
  };
  const handleOpenSelectList = () => {
    setOpenCountry(true);
  };
  const handleChangeCountryList = (event) => {
    //Thay dổi nước
    setCountryList(event.target.value);
  };
  const handleUpdateFormSubmit = (value, form) => {
    //Cập nhật thông tin ca sĩ/nhóm nhạc
    (async () => {
      try {
        setLoading(true);
        setUpdateLoading(true);
        const formData = new FormData();
        formData.append('songId', currentSong.id);

        if (filesImage.length > 0) {
          formData.append('file[]', value.fileUpdateImage[0]);
          formData.append('simage', currentSong.image);
        }
        if (filesMp.length > 0) {
          formData.append('file[]', value.fileUpdateSong[0]);
          formData.append('src', currentSong.src);
        }
        formData.append('title', value.updateSongName);
        formData.append('artist', JSON.stringify([...addIdList]));

        const { data } = await audiosApi.updateSong(formData, form, setProgressUpdate);

        if (data) {
          setLoading(false);
          setUpdateLoading(false);
          setMessage('Cập nhật nhạc thành công');
          handleSnackBar(TransitionLeft);
          setProgressUpdate(0);
          setFilter({ ...filter, refresh: !filter.refresh });
          handleCloseUpdateSongDialog();
        }
      } catch (error) {
        console.log('failed to update song', error);
      }
    })();
  };
  useEffect(() => {
    // lấy danh sách nhạc ca sĩ theo dòng nhạc
    (async () => {
      try {
        const { data } = await artistApi.getArtistByCountry({
          area: country,
        });
        setSingersList(data);
      } catch (error) {
        console.log('failed to fretch singers list', error);
      }
      //  console.log(response);
    })();
  }, [country]);

  useEffect(() => {
    // Lấy danh sách nhạc
    (async () => {
      try {
        const { view, name, timeCreated, lastUpdate } = filter;

        const { data } = await audiosApi.getSongList({
          page: page,
          limit: rowsPerPage,
          view: view,
          song_name: name,
          createdAt: timeCreated,
          lastUpdated: lastUpdate,
          country: countryList,
        });

        if (data) {
          setSongsList(data[0].data);
          setIsLoading(false);

          setCount(data[0].metadata[0].total);
        }
      } catch (errors) {
        console.log(errors);
      }
    })();
  }, [filter, page, rowsPerPage, countryList]);
  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }} pt={8}>
      <Typography sx={{ color: darkMode ? 'rgba(244,246,248,0.88)' : '#353535' }}>
        Quản lý nhạc
      </Typography>
      <Stack
        direction={'row'}
        flexWrap={'wrap'}
        spacing={2}
        justifyContent={'flex-start'}
        alignItems={'center'}
      >
        <Button
          variant="contained"
          onClick={handleOpenAddDialog}
          startIcon={<AddCircle />}
          endIcon={<MusicNote />}
        >
          Thêm nhạc mới
        </Button>
        <AddSongDialog
          handleCloseAddDialog={handleCloseAddDialog}
          handleFormSubmit={handleFormSubmit}
          onDragEnd={onDragEnd}
          handleRemoveSinger={handleRemoveSinger}
          handleAddSinger={handleAddSinger}
          handleChangeCountry={handleChangeCountry}
          handleSearchTermChange={handleSearchTermChange}
          openAdd={openAdd}
          open={open}
          handleOpenSelect={handleOpenSelect}
          handleCloseSelect={handleCloseSelect}
          loading={loading}
          filesMp={filesMp}
          filesImage={filesImage}
          progress={progress}
          handleDropFileImage={handleDropFileImage}
          handleDropFileMp={handleDropFileMp}
          singersList={singersList}
          singersAddList={singersAddList}
          country={country}
          addLoading={addLoading}
        />
        <UpdateSongDialog
          currentSong={currentSong}
          handleCloseUpdateSongDialog={handleCloseUpdateSongDialog}
          handleFormSubmit={handleFormSubmit}
          onDragEnd={onDragEnd}
          handleRemoveSinger={handleRemoveSinger}
          handleAddSinger={handleAddSinger}
          handleChangeCountry={handleChangeCountry}
          handleSearchTermChange={handleSearchTermChange}
          openUpdate={openUpdate}
          open={open}
          handleOpenSelect={handleOpenSelect}
          handleCloseSelect={handleCloseSelect}
          loading={loading}
          filesMp={filesMp}
          filesImage={filesImage}
          progressUpdate={progressUpdate}
          handleDropFileImage={handleDropFileImage}
          handleDropFileMp={handleDropFileMp}
          singersList={singersList}
          singersAddList={singersAddList}
          country={country}
          updateLoading={updateLoading}
          handleUpdateFormSubmit={handleUpdateFormSubmit}
        />

        <TextField
          name="searchSingers"
          onChange={handleSearchSongTermChange}
          label="Tìm kiếm ca sĩ/nhóm nhạc"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search htmlColor={darkMode ? '#fff' : ''} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: '30%',
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
        <FormControl sx={{ width: '15%', ml: '1rem', mr: '1rem' }}>
          <InputLabel sx={{ color: '#fff' }} id="test-select-label">
            Nước
          </InputLabel>
          <Select
            variant="outlined"
            sx={{
              width: '100%',
              color: '#fff',

              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
                borderWidth: '0.15rem',
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
      <AddSongFilter filter={filter} handleFilterSong={handleFilterSong} />
      <AdminSonglistTable
        page={page}
        isLoading={isLoading}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rows={songsList}
        count={count}
        formatView={formatView}
        darkMode={darkMode}
        handleOpenUpdateSongDialog={handleOpenUpdateSongDialog}
      />

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
          severity="success"
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

export default AdminSonglistPage;
