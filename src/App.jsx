import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawerAudio from './components/draweraudio';
import HeaderBar from './components/header';
import SidebarLeft from './components/sidebarleft';
import AccountFeature from './features/AccountFeature';
import AllPlayList from './features/AllPlayList';
import ArtistDetailPage from './features/ArtistFeature';
import HomeFeature from './features/HomeFeature';
import NewMusicFeature from './features/NewMusicFeature';
import SongFeature from './features/SongFeature';
import TopMusicFeature from './features/TopMusicFeature';
import TopRankMusic from './features/TopRankMusic';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <BrowserRouter>
      <HeaderBar />
      <Box sx={{backgroundColor: darkMode ? 'rgb(24, 34, 45)' : '#fff',}}>
      <SidebarLeft />
      <Box
        sx={{
          height: '100vh',
          
          width: {
            xs: 'calc(100% - 3.1em)',
            sm: 'calc(100% - 3.1em)',
            md: 'calc(100% - 3.1em)',
            lg: 'calc(100% - 560px)',
          },
          marginRight: { xs: '3.1em', sm: '3.1em', md: '3.1em', lg: '320px' },
          marginLeft: { xs: '3.1em', sm: '3.1em', md: '3.1em', lg: '240px' },
        }}
      >
        
          <Routes>
            <Route path="/" element={<HomeFeature darkMode={darkMode} />} />
            <Route path="top100/:area/:topic" element={<TopMusicFeature darkMode={darkMode} />} />
            <Route path="rank/:area" element={<TopRankMusic darkMode={darkMode} />} />
            <Route path="playlist" element={<AllPlayList darkMode={darkMode} />} />
            <Route path="new-music" element={<NewMusicFeature darkMode={darkMode} />} />
            <Route path="account" element={<AccountFeature darkMode={darkMode} />} />
            <Route path="song/:songId" element={<SongFeature darkMode={darkMode} />} />
            <Route path="ca-si/:artistId" element={<ArtistDetailPage darkMode={darkMode} />} />
          </Routes>
        
      </Box>
      <DrawerAudio />
      </Box>
    </BrowserRouter>
  );
}

export default App;
