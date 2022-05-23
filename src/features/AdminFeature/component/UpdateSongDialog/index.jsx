import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle, IconButton, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import UpdateSongForm from '../UpdateSongForm';

UpdateSongDialog.propTypes = {
  openUpdate: PropTypes.bool,
  updateLoading: PropTypes.bool,
  handleCloseUpdateSongDialog: PropTypes.func,
  handleCloseSelect: PropTypes.func,
  handleOpenSelect: PropTypes.func,
  loading: PropTypes.bool,
  progressUpdate: PropTypes.number,
  currentSong: PropTypes.object,
  filesMp: PropTypes.array,
  filesImage: PropTypes.array,
  handleDropFileMp: PropTypes.func,
  handleDropFileImage: PropTypes.func,
  handleUpdateFormSubmit: PropTypes.func,
};

function UpdateSongDialog(props) {
  const {
    filesMp,
    filesImage,
    currentSong,
    updateLoading,
    handleSearchTermChange,
    openUpdate,
    handleDropFileImage,
    open,
    handleCloseSelect,
    handleDropFileMp,
    handleOpenSelect,
    handleCloseUpdateSongDialog,
    handleUpdateFormSubmit,
    singersList,
    singersAddList,
    country,
    handleChangeCountry,
    onDragEnd,
    handleRemoveSinger,
    handleAddSinger,
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
      onClose={handleCloseUpdateSongDialog}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Cập nhật bài hát
        <IconButton
          aria-label="close"
          onClick={handleCloseUpdateSongDialog}
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
        <UpdateSongForm
          currentSong={currentSong}
          handleSearchTermChange={handleSearchTermChange}
          open={open}
          handleDropFileMp={handleDropFileMp}
          handleCloseSelect={handleCloseSelect}
          handleOpenSelect={handleOpenSelect}
          handleChangeCountry={handleChangeCountry}
          country={country}
          filesMp={filesMp}
          filesImage={filesImage}
          onDragEnd={onDragEnd}
          singersList={singersList}
          handleAddSinger={handleAddSinger}
          singersAddList={singersAddList}
          handleDropFileImage={handleDropFileImage}
          handleRemoveSinger={handleRemoveSinger}
          updateLoading={updateLoading}
          handleUpdateFormSubmit={handleUpdateFormSubmit}
        />
        
      </DialogContent>
    </Dialog>
  );
}

export default UpdateSongDialog;
