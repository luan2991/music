import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import DropzoneField from '../../../../components/FormField/DropzoneField';
import InputField from '../../../../components/FormField/InputField';
import {
  Avatar,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import DragableSingerChip from '../DragableSingerChip';

import { Create } from '@mui/icons-material';

AddNewSongForm.propTypes = {
  handleDropFileMp: PropTypes.func,
  handleDropFileImage: PropTypes.func,
  addLoading: PropTypes.bool,
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
function AddNewSongForm(props) {
  const {
    handleFormSubmit,
    onDragEnd,
    handleRemoveSinger,
    handleAddSinger,
    handleChangeCountry,
    handleSearchTermChange,
    singersList,
    singersAddList,
    open,
    handleOpenSelect,
    handleCloseSelect,
    filesMp,
    filesImage,
    handleDropFileMp,
    handleDropFileImage,
    country,
    addLoading,
  } = props;
  const schema = yup
    .object()
    .shape({
      songName: yup.string().required('Tên bài hát không được để trống'),
      fileImage: yup
        .mixed()
        .required('Bạn cần phải thêm 1 file hình ảnh')
        .test('fileType', 'Loại file không hợp lệ', (value) =>
          ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
        ),
      fileSong: yup
        .mixed()
        .required('Bạn cần phải thêm 1 file mp3')
        .test('fileType', 'Loại file không hợp lệ', (value) => ['audio/mpeg'].includes(value.type)),
    })
    .required();
  const form = useForm({
    defaultValues: {
      songName: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const formSubmit = (value) => {
    handleFormSubmit(value, form);
  };
  return (
    <form autoComplete="off">
      <InputField name="songName" label="Tên bài hát" form={form} />
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
          onChange={handleSearchTermChange}
          label="Tìm kiếm ca sĩ/nhóm nhạc"
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
            {countryList.map((item, index) => (
              <MenuItem value={item.value} key={index}>
                <img style={{ width: '1.5em', height: '1em' }} alt="country" src={item.imageLink} />
                <span style={{ marginLeft: '1rem' }}>{item.label}</span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={6}>
              <Box>
                <Typography variant="caption" sx={{ fontSize: '1em' }}>
                  Danh sách ca sĩ/ nhóm nhạc
                </Typography>
                <Droppable direction="horizontal" droppableId="singersList">
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{
                        boxShadow: 'inset 0px 0px 1px 2px rgba(81, 40, 145, 0.05)',
                        border: '0.1em dashed rgba(81, 40, 145, 0.5)',
                        backgroundColor: 'rgba(255, 250, 240, 1)',
                        height: '200px',
                        borderRadius: '20px',
                        overflowY: 'scroll',
                      }}
                    >
                      {singersList.map((item, index) => (
                        <DragableSingerChip
                          handleAddSinger={handleAddSinger}
                          item={item}
                          key={item._id}
                          index={Number(index)}
                        />
                      ))}
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Typography variant="caption" sx={{ fontSize: '1em' }}>
                Ca sĩ/ nhóm nhạc được thêm vào bài hát
              </Typography>
              <Box>
                <Droppable direction="horizontal" droppableId="addSingerList">
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{
                        boxShadow: 'inset 0px 0px 1px 2px rgba(81, 40, 145, 0.05)',
                        border: '0.1em dashed rgba(81, 40, 145, 0.5)',
                        backgroundColor: 'rgba(255, 250, 240, 1)',
                        height: '200px',
                        borderRadius: '20px',
                      }}
                    >
                      {singersAddList.map((item, index) => (
                        <Chip
                          key={item._id}
                          color="info"
                          sx={{ ml: 1, mt: 1 }}
                          avatar={
                            <Avatar
                              alt={item.artist_name}
                              src={`http://localhost:5000/images/artist/${item.artist_image}`}
                            />
                          }
                          label={item.artist_name}
                          onDelete={() => handleRemoveSinger(item)}
                        />
                      ))}
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DragDropContext>

      <Stack justifyContent={'flex-start'} alignItems={'flex-start'} flexDirection={'column'}>
        <Typography variant="caption" sx={{ fontSize: '1em' }}>
          Bạn chỉ có thể thả 1 file mp3 vào đây
        </Typography>
        <DropzoneField
          label="Thả file mp3 vào đây"
          defaultlabel="Kéo thả file mp3 vào đây hoặc click để chọn file mp3"
          name="fileSong"
          files={filesMp}
          handleDropFile={handleDropFileMp}
          accept="audio/mpeg"
          form={form}
        />
      </Stack>
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
          disabled={addLoading}
          onClick={form.handleSubmit(formSubmit)}
          variant="contained"
          startIcon={<Create />}
        >
          Thêm bài hát
        </Button>
      </Box>
    </form>
  );
}

export default AddNewSongForm;
