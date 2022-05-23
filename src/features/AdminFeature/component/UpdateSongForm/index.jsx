import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/FormField/InputField';
import { DragDropContext } from 'react-beautiful-dnd';

import { Droppable } from 'react-beautiful-dnd';
import DragableSingerChip from '../DragableSingerChip';
import { Upgrade } from '@mui/icons-material';
import DropzoneField from '../../../../components/FormField/DropzoneField';

UpdateSongForm.propTypes = {
  handleSearchTermChange: PropTypes.func,
  open: PropTypes.bool,
  handleCloseSelect: PropTypes.func,
  handleOpenSelect: PropTypes.func,
  country: PropTypes.string,
  countryList: PropTypes.array,
  singersList: PropTypes.array,
  singersAddList: PropTypes.array,
  handleAddSinger: PropTypes.func,
  onDragEnd: PropTypes.func,
  handleRemoveSinger: PropTypes.func,
  handleChangeCountry: PropTypes.func,
  filesImage: PropTypes.array,
  handleDropFileImage: PropTypes.func,
  updateLoading: PropTypes.bool,
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

function UpdateSongForm(props) {
  const {
    filesMp,
    filesImage,
    currentSong,
    handleSearchTermChange,
    open,
    handleCloseSelect,
    handleOpenSelect,
    handleChangeCountry,
    handleDropFileMp,
    country,
    handleDropFileImage,
    onDragEnd,
    singersList,
    handleAddSinger,
    singersAddList,
    handleRemoveSinger,
    updateLoading,
    handleUpdateFormSubmit,
  } = props;

  const schema = yup
    .object()
    .shape({
      updateSongName: yup.string().required('Tên bài hát không được để trống'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      updateSongName: currentSong.title,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const formSubmit = (value) => {
    handleUpdateFormSubmit(value, form);
  };

  return (
    <form autoComplete="off">
      <InputField name="updateSongName" label="Tên bài hát" form={form} />
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
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1 }}>
        <Stack
          direction={'column'}
          spacing={1}
          flexWrap="wrap"
          justifyContent={'space-around'}
          alignItems={'flex-start'}
        >
          <Typography variant="caption">Ảnh nhạc hiện tại</Typography>
          <Box sx={{ width: '10em', height: '10em' }}>
            <img
              style={{ width: '100%', height: '100%' }}
              name="currentSongImg"
              alt="song"
              src={`http://localhost:5000/images/songs/${currentSong.image}`}
            />
          </Box>
          <Typography variant="caption">File nhạc hiện tại:{currentSong.src}</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1 }}>
        <Box>
          <Typography variant="caption">File mp3 mới</Typography>

          <DropzoneField
            label="Thả file mp3 vào đây"
            defaultlabel="Kéo thả file mp3 vào đây hoặc click để chọn file mp3"
            name="fileUpdateSong"
            files={filesMp}
            handleDropFile={handleDropFileMp}
            accept="audio/mpeg"
            form={form}
          />
        </Box>
        <Box>
          <Typography variant="caption">File ảnh mới</Typography>

          <DropzoneField
            label="Thả file mp3 vào đây"
            defaultlabel="Kéo thả file mp3 vào đây hoặc click để chọn file mp3"
            name="fileUpdateImage"
            files={filesImage}
            handleDropFile={handleDropFileImage}
            accept="image/*"
            form={form}
          />
        </Box>
      </Stack>

      <Box mt={8}>
        <Button
          disabled={updateLoading}
          onClick={form.handleSubmit(formSubmit)}
          variant="contained"
          startIcon={<Upgrade />}
        >
          Cập nhật bài hát
        </Button>
      </Box>
    </form>
  );
}

export default UpdateSongForm;
