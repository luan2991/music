import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, DialogTitle, IconButton, LinearProgress } from '@mui/material';
import { Close } from '@mui/icons-material';

import { Box } from '@mui/system';
import AddSingerForm from '../AddNewSingerForm';

AddSingerDialog.propTypes = {
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
};

function AddSingerDialog(props) {
  const {
    handleCloseAddDialog,
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
        <AddSingerForm
          handleFormSubmit={handleFormSubmit}
          handleChangeCountry={handleChangeCountry}
          open={open}
          handleOpenSelect={handleOpenSelect}
          handleCloseSelect={handleCloseSelect}
          filesImage={filesImage}
          handleDropFileImage={handleDropFileImage}
          country={country}
          addLoading={addLoading}
        />
      </DialogContent>
    </Dialog>
  );
}

export default AddSingerDialog;
