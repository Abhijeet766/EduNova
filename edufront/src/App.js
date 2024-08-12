// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import HomePage from './Component/HomePage';
//import Login from './Component/Login';
//import Register from './Component/Register';
import HomePage from './Component/HomePage';
import Login  from './Component/Login';
import Register from './Component/Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;