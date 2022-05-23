import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Paper,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  LinearProgress,
  Skeleton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Delete, Headphones, Update } from '@mui/icons-material';

const columns = [
  { id: 'image', label: 'Ảnh nhạc', minWidth: 100 },
  { id: 'name', label: 'Tên Bài Hát', minWidth: 240 },
  { id: 'singer', label: 'Ca sĩ', minWidth: 100 },
  {
    id: 'view',
    label: 'Lượt xem',
    minWidth: 100,
  },
  {
    id: 'createdAt',
    label: 'Ngày tạo',
    minWidth: 100,
  },
  {
    id: 'UpdatedAt',
    label: 'Ngày cập nhật',
    minWidth: 100,
  },
  {
    id: 'function',
    label: 'Chức năng',
    minWidth: 220,
  },
];

AdminSonglistTable.propTypes = {
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  isLoading: PropTypes.bool,
  darkMode: PropTypes.bool,
  handleOpenUpdateSongDialog: PropTypes.func,
};
function AdminSonglistTable(props) {
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleOpenUpdateSongDialog,
    handleChangeRowsPerPage,
    isLoading,
    rows,
    count,
    formatView,
    darkMode,
  } = props;
  return (
    <Box sx={{ pl: 1, pt: 2 }}>
      {isLoading === true && (
        <Skeleton variant="rectangular" sx={{ width: '100%', height: '60vh' }} />
      )}
      {isLoading === false && (
        <Paper sx={{ width: '80%', overflow: 'hidden' }}>
          {rows.length <= 0 && <LinearProgress sx={{ width: '100%' }} color="secondary" />}
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={
                        (column.id === 'image'
                          ? {
                              position: 'sticky',
                              left: 0,

                              zIndex: 900,
                            }
                          : column.id === 'name'
                          ? {
                              position: 'sticky',
                              left: 100,

                              zIndex: 900,
                            }
                          : column.id === 'function'
                          ? {
                              position: 'sticky',
                              right: 0,

                              zIndex: 900,
                            }
                          : '',
                        { backgroundColor: darkMode ? 'rgba(95,96,195,1)' : 'rgb(197,242,242)' })
                      }
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              {rows.length > 0 && (
                <TableBody>
                  {rows.map((row, index) => (
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
                          alt="row.title"
                          src={`http://localhost:5000/images/songs/${row.simage}`}
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
                        {row.title}
                      </TableCell>
                      <TableCell>
                        {row.artist.map((artistitem, index) => (
                          <span key={index}>
                            {index > 0 ? ', ' : ''}
                            <Typography
                              variant="caption"
                              // sx={{
                              //   color: darkMode ? 'rgba(244,246,248,0.5)' : '#353535',
                              //   '&:hover': {
                              //     color: darkMode ? '#2DAAED' : '#353535',
                              //   },
                              // }}
                            >
                              {artistitem.artist_name}
                            </Typography>
                          </span>
                        ))}
                      </TableCell>
                      <TableCell>
                        <Box display={'flex'} justifyContent="flex-start" alignItems={'center'}>
                          {formatView(row.view)}
                          <Headphones sx={{ ml: 1 }} fontSize="small" htmlColor="#fff" />
                        </Box>
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
                          <Button
                            onClick={() => handleOpenUpdateSongDialog(row)}
                            startIcon={<Update />}
                          >
                            Cập nhật
                          </Button>
                          <Button startIcon={<Delete />}>Xóa</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          <TablePagination
            sx={{ backgroundColor: darkMode ? 'rgba(95,96,195,1)' : 'rgb(197,242,242)' }}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page - 1}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={'Số dòng từng trang'}
            labelDisplayedRows={({ from, to, count }) => {
              return '' + from + '-' + to + ' trong ' + count;
            }}
          />
        </Paper>
      )}
    </Box>
  );
}

export default AdminSonglistTable;
