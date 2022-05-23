import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  LinearProgress,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import AddNewSongForm from '../AddNewSongForm';
import { Box } from '@mui/system';

AddSongDialog.propTypes = {
  handleCloseAddDialog: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  onDragEnd: PropTypes.func,
  handleRemoveSinger: PropTypes.func,
  handleAddSinger: PropTypes.func,
  handleChangeCountry: PropTypes.func,
  handleSearchTermChange: PropTypes.func,
  openAdd: PropTypes.bool,
  open: PropTypes.bool,
  handleOpenSelect: PropTypes.func,
  handleCloseSelect: PropTypes.func,
  loading: PropTypes.bool,
  filesMp: PropTypes.any,
  filesImage: PropTypes.any,
  progress: PropTypes.number,
  handleDropFileMp: PropTypes.func,
  handleDropFileImage: PropTypes.func,
  singersList: PropTypes.array,
  singersAddList: PropTypes.array,
  country: PropTypes.string,
  addLoading: PropTypes.bool,
};

function AddSongDialog(props) {
  const {
    handleCloseAddDialog,
    handleFormSubmit,
    onDragEnd,
    handleRemoveSinger,
    handleAddSinger,
    handleChangeCountry,
    handleSearchTermChange,
    openAdd,
    open,
    handleOpenSelect,
    handleCloseSelect,
    loading,
    filesMp,
    filesImage,
    progress,
    handleDropFileImage,
    handleDropFileMp,
    singersList,
    singersAddList,
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
        Thêm Nhạc Mới
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
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      )}
      <DialogContent dividers>
        <AddNewSongForm
          open={open}
          onDragEnd={onDragEnd}
          handleAddSinger={handleAddSinger}
          handleChangeCountry={handleChangeCountry}
          openAdd={openAdd}
          handleOpenSelect={handleOpenSelect}
          progress={progress}
          loading={loading}
          handleSearchTermChange={handleSearchTermChange}
          handleCloseSelect={handleCloseSelect}
          filesMp={filesMp}
          handleRemoveSinger={handleRemoveSinger}
          filesImage={filesImage}
          handleDropFileImage={handleDropFileImage}
          handleDropFileMp={handleDropFileMp}
          singersList={singersList}
          singersAddList={singersAddList}
          handleFormSubmit={handleFormSubmit}
          country={country}
          addLoading={addLoading}
        />
      </DialogContent>
    </Dialog>
  );
}

export default AddSongDialog;
