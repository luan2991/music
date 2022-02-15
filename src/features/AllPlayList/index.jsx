import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ItemPlayList from './components/Item';

// import PropTypes from 'prop-types';

// AllPlayList.propTypes = {

// };

function AllPlayList(props) {
  return (
    <Box>
      <Typography
        sx={{
          paddingTop: '40px',
          paddingLeft: '10px',
          fontSize: '30px',
          fontWeight: '700',
          color: props.darkMode ? 'rgba(244,246,248,0.88)' :'',
        }}
      >
        Toàn bộ tuyển tập
      </Typography>
      <Box display="flex" justifyContent="center" pb={10}>
        <Grid width="96%" container spacing={2}>
          {Array.from({ length: 32 }, (index) => (
            <Grid item mt={1} xs={3} sm={3} md={3} xl={3} lg={4}>
              <Box key={index} height="200px">
               <ItemPlayList darkMode={props.darkMode}/>
              </Box>
            </Grid>
          ))} 
        </Grid>
      </Box>
    </Box>
  );
}

export default AllPlayList;
