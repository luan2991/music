import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, DialogTitle, IconButton, LinearProgress } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Box } from '@mui/system';

UpdatePlaylistDialog.propTypes = {
  openUpdate: PropTypes.bool,
  updateLoading: PropTypes.bool,
  handleCloseUpdateSingerDialog: PropTypes.func,
  handleCloseSelect: PropTypes.func,
  handleOpenSelect: PropTypes.func,
  loading: PropTypes.bool,
  open: PropTypes.bool,
  handleChangeCountry: PropTypes.func,
  progressUpdate: PropTypes.number,
  currentSinger: PropTypes.object,
  filesImage: PropTypes.array,
  country: PropTypes.array,
  handleDropFileImage: PropTypes.func,
  handleUpdateFormSubmit: PropTypes.func,
};

function UpdatePlaylistDialog(props) {
  const {
    filesImage,
    updateLoading,
    openUpdate,
    handleDropFileImage,
    open,
    handleCloseSelect,
    handleOpenSelect,
    handleCloseUpdateSingerDialog,
    handleUpdateFormSubmit,
    loading,
    progressUpdate,
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
      open={updateLoading === true ? true : openUpdate}
      onClose={handleCloseUpdateSingerDialog}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Cập nhật ca sĩ
        <IconButton
          aria-label="close"
          onClick={handleCloseUpdateSingerDialog}
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
          <LinearProgress variant="determinate" value={progressUpdate} />
        </Box>
      )}
      <DialogContent dividers>
        {/* <UpdateSingerForm
          handleUpdateFormSubmit={handleUpdateFormSubmit}
          currentSinger={currentSinger}
          filesImage={filesImage}
          country={country}
          handleChangeCountry={handleChangeCountry}
          handleCloseSelect={handleCloseSelect}
          handleDropFileImage={handleDropFileImage}
          handleOpenSelect={handleOpenSelect}
          open={open}
        /> */}
      </DialogContent>
    </Dialog>
  );
}

export default UpdatePlaylistDialog;
