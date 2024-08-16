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

  // Validation state.
  const [errors, setErrors] = useState({});
  const [isTrainerFormValid, setIsTrainerFormValid] = useState(false);

  // Course form state.
  const [courseName, setCourseName] = useState('');
  const [courseError, setCourseError] = useState('');
  const [isCourseFormValid, setIsCourseFormValid] = useState(false);

  const navigate = useNavigate();

  // Handle changes for trainer form.
  const handleTrainerChange = (e) => {
    const { name, value } = e.target;
    setTrainerData((prevState) => ({ ...prevState, [name]: value }));
    validateTrainerField(name, value);
  };

  // Validate trainer form fields.
  const validateTrainerField = (field, value) => {
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
    checkTrainerFormValidity(newErrors);
  };

  // Check trainer form validity.
  const checkTrainerFormValidity = (newErrors) => {
    const formValid =
      Object.values(newErrors).every((error) => error === '') &&
      Object.values(trainerData).every((value) => String(value).trim() !== '');

    setIsTrainerFormValid(formValid);
  };

  // Handle trainer addition.
  const handleAddTrainer = async () => {
    if (!isTrainerFormValid) return;

    try {
      const response = await fetch('https://localhost:7298/api/Registration/saveTrainer', {
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

  // Handle course/subject.
  const handleCourseChange = (e) => {
    const { value } = e.target;
    setCourseName(value);
    validateCourseName(value);
  };

  // Validate course/subject name.
  const validateCourseName = (value) => {
    setCourseError(value.trim() ? '' : 'Course name is required');
    setIsCourseFormValid(value.trim() !== '');
  };

  // Handle course addition.
  const handleAddCourse = async () => {
    if (!isCourseFormValid) return;

    try {
      const response = await fetch('https://localhost:7298/api/Subjects', {
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
            {showAddTrainer ? 'Cancel Add Trainer' : 'Add Trainer'}
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddCourse(!showAddCourse)}
          >
            {showAddCourse ? 'Cancel Add Course' : 'Add Course'}
          </button>
        </div>

        {showAddTrainer && (
          <div className="mb-4">
            <h3>Add Trainer</h3>
            {/* Trainer form fields */}
            {/* (Same fields as before) */}
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
            {/* (Other trainer fields here) */}
            <button
              className="btn btn-primary"
              onClick={handleAddTrainer}
              disabled={!isTrainerFormValid}
              style={{
                backgroundColor: isTrainerFormValid ? 'darkblue' : 'lightblue',
                color: 'white',
                cursor: isTrainerFormValid ? 'pointer' : 'not-allowed',
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
                onChange={handleCourseChange}
              />
              {courseError && <div className="text-danger">{courseError}</div>}
            </div>
            <button
              className="btn btn-primary"
              onClick={handleAddCourse}
              disabled={!isCourseFormValid}
              style={{
                backgroundColor: isCourseFormValid ? 'darkblue' : 'lightblue',
                color: 'white',
                cursor: isCourseFormValid ? 'pointer' : 'not-allowed',
              }}
            >
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
