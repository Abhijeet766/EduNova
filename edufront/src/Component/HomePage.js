import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
  const navigate = useNavigate();

  const handleLearnMore = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
        <div>
          <h1 className="h3 mb-0">EduNova</h1>
          <p className="mb-0 text-muted" style={{ fontSize: '0.875rem' }}>Every Star Must Shine</p>
        </div>
        <div>
         
          <a className="btn btn-primary me-2" href="/register">Register</a>
          <a className="btn btn-primary me-2" href="/login">Login</a>
        </div>
      </header>
      <main>
        <div className="text-center mb-4">
          <h2 className="mb-4">Welcome to EduNova</h2>
          <p className="lead mb-4">EduNova offers a unique and innovative educational experience designed to enhance learning and facilitate academic success.</p>
        </div>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Explore Courses</h5>
                <p className="card-text">Discover a wide range of courses designed to meet your learning needs.</p>
                <button className="btn btn-primary" onClick={() => handleLearnMore('/courses')}>Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Meet Our Trainers</h5>
                <p className="card-text">Connect with experienced trainers and get personalized guidance.</p>
                <button className="btn btn-primary" onClick={() => handleLearnMore('/trainers')}>Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Student Success Stories</h5>
                <p className="card-text">Read inspiring success stories from students who achieved their goals with EduNova.</p>
                <button className="btn btn-primary" onClick={() => handleLearnMore('/success-stories')}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">Learn more about EduNova's mission, vision, and values.</p>
                <button className="btn btn-primary" onClick={() => handleLearnMore('/about-us')}>Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <p className="card-text">Get in touch with us for any queries or support.</p>
                <button className="btn btn-primary" onClick={() => handleLearnMore('/contact-us')}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center py-3 mt-4 border-top">
        <p>&copy; 2024 EduNova. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
