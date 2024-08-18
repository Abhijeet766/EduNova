import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const [showAddTrainer, setShowAddTrainer] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState(false);

  // Trainer form state
  const [trainerData, setTrainerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    qualification: '',
    specialization: '',
    phoneNo: '',
    userName: '',
    password: '',
    roleId: 3,
  });

  // Validation state
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Course form state
  const [courseName, setCourseName] = useState('');

  const navigate = useNavigate();

  const handleTrainerChange = (e) => {
    const { name, value } = e.target;
    setTrainerData((prevState) => ({ ...prevState, [name]: value }));
    validateField(name, value);
  };

  const validateField = (field, value) => {
    let newErrors = { ...errors };

    switch (field) {
      case 'firstName':
      case 'lastName':
      case 'address':
      case 'qualification':
      case 'specialization':
        newErrors[field] = value.trim() ? '' : 'This field is required';
        break;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = emailPattern.test(value) ? '' : 'Invalid email address';
        break;
      case 'phoneNo':
        const phonePattern = /^[0-9]{10}$/;
        newErrors.phoneNo = phonePattern.test(value) ? '' : 'Invalid phone number';
        break;
      case 'userName':
      case 'password':
        newErrors[field] = value.trim() ? '' : 'This field is required';
        break;
      default:
        break;
    }

    setErrors(newErrors);
    checkFormValidity(newErrors);
  };

  const checkFormValidity = (newErrors) => {
    const formValid =
      Object.values(newErrors).every((error) => error === '') &&
      Object.values(trainerData).every((value) => String(value).trim() !== '');

    setIsFormValid(formValid);
  };

  useEffect(() => {
    checkFormValidity(errors);
  }, [trainerData, errors]);

  const handleAddTrainer = async () => {
    if (!isFormValid) return;

    try {
      const response = await fetch('https://localhost:7055/api/Registration/saveTrainer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...trainerData,
          uIdNavigation: {
            roleId: trainerData.roleId,
            username: trainerData.userName,
            password: trainerData.password
          }
        }),
      });

      if (response.ok) {
        alert('Trainer added successfully!');
        setTrainerData({
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          qualification: '',
          specialization: '',
          phoneNo: '',
          userName: '',
          password: '',
          roleId: 3,
        });
        setShowAddTrainer(false);
      } else {
        alert('Failed to add trainer');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add trainer');
    }
  };

  const handleAddCourse = async () => {
    try {
      const response = await fetch('https://localhost:7055/api/subjects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subjectName: courseName }),
      });

      if (response.ok) {
        alert('Course added successfully!');
        setCourseName('');
        setShowAddCourse(false);
      } else {
        alert('Failed to add course');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add course');
    }
  };

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
        <h1 className="h3">Admin Dashboard</h1>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </header>

      <main>
        <div className="mb-4">
          <button
            className="btn btn-primary me-2"
            onClick={() => setShowAddTrainer(!showAddTrainer)}
          >
            {showAddTrainer ? 'Cancel Trainer' : 'Add Trainer'}
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddCourse(!showAddCourse)}
          >
            {showAddCourse ? 'Cancel Course' : 'Add Course'}
          </button>
        </div>

        {showAddTrainer && (
          <div className="mb-4">
            <h3>Add Trainer</h3>
            {/* Trainer form fields */}
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                value={trainerData.firstName}
                onChange={handleTrainerChange}
              />
              {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                value={trainerData.lastName}
                onChange={handleTrainerChange}
              />
              {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={trainerData.email}
                onChange={handleTrainerChange}
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Address"
                value={trainerData.address}
                onChange={handleTrainerChange}
              />
              {errors.address && <div className="text-danger">{errors.address}</div>}
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                name="qualification"
                placeholder="Qualification"
                value={trainerData.qualification}
                onChange={handleTrainerChange}
              />
              {errors.qualification && <div className="text-danger">{errors.qualification}</div>}
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                name="specialization"
                placeholder="Specialization"
                value={trainerData.specialization}
                onChange={handleTrainerChange}
              />
              {errors.specialization && <div className="text-danger">{errors.specialization}</div>}
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                name="phoneNo"
                placeholder="Phone Number"
                value={trainerData.phoneNo}
                onChange={handleTrainerChange}
              />
              {errors.phoneNo && <div className="text-danger">{errors.phoneNo}</div>}
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                name="userName"
                placeholder="Username"
                value={trainerData.userName}
                onChange={handleTrainerChange}
              />
              {errors.userName && <div className="text-danger">{errors.userName}</div>}
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={trainerData.password}
                onChange={handleTrainerChange}
              />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
            <button
              className="btn btn-primary"
              onClick={handleAddTrainer}
              disabled={!isFormValid}
              style={{
                backgroundColor: isFormValid ? 'darkblue' : 'lightblue',
                color: 'white',
                cursor: isFormValid ? 'pointer' : 'not-allowed',
              }}
            >
              Add Trainer
            </button>
          </div>
        )}

        {showAddCourse && (
          <div className="mb-4">
            <h3>Add Course</h3>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={handleAddCourse}>
              Add Course
            </button>
          </div>
        )}
      </main>

      <footer className="text-center py-3 mt-4 border-top">
        <p>&copy; 2024 EduNova. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
