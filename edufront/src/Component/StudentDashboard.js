// src/components/StudentDashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false);

  useEffect(() => {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem('LoggedUser'));
    if (userData && userData.username) {
      setUsername(userData.username);
    } else {
      navigate('/login'); // Redirect to login if no user data
    }

    // Fetch courses (subjects) and notifications
    fetch('https://localhost:7055/api/Subjects')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));

    fetch('/api/notifications')
      .then(response => response.json())
      .then(data => setNotifications(data))
      .catch(error => console.error('Error fetching notifications:', error));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('LoggedUser'); // Clear user data
    navigate('/login');
  };

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setEnrollmentSuccess(false); // Reset success message
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleConfirmEnroll = () => {
    // Simulate enrollment process
    console.log(`Enrolled in course: ${selectedCourse.subjectName}`);

    // Show success message
    setEnrollmentSuccess(true);

    // Automatically close the modal after 1-2 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 1500); // 1500 ms = 1.5 seconds
  };

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
        <h1 className="h3">Student Dashboard</h1>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </header>
      <main>
        <section className="mb-4">
          <h2 className="mb-3">Welcome, {username}!</h2>
          <p>Here you can view your courses, check notifications, and manage your profile.</p>
        </section>

        <section className="mb-4">
          <h3 className="mb-3">All Courses</h3>
          <ul className="list-group">
            {courses.length > 0 ? (
              courses.map(course => (
                <li key={course.subjectId} className="list-group-item d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
                  <h5>{course.subjectName}</h5>
                  <button className="btn btn-primary" onClick={() => handleEnroll(course)}>Enroll</button>
                </li>
              ))
            ) : (
              <li className="list-group-item">No courses available</li>
            )}
          </ul>
        </section>

        <section>
          <h3 className="mb-3">Notifications</h3>
          <ul className="list-group">
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <li key={notification.id} className="list-group-item">
                  <p>{notification.message}</p>
                </li>
              ))
            ) : (
              <li className="list-group-item">No new notifications</li>
            )}
          </ul>
        </section>
      </main>
      <footer className="text-center py-3 mt-4 border-top">
        <p>&copy; 2024 EduNova. All rights reserved.</p>
      </footer>

      {/* Enrollment Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Enroll in Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {enrollmentSuccess ? (
            <div className="alert alert-success" role="alert">
              Enrolled successfully in <strong>{selectedCourse?.subjectName}</strong>!
            </div>
          ) : (
            <>
              Are you sure you want to enroll in the course: <strong>{selectedCourse?.subjectName}</strong>?
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!enrollmentSuccess && (
            <>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleConfirmEnroll}>
                Confirm Enrollment
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudentDashboard;
