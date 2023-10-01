import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main.js';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </>
);

export default App;
