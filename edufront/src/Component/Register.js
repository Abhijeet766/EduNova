// src/components/Register.js
import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Initial state for the form
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNo: '',
  username: '',
  password: '',
  confirmPassword: '',
  qualification: 'BE',
};

// Reducer function to manage form state
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

// Regex patterns for validation
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
const phonePattern = /^[0-9]{10}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const validateField = (field, value) => {
    let newErrors = { ...errors };

    switch (field) {
      case 'email':
        newErrors.email = emailPattern.test(value) ? '' : 'Invalid email';
        break;
      case 'phoneNo':
        newErrors.phoneNo = phonePattern.test(value) ? '' : 'Invalid phone number';
        break;
      case 'password':
        newErrors.password = passwordPattern.test(value) ? '' : 'Invalid password';
        break;
      case 'confirmPassword':
        newErrors.confirmPassword = value !== state.password ? 'Passwords do not match' : '';
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  useEffect(() => {
    // Check if form is valid
    const formValid =
      Object.values(errors).every((error) => error === '') &&
      Object.values(state).every((value) => value !== '');

    setIsFormValid(formValid);
  }, [errors, state]);

  const handleRegister = async () => {
    const { firstName, lastName, email, phoneNo, username, password } = state;

    if (!isFormValid) return;

    try {
      const response = await fetch('https://localhost:7055/api/Registration/saveStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNo,
          qualification: 'BE',
          enable: true,
          uIdNavigation: { username, password, roleId: 1 },
        }),
      });

      if (response.ok) {
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const responseData = await response.json();
          console.log('Registration successful:', responseData);
          navigate('/login');
        } else {
          const errorText = await response.text();
          console.error('Expected JSON but received:', errorText);
          alert('Registration failed: Invalid response format');
        }
      } else {
        const errorText = await response.text();
        console.error('Registration failed:', errorText);
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
        <h1 className="h3">Register</h1>
      </header>
      <main className="text-center">
        <h2 className="mb-4">Create an Account</h2>
        <div className="login-form mx-auto" style={{ maxWidth: '600px', position: 'relative' }}>
          <div className="form-group mb-3 d-flex align-items-center">
            <label htmlFor="firstName" className="form-label mr-2" style={{ width: '150px' }}>
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="form-control"
              placeholder="First Name"
              value={state.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3 d-flex align-items-center">
            <label htmlFor="lastName" className="form-label mr-2" style={{ width: '150px' }}>
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={state.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3 d-flex align-items-center">
            <label htmlFor="email" className="form-label mr-2" style={{ width: '150px' }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              value={state.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <div className="text-danger position-absolute end-0" style={{ top: '0', transform: 'translateY(0)' }}>
                {errors.email}
              </div>
            )}
          </div>
          <div className="form-group mb-3 d-flex align-items-center">
            <label htmlFor="phone" className="form-label mr-2" style={{ width: '150px' }}>
              Phone Number
            </label>
            <input
              id="phone"
              name="phoneNo"
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              value={state.phoneNo}
              onChange={handleInputChange}
            />
            {errors.phoneNo && (
              <div className="text-danger position-absolute end-0" style={{ top: '0', transform: 'translateY(0)' }}>
                {errors.phoneNo}
              </div>
            )}
          </div>
          <div className="form-group mb-3 d-flex align-items-center">
            <label htmlFor="username" className="form-label mr-2" style={{ width: '150px' }}>
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
              placeholder="Username"
              value={state.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3 d-flex align-items-center">
            <label htmlFor="password" className="form-label mr-2" style={{ width: '150px' }}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              value={state.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <div className="text-danger position-absolute end-0" style={{ top: '0', transform: 'translateY(0)' }}>
                {errors.password}
              </div>
            )}
          </div>
          <div className="form-group mb-3 d-flex align-items-center">
            <label htmlFor="confirmPassword" className="form-label mr-2" style={{ width: '150px' }}>
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={state.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <div className="text-danger position-absolute end-0" style={{ top: '0', transform: 'translateY(0)' }}>
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <button
            className="btn"
            onClick={handleRegister}
            disabled={!isFormValid}
            style={{
              backgroundColor: isFormValid ? 'darkblue' : 'lightblue',
              color: 'white',
              cursor: isFormValid ? 'pointer' : 'not-allowed',
            }}
          >
            Register
          </button>
        </div>
      </main>
      <footer className="text-center py-3 mt-4 border-top">
        <p>&copy; 2024 EduNova. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Register;
