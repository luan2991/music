import { Stack, Typography } from '@mui/material';

import React from 'react';


// import PropTypes from 'prop-types';

// TopicMusic.propTypes = {

// };

function TopicMusic({topicList,darkMode}) {
  return (
    <Stack spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
      {topicList.map((item, index) => (
        <Typography sx={{ color: darkMode ? 'rgba(244,246,248,0.88)':'#353535' }} key={index}>
          {item.title}
        </Typography>
      ))}
    </Stack>
  );
}

export default TopicMusic;
