import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../../components/FormField/InputField';
import Public from '@mui/icons-material/Public';
import {
  Button,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import DropzoneField from '../../../../components/FormField/DropzoneField';
import { Create } from '@mui/icons-material';
import AddSongPlaylist from '../AddSongPlaylist';

const countryList = [
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
AddPlaylistForm.propTypes = {
  filesImage: PropTypes.array,
  formSubmit: PropTypes.func,
  handleDropFileImage: PropTypes.func,
  handleChangeCountry: PropTypes.func,
  open: PropTypes.bool,
  handleOpenSelect: PropTypes.func,
  handleCloseSelect: PropTypes.func,
  songAddList: PropTypes.array,
  songList: PropTypes.array,
};

function AddPlaylistForm({
  filesImage,
  formSubmit,
  handleDropFileImage,
  addLoading,
  handleChangeCountry,
  handleCloseSelect,
  handleOpenSelect,
  open,
  country,
  songAddList,
  songList,
}) {
  const schema = yup
    .object()
    .shape({
      playlistTitle: yup.string().required('Tiêu đề không được để trống'),
      fileImage: yup
        .mixed()
        .required('Bạn cần phải thêm 1 file hình ảnh')
        .test('fileType', 'Loại file không hợp lệ', (value) =>
          ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
        ),
    })
    .required();
  const form = useForm({
    defaultValues: {
      playlistTitle: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  return (
    <form autoComplete="off">
      <InputField name="playlistTitle" label="Tiêu đề playlist" form={form} />
      <Box
        sx={{
          flexDirection: 'row',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <TextField
          name="searchSingers"
          // onChange={handleSearchTermChange}
          label="Tìm kiếm nhạc"
          fullWidth
        />
        <FormControl sx={{ width: '20%', ml: '1rem', mr: '1rem' }}>
          <InputLabel>Chọn Nước</InputLabel>
          <Select
            sx={{ width: '100%' }}
            open={open}
            onClose={handleCloseSelect}
            onOpen={handleOpenSelect}
            value={country}
            label="Chọn Nước"
            onChange={handleChangeCountry}
          >
            <MenuItem value="all">
              <Public fontSize="small" htmlColor="#8f57fd" />
              <span style={{ marginLeft: '1rem' }}>Tất cả</span>
            </MenuItem>
            {countryList.map((item, index) => (
              <MenuItem value={item.value} key={index}>
                <img style={{ width: '1.5em', height: '1em' }} alt="country" src={item.imageLink} />
                <span style={{ marginLeft: '1rem' }}>{item.label}</span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <AddSongPlaylist songAddList={songAddList} songList={songList} />

      <Stack justifyContent={'flex-start'} alignItems={'flex-start'} flexDirection={'column'}>
        <Typography variant="caption" sx={{ fontSize: '1em' }}>
          Cập nhật ảnh playlist (Bạn chỉ có thể thả 1 file hình ảnh vào đây):
        </Typography>
        <DropzoneField
          label="Thả file hình ảnh vào đây"
          defaultlabel="Kéo thả file hình vào vào đây hoặc click để chọn file hình ảnh"
          accept="image/*"
          files={filesImage}
          handleDropFile={handleDropFileImage}
          name="fileImage"
          form={form}
        />
      </Stack>

      <Box mt={8}>
        <Button
          disabled={addLoading}
          onClick={form.handleSubmit(formSubmit)}
          variant="contained"
          startIcon={<Create />}
        >
          Thêm ca sĩ/nhóm nhạc
        </Button>
      </Box>
    </form>
  );
}

export default AddPlaylistForm;
