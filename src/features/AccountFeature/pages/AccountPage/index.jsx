import { ModeEdit } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';

import LibraryList from '../../components/LibraryList';

import PropTypes from 'prop-types';
AccountPage.propTypes = {
  darkMode: PropTypes.bool,
};

function AccountPage(props) {
  const user = useSelector((state) => state.auth.currentUser);
  return (
    <Box bgcolor="rgb(24, 35, 45)" pt="4em">
      <Stack
        direction="column"
        spacing={2}
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
      >
        <Box
          sx={{
            width: '200px',
            height: '200px',
            borderRadius: '50px',
          }}
        >
          <img
            style={{ width: '100%', height: '100%', borderRadius: '50px' }}
            alt="user"
            src={`http://localhost:5000/images/user/${user.user_image}`}
          />
        </Box>
        <Typography
          variant="caption"
          sx={{ color: props.darkMode ? 'rgba(244,246,248,0.88)' : '#353535', fontSize: '2rem' }}
        >
          {user.account_name}
        </Typography>
        <Button startIcon={<ModeEdit />} variant="contained">
          Cập Nhật
        </Button>
      </Stack>

      <Box mt={4} pb={12} pl={2} pr={2}>
        <LibraryList darkMode={props.darkMode} />
      </Box>
    </Box>
  );
}

export default AccountPage;
