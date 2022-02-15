import { Button, ButtonGroup, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ListTop from './components/List';
import TopicMusic from './components/Topic';
import { topicUSUK, topicVN, topicAsia } from './../TopMusicFeature/components/Topic/topic.jsx';
// import PropTypes from 'prop-types';

// TopMusicFeature.propTypes = {

// };

function TopMusicFeature(props) {
  let { area, topic } = useParams();
  let navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={2}
        sx={{ width: '100%', height: '60px' }}
      >
        <ButtonGroup>
          <Button onClick={() => navigate(`/top100/vn/young`)} size="large">
            Việt Nam
          </Button>

          <Button onClick={() => navigate(`/top100/usuk/pop`)} size="large">
            Âu Mỹ
          </Button>

          <Button onClick={() => navigate(`/top100/asia/korea`)} size="large">
            Châu Á
          </Button>
        </ButtonGroup>
      </Stack>
      <TopicMusic
        darkMode={props.darkMode}
        topicList={area === 'vn' ? topicVN : area === 'usuk' ? topicUSUK : topicAsia}
      />
      <ListTop
        darkMode={props.darkMode}
        area={area === 'vn' ? topicVN : area === 'usuk' ? topicUSUK : topicAsia}
        topic={topic}
      />
    </Box>
  );
}

export default TopMusicFeature;
