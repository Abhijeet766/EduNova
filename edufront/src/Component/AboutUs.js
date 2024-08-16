// src/components/AboutUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Navigate back to the homepage
  };

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
        <h1 className="h3">About Us</h1>
        <button className="btn btn-secondary" onClick={handleBack}>Back to Homepage</button>
      </header>
      <main>
        <h2 className="mb-4">Our Mission</h2>
        <p>
          At EduNova, our mission is to provide a unique and innovative educational experience
          designed to foster academic excellence and personal growth. We believe in empowering 
          students with the skills and knowledge they need to achieve their goals and make a 
          positive impact on the world.
        </p>
        <h2 className="mb-4">Our Vision</h2>
        <p>
          Our vision is to be a leading educational platform that inspires and supports learners 
          of all ages and backgrounds. We are committed to creating a nurturing environment where 
          students can thrive and develop their full potential.
        </p>
        <h2 className="mb-4">Our Values</h2>
        <p>
          EduNova is built on a foundation of core values that guide everything we do:
        </p>
        <ul>
          <li><strong>Excellence:</strong> We strive for the highest standards in teaching, learning, and student outcomes.</li>
          <li><strong>Innovation:</strong> We embrace new ideas and technologies to enhance the educational experience.</li>
          <li><strong>Integrity:</strong> We conduct ourselves with honesty, transparency, and respect for all.</li>
          <li><strong>Community:</strong> We believe in the power of collaboration and building a strong, supportive community.</li>
          <li><strong>Inclusivity:</strong> We are committed to creating an inclusive environment that values diversity and promotes equal opportunities.</li>
        </ul>
      </main>
      <footer className="text-center py-3 mt-4 border-top">
        <p>&copy; 2024 EduNova. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
