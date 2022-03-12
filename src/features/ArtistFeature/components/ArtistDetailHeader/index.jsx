import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Grid, Stack, Typography } from '@mui/material';

ArtistDetailHeader.propTypes = {
  darkMode: PropTypes.bool,
  artistData: PropTypes.array,
};

function ArtistDetailHeader(props) {
  return (
    <Box
      pt={2}
      pb={2}
      width="100%"
      sx={{
        background: props.darkMode
          ? 'linear-gradient(114deg, rgba(12,45,203,1) 0%, rgba(103,100,130,1) 29%, rgba(16,91,167,1) 100%)'
          : '#fff',
      }}
    >
      <Stack ml={2} direction="column" spacing={2} jusitfyContent="center" alignItems="center">
        <Grid container spacing={{ xs: 5, sm: 5, md: 6 }}>
          <Grid item xs={3.5} sm={3.5}>
            {/* Anh cua ca si */}
            <Box
           
              className="imageBox"
              sx={{
                position: 'relative',
                width: '15em',
                height: '15em',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10em',
              }}
            >
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10em',
                  boxShadow: '0 8px 16px rgb(0 0 0 / 20%)',
                }}
                src={`http://localhost:5000/${props.artistData[0]?.artist_image.replace('./', '')}`}
                alt="casi"
              />
            </Box>
          </Grid>
          <Grid item>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Typography
                noWrap
                sx={{
                  color: props.darkMode ? 'rgba(244,246,248,1)' : '',
                  fontSize: '2em',
                }}
              >
                {props.artistData[0]?.artist_name}
              </Typography>
              <Typography
                noWrap
                sx={{
                  color: props.darkMode ? 'rgba(244,246,248,1)' : '',
                  fontSize: '1em',
                }}
              >
                {props.artistData[0]?.introduce}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default ArtistDetailHeader;
