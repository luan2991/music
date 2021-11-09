import React from 'react';
import ReactDOM from 'react-dom';
import SidebarLeft from './components/sidebarleft';
import SidebarRight from './components/sidebarright';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SidebarLeft />
    <SidebarRight/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
