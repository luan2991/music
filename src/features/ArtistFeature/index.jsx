import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import ArtistDetailHeader from './components/ArtistDetailHeader';
import { useParams } from 'react-router-dom';
import artistsApi from './../../api/artistsApi';

ArtistDetailPage.propTypes = {
  darkMode: PropTypes.bool,
};

function ArtistDetailPage(props) {
  let { artistId } = useParams();
  const [artistData, setArtistData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await artistsApi.getArtistDetail({
          artistId: artistId,
        });

        setArtistData(data);
      } catch (error) {
        console.log('failed to fretch post list', error);
      }
      //  console.log(response);
    })();
  }, [artistId]);


  return (
    <Box mt="4em" sx={{ width: '100%' }}>
      <ArtistDetailHeader darkMode={props.darkMode} artistData={artistData}/>
    </Box>
  );
}

export default ArtistDetailPage;
