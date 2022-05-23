import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  LinearProgress,
  Skeleton,
  TableBody,
} from '@mui/material';
import { Box } from '@mui/system';

import AdminSingerlistItem from '../AdminSingerlistItem';

const columns = [
  { id: 'image', label: 'Ảnh playlist', minWidth: 100 },
  { id: 'name', label: 'Tiêu đề', minWidth: 240 },
  {id:'view',label:'Lượt xem',minWidth:100},
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

AdminPlaylistTable.propTypes = {
  formatView:PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  isLoading: PropTypes.bool,
  darkMode: PropTypes.bool,
  handleOpenUpdateDialog: PropTypes.func,
};
function AdminPlaylistTable(props) {
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleOpenUpdateDialog,
    handleChangeRowsPerPage,
    formatView,
    isLoading,
    rows,
    count,
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
                    <AdminSingerlistItem
                      key={index}
                      row={row}
                      index={index}
                      handleOpenUpdateDialog={handleOpenUpdateDialog}
                      darkMode={darkMode}
                      formatView={formatView}
                    />
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

export default AdminPlaylistTable;
