import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h5>Email</h5>
            <a href="mailto:vaishnavisonawane635@gmail.com">vaishnavisonawane635@gmail.com</a>
            <a href="abhijeetsinghthakur567@gmail.com">abhijeetsinghthakur567@gmail.com</a>
            <a href="adicheaten1090@gmail.com">adicheaten1090@gmail.com</a>
            <a href="salonisingh15jun@gmail.com">salonisingh15jun@gmail.com</a>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h5>Phone Numbers</h5>
            <a href="9451643181">9451643181</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
