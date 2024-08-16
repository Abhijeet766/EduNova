// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import HomePage from './Component/HomePage';
//import Login from './Component/Login';
//import Register from './Component/Register';
import HomePage from './Component/HomePage';
import Login  from './Component/Login';
import Register from './Component/Register';
import Logout from './Component/Logout';
import AdminDashboard from './Component/AdminDashBoard';
import StudentDashboard from './Component/StudentDashboard';
import Navbar from './Component/Navbar';
import Courses from './Component/Courses';
import Contact from './Component/Contact';
import AboutUs from './Component/AboutUs';
function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path='/' element={<AdminDashboard/>}/>
        <Route path="/studentDashboard" element={<StudentDashboard/>}/>
        <Route path="/courses" element={<Courses/>} />
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App;