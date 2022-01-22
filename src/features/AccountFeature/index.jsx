import { Skeleton, Stack, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LibraryList from './components/LibraryList';

// import PropTypes from 'prop-types';
// AccountFeature.propTypes = {

// };

function AccountFeature(props) {
  const [valueTab, setValueTab] = useState(0);
  const [loadingSkeleton, setLoadingSkeleton] = useState(false);
  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };
  return (
    <Box>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        width="100%"
        height={300}
      >
        <Skeleton
          sx={{ bgcolor: '#353535' }}
          animation="wave"
          variant="circular"
          width={200}
          height={200}
        />
        <Skeleton
          sx={{ bgcolor: '#353535' }}
          animation="wave"
          variant="text"
          width={180}
          height={15}
        />

        <Skeleton
          sx={{ bgcolor: '#353535' }}
          animation="wave"
          variant="text"
          width={130}
          height={15}
        />

        {/* <Tabs
          sx={{ color: 'rgba(244,246,248,0.88)' }}
          value={valueTab}
          onChange={handleChangeTab}
          aria-label="Tabs Account"
        >
          <Tab sx={{ color: 'rgba(244,246,248,0.88)' }} label="Tổng Quan" />
          <Tab sx={{ color: 'rgba(244,246,248,0.88)' }} label="Bài Hát" />
          <Tab sx={{ color: 'rgba(244,246,248,0.88)' }} label="PlayList" />
        </Tabs> */}
       
        <Skeleton
          sx={{ bgcolor: '#353535' }}
          animation="wave"
          variant="rectangular"
          width="80%"
          height={300}
        />
      </Stack>
      <LibraryList />
    </Box>
  );
}

export default AccountFeature;
