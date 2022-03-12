import { Skeleton, Stack,  } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


import LibraryList from './components/LibraryList';

// import PropTypes from 'prop-types';
// AccountFeature.propTypes = {

// };

function AccountFeature(props) {
  // const [valueTab, setValueTab] = useState(0);
  // const [loadingSkeleton, setLoadingSkeleton] = useState(false);
  // const handleChangeTab = (event, newValue) => {
  //   setValueTab(newValue);
  // };
  return (
    <Box bgcolor='rgb(24, 35, 45)' pt='4em'>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        
      >
        <Skeleton
          sx={{ bgcolor: props.darkMode ? '#353535' :'' }}
          animation="wave"
          variant="circular"
          width={200}
          height={200}
        />
        <Skeleton
          sx={{borderRadius:'20em' , bgcolor: props.darkMode ? '#353535' :'' }}
          animation="wave"
          variant="rectangular"
          width={180}
          height={15}
        />

        <Skeleton
          sx={{borderRadius:'20em' , bgcolor: props.darkMode ? '#353535' :'' }}
          animation="wave"
          variant="rectangular"
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
          sx={{ bgcolor: props.darkMode ? '#353535' :'' }}
          animation="wave"
          variant="rectangular"
          width="80%"
          height={120}
        />
      </Stack>
      <Box mt={4} pb={12} pl={2} pr={2}>
      <LibraryList darkMode={props.darkMode}/>
      </Box>
    </Box>
  );
}

export default AccountFeature;
