import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DropzoneField from '../../../../components/FormField/DropzoneField';
import InputField from '../../../../components/FormField/InputField';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';

import { Create } from '@mui/icons-material';

UpdateSingerForm.propTypes = {
  handleDropFileImage: PropTypes.func,
  addLoading: PropTypes.bool,
  handleUpdateFormSubmit: PropTypes.func,
};

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
function UpdateSingerForm(props) {
  const {
    handleUpdateFormSubmit,
    handleChangeCountry,
    open,
    handleOpenSelect,
    handleCloseSelect,
    filesImage,
    handleDropFileImage,
    currentSinger,
    updateLoading,
  } = props;
  const schema = yup
    .object()
    .shape({
      singerName: yup.string().required('Tên bài hát không được để trống'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      singerName: currentSinger.artist_name,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const formSubmit = (value) => {
    handleUpdateFormSubmit(value, form);
  };
  return (
    <form autoComplete="off">
      <InputField name="singerName" label="Tên ca sĩ/nhóm nhạc" form={form} />
      <Box
        sx={{
          flexDirection: 'row',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <FormControl sx={{ width: '20%' }}>
          <InputLabel>Chọn Nước</InputLabel>
          <Select
            sx={{ width: '100%' }}
            open={open}
            onClose={handleCloseSelect}
            onOpen={handleOpenSelect}
            value={currentSinger.country}
            label="Chọn Nước"
            onChange={handleChangeCountry}
          >
            {countryList.map((item, index) => (
              <MenuItem value={item.value} key={index}>
                <img style={{ width: '1.5em', height: '1em' }} alt="country" src={item.imageLink} />
                <span style={{ marginLeft: '1rem' }}>{item.label}</span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }} mt={2}>
        <Typography variant="caption">Ảnh hiện tại:</Typography>
        <img
          style={{ width: '10em', height: '10em' }}
          alt={`${currentSinger.artist_name}`}
          src={`http://localhost:5000/images/artist/${currentSinger.image}`}
        />
      </Box>
      <Stack justifyContent={'flex-start'} alignItems={'flex-start'} flexDirection={'column'}>
        <Typography variant="caption" sx={{ fontSize: '1em' }}>
          Bạn chỉ có thể thả 1 file hình ảnh vào đây
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
          disabled={updateLoading}
          onClick={form.handleSubmit(formSubmit)}
          variant="contained"
          startIcon={<Create />}
        >
          Cập nhật ca sĩ/nhóm nhạc
        </Button>
      </Box>
    </form>
  );
}

export default UpdateSingerForm;
