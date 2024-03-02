import {  Routes, Route, BrowserRouter} from 'react-router-dom';
import React from 'react';
// import { Box } from '@mui/material'; 

import './App.css';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';


function App() {
  return (
    <BrowserRouter>
    {/* <Box sx={{ backgroundColor: '#000'}}> */}
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />

      </Routes>
    {/* </Box> */}
    <div className="App">
      <div>App</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
