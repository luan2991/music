import { Box } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom';
import DrawerAudio from './components/draweraudio';
import HeaderBar from './components/header';
import SidebarLeft from './components/sidebarleft';
import HomeFeature from './features/HomeFeature';

import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Box >
      <HeaderBar />
      <SidebarLeft />
      <HomeFeature/>
      <DrawerAudio />
    </Box>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
