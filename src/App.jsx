import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawerAudio from './components/draweraudio';
import HeaderBar from './components/header';
import SidebarLeft from './components/sidebarleft';
import AccountFeature from './features/AccountFeature';
import AllPlayList from './features/AllPlayList';
import HomeFeature from './features/HomeFeature';
import NewMusicFeature from './features/NewMusicFeature';
import TopMusicFeature from './features/TopMusicFeature';
import TopRankMusic from './features/TopRankMusic';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <BrowserRouter>
      <HeaderBar />
      <SidebarLeft />
      <Box
        sx={{
          bgcolor: darkMode ? 'rgb(24, 34, 45)': '#fff',
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
          <Routes>
            <Route path="/" element={<HomeFeature darkMode={darkMode}/>} />
            <Route path="top100/:area/:topic" element={<TopMusicFeature darkMode={darkMode} />} />
            <Route path="rank/:area" element={<TopRankMusic darkMode={darkMode}/>} />
            <Route path="playlist" element={<AllPlayList darkMode={darkMode}/>} />
            <Route path="new-music" element={<NewMusicFeature darkMode={darkMode}/>} />
            <Route path="account" element={<AccountFeature darkMode={darkMode}/>} />
          </Routes>
        </Box>
      </Box>
      <DrawerAudio />
    </BrowserRouter>
  );
}

export default App;
