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
    <Box
      sx={{
        height: '100vh',
        bgcolor: 'rgb(24, 34, 45)',
        width: {
          xs: 'calc(100% - 50px)',
          sm: 'calc(100% - 50px)',
          md: 'calc(100% - 50px)',
          lg: 'calc(100% - 560px)',
        },
        marginRight: { xs: '50px', sm: '50px', md: '50px', lg: '320px' },
        marginLeft: { xs: '50px', sm: '50px', md: '50px', lg: '240px' },
      }}
    >
      <Box
        sx={{
          width: {
            xs: 'calc(100% - 10px)',
            sm: 'calc(100% - 10px)',
            md: 'calc(100% - 10px)',
            lg: 'calc(100% - 20px)',
          },
          marginTop: '60px',
        }}
        margin="auto"
      >
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
    </Box>
  );
}

export default TopRankMusic;
