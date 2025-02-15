// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(''); // Clear any previous error.

    if (username === 'Admin' && password === 'Admin@123') {
      navigate('/adminDashboard'); // Redirecting to admin dashboard.
      return;
    }

    try {
      const response = await fetch("https://localhost:7055/api/Users/CheckLogin", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.status === 401) {
        throw new Error('Invalid username or password');
      }

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      localStorage.setItem("LoggedUser", JSON.stringify(data)); // Store user data
      navigate('/studentDashboard'); // Redirect to student dashboard
    } catch (error) {
      setError(error.message);
    }
  };

  const handleBackToHomepage = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom position-relative">
        <h1 className="h3 mb-0">Login</h1>
        <button 
          className="btn btn-secondary position-absolute top-0 end-0 mt-3 me-3"
          onClick={handleBackToHomepage}
        >
          Back to Home
        </button>
      </header>
      <main className="text-center">
        <h2 className="mb-4">Login to EduNova</h2>
        <div className="login-form mx-auto" style={{ maxWidth: '400px' }}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          {error && <p className="text-danger mt-3">{error}</p>}
        </div>
      </main>
      <footer className="text-center py-3 mt-4 border-top">
        <p>&copy; 2024 EduNova. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
