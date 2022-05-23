import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DrawerAudio from './components/draweraudio';
import HeaderBar from './components/header';
import SidebarLeft from './components/sidebarleft';
import AccountPage from './features/AccountFeature/pages/AccountPage';
import ForgetPasswordPage from './features/AccountFeature/pages/ForgetPasswordPage';
import AllPlayList from './features/AllPlayList';
import ArtistDetailPage from './features/ArtistFeature';
import HomeFeature from './features/HomeFeature';
import NewMusicFeature from './features/NewMusicFeature';
import SignUpPage from './features/AccountFeature/pages/SignUpPage';
import SongFeature from './features/SongFeature';
import TopMusicFeature from './features/TopMusicFeature';
import TopRankMusic from './features/TopRankMusic';

import AdminSonglistPage from './features/AdminFeature/page/AdminSonglistPage';
import AdminSingerslistPage from './features/AdminFeature/page/AdminSingerslistPage';
import AdminPlayListPage from './features/AdminFeature/page/AdminPlayListPage';

function PrivateLoginRoute({ children }) {
  const user = useSelector((state) => state.auth.currentUser);

  return user !== '' ? children : <Navigate to="/" />;
}
function PrivateRoute({ children }) {
  const user = useSelector((state) => state.auth.currentUser);

  return user === '' ? children : <Navigate to="/" />;
}

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const user = useSelector((state) => state.auth.currentUser);
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: darkMode ? 'rgb(24, 34, 45)' : '#fff' }}>
        <HeaderBar />
        {/* <DrawerAudio /> */}
        <SidebarLeft />

        <Box
          sx={{
            backgroundColor: darkMode ? 'rgb(24, 34, 45)' : '#fff',
            width: {
              xs: 'calc(100% - 3.1em)',
              sm: 'calc(100% - 3.1em)',
              md: 'calc(100% - 3.1em)',
              lg: 'calc(100%-240px)', //user?.admin === true ? 'calc(100%-240px)' : 'calc(100% - 560px)',
            },
            // paddingRight: { xs: '3.1em', sm: '3.1em', md: '3.1em', lg: '320px' },
            paddingLeft: { xs: '3.1em', sm: '3.1em', md: '3.1em', lg: '240px' },
          }}
        >
          <Routes>
            <Route path="/" element={<HomeFeature darkMode={darkMode} />} />
            <Route path="top100/:area/:topic" element={<TopMusicFeature darkMode={darkMode} />} />
            <Route path="rank/:area" element={<TopRankMusic darkMode={darkMode} />} />
            <Route path="new-playlist" element={<AllPlayList darkMode={darkMode} />} />
            <Route path="new-music" element={<NewMusicFeature darkMode={darkMode} />} />
            <Route
              path="account"
              element={
                <PrivateLoginRoute>
                  <AccountPage darkMode={darkMode} />
                </PrivateLoginRoute>
              }
            />
            <Route path="song/:songId" element={<SongFeature darkMode={darkMode} />} />
            <Route path="ca-si/:artistId" element={<ArtistDetailPage darkMode={darkMode} />} />
            <Route path="sign-up" element={<SignUpPage darkMode={darkMode} />} />
            <Route
              path="forget-password"
              element={
                <PrivateRoute>
                  <ForgetPasswordPage darkMode={darkMode} />
                </PrivateRoute>
              }
            />
            <Route path="admin/song-list" element={<AdminSonglistPage darkMode={darkMode} />} />
            <Route
              path="admin/singer-list"
              element={<AdminSingerslistPage darkMode={darkMode} />}
            />
            <Route path="admin/playlist" element={<AdminPlayListPage darkMode={darkMode} />} />
            {/* {user?.admin === true
              ? [
                  <Route
                    path="admin/song-list"
                    element={<AdminSonglistPage darkMode={darkMode} />}
                  />,
                ]
              : null} */}
            <Route path="/song-list" element={<AdminSonglistPage darkMode={darkMode} />} />
            <Route path={'*'} element={<Navigate replace to={'/'} />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
