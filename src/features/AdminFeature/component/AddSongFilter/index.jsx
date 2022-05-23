import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { FormControlLabel, Stack, Switch, Typography, Divider } from '@mui/material';

AddSongFilter.propTypes = {};

const styleLabel = {
  formlabel: {
    color: '#fff',
    '& .MuiFormControlLabel-label': {
      fontSize: '0.8rem',
    },
  },
};
function AddSongFilter(props) {
  const { filter, handleFilterSong } = props;
  return (
    <Box
      component={'fieldset'}
      sx={{
        width: '80%',

        borderRadius: '10px',
      }}
    >
      <Box sx={{ color: '#fff' }} component={'legend'}>
        Lọc nhạc
      </Box>
      <Box sx={{ width: '100%' }}>
        <Stack
          flexWrap={'wrap'}
          direction="row"
          spacing={1}
          justifyContent="flex-start"
          alignContent={'flex-start'}
          divider={<Divider sx={{ borderColor: '#fff' }} orientation="vertical" flexItem />}
        >
          <Stack
            flexWrap={'wrap'}
            direction="row"
            spacing={1}
            justifyContent="flex-start"
            alignContent={'flex-start'}
          >
            <Typography variant="caption" sx={{ ml: 1, color: '#fff', fontSize: '0.8em' }}>
              Ngày tạo:
            </Typography>
            <FormControlLabel
              sx={styleLabel.formlabel}
              control={
                <Switch
                  onChange={() => handleFilterSong('create', 'desc')}
                  checked={filter.timeCreated === 'desc' ? true : false}
                  size="small"
                />
              }
              label="Mới nhất"
            />

            <FormControlLabel
              sx={styleLabel.formlabel}
              control={
                <Switch
                  onChange={() => handleFilterSong('create', 'asc')}
                  size="small"
                  checked={filter.timeCreated === 'asc' ? true : false}
                />
              }
              label="Cũ nhất"
            />
          </Stack>
          <Stack
            flexWrap={'wrap'}
            direction="row"
            spacing={1}
            justifyContent="flex-start"
            alignContent={'flex-start'}
          >
            <Typography variant="caption" sx={{ color: '#fff', fontSize: '0.8em' }}>
              Ngày cập nhật:
            </Typography>
            <FormControlLabel
              sx={styleLabel.formlabel}
              control={
                <Switch
                  onChange={() => handleFilterSong('update', 'desc')}
                  checked={filter.lastUpdate === 'desc' ? true : false}
                  size="small"
                />
              }
              label="Mới nhất"
            />

            <FormControlLabel
              sx={styleLabel.formlabel}
              control={
                <Switch
                  onChange={() => handleFilterSong('update', 'asc')}
                  checked={filter.lastUpdate === 'asc' ? true : false}
                  size="small"
                />
              }
              label="Cũ nhất"
            />
          </Stack>
          <Stack
            flexWrap={'wrap'}
            direction="row"
            spacing={1}
            justifyContent="flex-start"
            alignContent={'flex-start'}
          >
            <Typography variant="caption" sx={{ color: '#fff', fontSize: '0.8em' }}>
              Tên bài hát:
            </Typography>
            <FormControlLabel
              sx={styleLabel.formlabel}
              control={
                <Switch
                  onChange={() => handleFilterSong('name', 'desc')}
                  checked={filter.name === 'desc' ? true : false}
                  size="small"
                />
              }
              label={<span>Z&rarr;A</span>}
            />

            <FormControlLabel
              sx={styleLabel.formlabel}
              control={
                <Switch
                  onChange={() => handleFilterSong('name', 'asc')}
                  checked={filter.name === 'asc' ? true : false}
                  size="small"
                />
              }
              label={<span>A&rarr;Z</span>}
            />
          </Stack>
          <Stack
            flexWrap={'wrap'}
            direction="row"
            spacing={1}
            justifyContent="flex-start"
            alignContent={'flex-start'}
          >
            <Typography variant="caption" sx={{ color: '#fff', fontSize: '0.8em' }}>
              Lượt xem:
            </Typography>
            <FormControlLabel
              sx={styleLabel.formlabel}
              control={
                <Switch
                  onChange={() => handleFilterSong('view', 'desc')}
                  checked={filter.view === 'desc' ? true : false}
                  size="small"
                />
              }
              label={<span>Tăng dần &uarr;</span>}
            />
            <FormControlLabel
              sx={styleLabel.formlabel}
              control={
                <Switch
                  onChange={() => handleFilterSong('view', 'asc')}
                  checked={filter.view === 'asc' ? true : false}
                  size="small"
                />
              }
              label={<span>Giảm dần &darr;</span>}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default AddSongFilter;
