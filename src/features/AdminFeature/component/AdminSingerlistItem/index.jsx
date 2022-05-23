import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, ButtonGroup, TableCell, TableRow } from '@mui/material';
import { Delete, Headphones, Update } from '@mui/icons-material';

AdminSingerlistItem.propTypes = {
  darkMode: PropTypes.bool,
  rows: PropTypes.array,

  handleOpenUpdateDialog: PropTypes.func,
};

function AdminSingerlistItem(props) {
  const { darkMode, row, handleOpenUpdateDialog, index } = props;
  return (
    <TableRow
      key={row._id}
      sx={{
        bgcolor: darkMode
          ? index % 2 === 0
            ? 'rgba(95,97,218,1)'
            : 'rgba(95,96,195,1)'
          : index % 2 === 0
          ? 'rgb(236,226,213)'
          : 'rgb(197,242,242)',
      }}
    >
      <TableCell
        sx={{
          position: 'sticky',
          left: 0,
          bgcolor: darkMode
            ? index % 2 === 0
              ? 'rgba(95,97,218,1)'
              : 'rgba(95,96,195,1)'
            : index % 2 === 0
            ? 'rgb(236,226,213)'
            : 'rgb(197,242,242)',
        }}
      >
        <img
          style={{ width: '4em', height: '4em' }}
          alt={`${row.title}`}
          src={`http://localhost:5000/images/artist/${row.artist_image}`}
        />
      </TableCell>
      <TableCell
        sx={{
          position: 'sticky',
          left: 100,
          bgcolor: darkMode
            ? index % 2 === 0
              ? 'rgba(95,97,218,1)'
              : 'rgba(95,96,195,1)'
            : index % 2 === 0
            ? 'rgb(236,226,213)'
            : 'rgb(197,242,242)',
        }}
      >
        {row.artist_name}
      </TableCell>

      <TableCell>{new Date(row.createdAt).toLocaleString('en-GB')}</TableCell>
      <TableCell>{new Date(row.updatedAt).toLocaleString('en-GB')}</TableCell>
      <TableCell
        sx={{
          position: 'sticky',
          right: 0,
          bgcolor: darkMode
            ? index % 2 === 0
              ? 'rgba(95,97,218,1)'
              : 'rgba(95,96,195,1)'
            : index % 2 === 0
            ? 'rgb(236,226,213)'
            : 'rgb(197,242,242)',
        }}
      >
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => handleOpenUpdateDialog(row)} startIcon={<Update />}>
            Cập nhật
          </Button>
          <Button startIcon={<Delete />}>Xóa</Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
}

export default AdminSingerlistItem;
