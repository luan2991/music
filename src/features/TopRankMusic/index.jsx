import React from 'react';
import { ranklist } from './toprank';
import { useParams, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button, ButtonGroup, Stack } from '@mui/material';
import ListRank from './components/ListRank';
// import PropTypes from 'prop-types';
// TopRankMusic.propTypes = {

// };

function TopRankMusic(props) {
  let { area } = useParams();
  let navigate = useNavigate();
  return (
    <Box>
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
            Hàn Quốc
          </Button>
        </ButtonGroup>
      </Stack>
      <ListRank />
    </Box>
  );
}

export default TopRankMusic;
