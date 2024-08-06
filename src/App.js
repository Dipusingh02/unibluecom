// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './Home'

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
     
      </Routes>
    </div>
  );
};

export default App;
