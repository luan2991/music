import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, DialogTitle, IconButton, LinearProgress } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Box } from '@mui/system';
import AddPlaylistForm from '../AddNewPlaylistForm';

AddNewPlaylistDialog.propTypes = {
  handleCloseAddDialog: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  handleChangeCountry: PropTypes.func,
  openAdd: PropTypes.bool,
  open: PropTypes.bool,
  handleOpenSelect: PropTypes.func,
  handleCloseSelect: PropTypes.func,
  loading: PropTypes.bool,
  filesImage: PropTypes.any,
  progressAdd: PropTypes.number,
  handleDropFileImage: PropTypes.func,
  country: PropTypes.string,
  addLoading: PropTypes.bool,
  songList: PropTypes.array,
  songAddList: PropTypes.array,
};

function AddNewPlaylistDialog(props) {
  const {
    handleCloseAddDialog,
    songList,
    songAddList,
    handleFormSubmit,
    handleChangeCountry,
    openAdd,
    open,
    handleOpenSelect,
    handleCloseSelect,
    loading,
    filesImage,
    handleDropFileImage,
    progressAdd,
    country,
    addLoading,
  } = props;
  return (
    <Dialog
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '1000px', // Set your width here
          },
        },
      }}
      open={addLoading === true ? true : openAdd}
      onClose={handleCloseAddDialog}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Thêm Ca sĩ/Nhóm nhạc Mới
        <IconButton
          aria-label="close"
          onClick={handleCloseAddDialog}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      {loading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={progressAdd} />
        </Box>
      )}
      <DialogContent dividers>
        <AddPlaylistForm
          handleFormSubmit={handleFormSubmit}
          handleChangeCountry={handleChangeCountry}
          open={open}
          handleOpenSelect={handleOpenSelect}
          handleCloseSelect={handleCloseSelect}
          filesImage={filesImage}
          handleDropFileImage={handleDropFileImage}
          country={country}
          addLoading={addLoading}
          songAddList={songAddList}
          songList={songList}
        />
      </DialogContent>
    </Dialog>
  );
}

export default AddNewPlaylistDialog;
