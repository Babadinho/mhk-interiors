import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './screens/Index';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </>
  );
};

export default App;
