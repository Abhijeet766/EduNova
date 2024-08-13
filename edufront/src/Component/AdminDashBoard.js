import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AdminDashboard = () => {
  const [showAddTrainer, setShowAddTrainer] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [trainerName, setTrainerName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const navigate = useNavigate();

  const handleAddTrainer = async () => {
    try {
      const response = await fetch('https://localhost:7055/api/Trainer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: trainerName }),
      });

      if (response.ok) {
        alert('Trainer added successfully!');
        setTrainerName('');
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
      const response = await fetch('https://localhost:7055/api/Course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: courseName,
          description: courseDescription,
        }),
      });

      if (response.ok) {
        alert('Course added successfully!');
        setCourseName('');
        setCourseDescription('');
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
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Trainer Name"
                value={trainerName}
                onChange={(e) => setTrainerName(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={handleAddTrainer}>
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
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Course Description"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
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

export default AdminDashboard;
