// src/components/ContactUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
        <h1 className="h3 mb-0">Contact Us</h1>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>Back to Home</button>
      </header>

      <main>
        <div className="text-center mb-4">
          <h2>We'd Love to Hear From You!</h2>
          <p>Whether you have questions about our courses, need assistance, or just want to provide feedback, feel free to reach out to us using the contact details below. Our team is here to help you!</p>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card p-3">
              <h5>Email Us</h5>
              <p>If you prefer email, you can reach us at any of the following addresses:</p>
              <ul className="list-unstyled">
                <li><a href="mailto:vaishnavisonawane635@gmail.com">vaishnavisonawane635@gmail.com</a></li>
                <li><a href="mailto:abhijeetsinghthakur567@gmail.com">abhijeetsinghthakur567@gmail.com</a></li>
                <li><a href="mailto:adicheaten1090@gmail.com">adicheaten1090@gmail.com</a></li>
                <li><a href="mailto:salonisingh15jun@gmail.com">salonisingh15jun@gmail.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card p-3">
              <h5>Call Us</h5>
              <p>Prefer to speak with us directly? Reach us at the following numbers:</p>
              <ul className="list-unstyled">
                <li><a href="tel:+9451643181">9451643181</a></li>
                <li><a href="tel:+9451643182">9451643182</a></li>
                <li><a href="tel:+9451643183">9451643183</a></li>
                <li><a href="tel:+9451643184">9451643184</a></li>
              </ul>
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

export default ContactUs;
