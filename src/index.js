import { Box } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawerAudio from './components/draweraudio';
import HeaderBar from './components/header';
import SidebarLeft from './components/sidebarleft';
import AccountFeature from './features/AccountFeature';
import LibraryList from './features/AccountFeature/components/LibraryList';
import AllPlayList from './features/AllPlayList';
import HomeFeature from './features/HomeFeature';
import NewMusicFeature from './features/NewMusicFeature';
import TopMusicFeature from './features/TopMusicFeature';
import TopRankMusic from './features/TopRankMusic';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderBar />
      <SidebarLeft />
      <Box
        sx={{
          bgcolor: 'rgb(24, 34, 45)',
          height: '100vh',
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
            <Route path="/" element={<HomeFeature />} />
            <Route path="top100/:area/:topic" element={<TopMusicFeature />} />
            <Route path="rank/:area" element={<TopRankMusic />} />
            <Route path="playlist" element={<AllPlayList />} />
            <Route path="new-music" element={<NewMusicFeature />} />
            <Route path="account" element={<AccountFeature />}/>            
          </Routes>
        </Box>
      </Box>
      <DrawerAudio />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
