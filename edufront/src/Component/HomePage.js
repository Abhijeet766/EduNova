// src/components/Homepage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Homepage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    // Replace this with your actual API call
    // const user = await login({ username, password });
    // console.log('Login successful:', user);
    // navigate('/dashboard'); // Redirect to a protected page
    alert('Login functionality is not implemented yet');
  };

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <a className="navbar-brand" href="/">EduNova</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary ms-2" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-secondary ms-2" href="/register">Register</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
        <div id="carouselExampleIndicators" className="carousel slide mb-4">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://via.placeholder.com/1200x500?text=Slide+1" className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Empower Your Learning</h5>
                <p>Join us and take your education to the next level.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1200x500?text=Slide+2" className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Expert Trainers</h5>
                <p>Learn from the best in the industry.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1200x500?text=Slide+3" className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Innovative Courses</h5>
                <p>Explore a range of courses tailored for your success.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="text-center">
          <h2 className="mb-4">Welcome to EduNova</h2>
          <p className="lead mb-4">EduNova offers a unique and innovative educational experience designed to enhance learning and facilitate academic success.</p>
          <p className="mb-4">Explore our courses, connect with experienced trainers, and join a vibrant community of learners. Discover the tools and resources you need to achieve your educational goals and excel in your studies.</p>
          <p>Whether you are a student seeking new knowledge or a professional looking to upgrade your skills, EduNova is your gateway to a brighter future.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-3 mt-4 bg-light border-top">
        <p>&copy; 2024 EduNova. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
