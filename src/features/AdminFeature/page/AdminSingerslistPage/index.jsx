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
AdminSingerslistPage.propTypes = {
  darkMode: PropTypes.bool,
};

function AdminSingerslistPage(props) {
  const { darkMode } = props;
  const [filesImage, setFilesImage] = useState([]);
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
  const [singersList, setSingersList] = useState([]);
  const [countryList, setCountryList] = useState('all');
  const [country, setCountry] = useState('vn');
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [filter, setFilter] = useState({
    artist_name: '',
    timeCreated: 'desc',
    lastUpdate: '',
    refresh: false,
  });
  const [openCountry, setOpenCountry] = useState(false);
  const [currentSinger, setCurrentSinger] = useState({
    id: '',
    artist_name: '',
    image: '',
    country: '',
  });
  const [transition, setTransition] = useState(undefined);
  const [message, setMessage] = useState('');
  const typingTimeoutRef = useRef(null);
  const handleChangeCountry = (event) => {
    setCurrentSinger({ ...currentSinger, country: event.target.value });
  };
  const handleOpenSelect = () => {
    setOpen(true);
  };
  const handleCloseSelect = () => {
    setOpen(false);
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
  const handleOpenUpdateDialog = (data) => {
    //Mở update dialog

    setCurrentSinger({
      id: data._id,
      country: data.country,
      image: data.artist_image,
      artist_name: data.artist_name,
    });
    setOpenUpdate(true);
  };
  const handleCloseUpdateSingerDialog = () => {
    //Đóng update dialog
    setOpenUpdate(false);
  };
  const handleCloseAddDialog = () => {
    setOpenAdd(false);
  };
  const handleOpenAddDialog = () => {
    //Mở add singer dialog
    setOpenAdd(true);
  };
  const handleCloseSnackBar = () => {
    //Đóng snack bar
    setSnakeBar(false);
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
  const handleSearchSingerTermChange = (e) => {
    const value = e.target.value;

    //set -- 100 -- clear -- set--300 -->submit
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      (async () => {
        try {
          const { data } = await artistApi.getSingerList({
            search: value,
            page: page,
            limit: rowsPerPage,
          });
          if (data) {
            setSingersList(data[0].data);
            setCount(data[0].metadata[0].total);
          }
        } catch (error) {
          console.log('failed to add new singer', error);
        }
      })();
    }, 800);
  };
  const handleAddFormSubmit = (value, form) => {
    (async () => {
      try {
        setLoading(true);
        setAddLoading(true);
        const formData = new FormData();
        formData.append('file[]', value.fileImage);
        formData.append('singerName', value.singerName);
        formData.append('country', country);

        const { data } = await artistApi.addNewSinger(formData, form, setProgressUpdate);
        if (data) {
          setLoading(false);
          setAddLoading(false);
          setMessage('Thêm ca sĩ/nhóm nhạc thành công');
          setFilesImage([]);
          handleSnackBar(TransitionLeft);
          setProgressAdd(0);
          setCountry('vn');
          setFilter({ ...filter, refresh: !filter.refresh });
        }
      } catch (error) {
        console.log('failed to add singers', error);
      }
    })();
  };
  const handleUpdateFormSubmit = (value, form) => {
    (async () => {
      try {
        console.log(value);
        setLoading(true);
        setUpdateLoading(true);
        const formData = new FormData();
        formData.append('singerId', currentSinger.id.toString());
        formData.append('singerName', value.singerName);

        if (filesImage.length > 0) {
          formData.append('image', currentSinger.image);
          formData.append('file[]', value.fileImage);
        }
        formData.append('country', currentSinger.country);

        const { data } = await artistApi.updateSinger(formData, form, setProgressUpdate);
        if (data) {
          setLoading(false);
          setUpdateLoading(false);
          setMessage('Cập nhật ca sĩ/nhóm nhạc thành công');
          setFilesImage([]);
          handleSnackBar(TransitionLeft);
          setProgressUpdate(0);
          setFilter({ ...filter, refresh: !filter.refresh });
        } else {
        }
      } catch (error) {
        console.log('failed to update singer', error);
      }
    })();
  };
  useEffect(() => {
    // Lấy danh sách ca sĩ
    (async () => {
      try {
        const { artist_name, timeCreated, lastUpdate } = filter;

        const { data } = await artistApi.getSingerList({
          page: page,
          limit: rowsPerPage,
          artist_name: artist_name,
          createdAt: timeCreated,
          lastUpdated: lastUpdate,
          country: countryList,
        });

        if (data) {
          setSingersList(data[0].data);
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
        Quản lý Ca sĩ
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
          Thêm ca sĩ mới
        </Button>
        <AddSingerDialog
          openAdd={openAdd}
          addLoading={addLoading}
          handleCloseAddDialog={handleCloseAddDialog}
          handleChangeCountry={handleChangeCountry}
          handleOpenSelect={handleOpenSelect}
          handleCloseSelect={handleCloseSelect}
          handleFormSubmit={handleAddFormSubmit}
          country={country}
          handleDropFileImage={handleDropFileImage}
          loading={loading}
          filesImage={filesImage}
          progressAdd={progressAdd}
        />
        <UpdateSingerDialog
          open={open}
          filesImage={filesImage}
          currentSinger={currentSinger}
          updateLoading={updateLoading}
          openUpdate={openUpdate}
          handleChangeCountry={handleChangeCountry}
          handleDropFileImage={handleDropFileImage}
          handleCloseSelect={handleCloseSelect}
          handleUpdateFormSubmit={handleUpdateFormSubmit}
          handleOpenSelect={handleOpenSelect}
          handleCloseUpdateSingerDialog={handleCloseUpdateSingerDialog}
          loading={loading}
          progressUpdate={progressUpdate}
        />
        <TextField
          name="searchSingers"
          size="small"
          onChange={handleSearchSingerTermChange}
          label="Tìm kiếm ca sĩ/nhóm nhạc"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search htmlColor={darkMode ? '#fff' : ''} />
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
      <AdminSingerlistTable
        page={page}
        isLoading={isLoading}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleOpenUpdateDialog={handleOpenUpdateDialog}
        rows={singersList}
        count={count}
        darkMode={darkMode}
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

export default AdminSingerslistPage;
