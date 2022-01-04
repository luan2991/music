import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawerAudio from './components/draweraudio';
import HeaderBar from './components/header';
import SidebarLeft from './components/sidebarleft';
import HomeFeature from './features/HomeFeature';
import TopMusicFeature from './features/TopMusicFeature';
import TopRankMusic from './features/TopRankMusic';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderBar />
      <SidebarLeft />
      <Routes>
        <Route path="/" element={<HomeFeature />} />
        <Route path="/top100/:area/:topic" element={<TopMusicFeature />} />
        <Route path="/rank/:area" element={<TopRankMusic />} />
      </Routes>
      <DrawerAudio />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
