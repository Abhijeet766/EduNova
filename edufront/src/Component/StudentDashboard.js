import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Simulate fetching data on component mount
  useEffect(() => {
    // Fetch courses
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));

    // Fetch notifications
    fetch('/api/notifications')
      .then(response => response.json())
      .then(data => setNotifications(data))
      .catch(error => console.error('Error fetching notifications:', error));
  }, []);

  const handleLogout = () => {
    // Handle logout logic (e.g., clear tokens, etc.)
    // Navigate to login page
    navigate('/login');
  };

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
        <h1 className="h3">Student Dashboard</h1>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </header>
      <main>
        <section className="mb-4">
          <h2 className="mb-3">Welcome to Your Dashboard</h2>
          <p>Here you can view your courses, check notifications, and manage your profile.</p>
        </section>

        <section className="mb-4">
          <h3 className="mb-3">Your Courses</h3>
          <ul className="list-group">
            {courses.length > 0 ? (
              courses.map(course => (
                <li key={course.id} className="list-group-item">
                  <h5>{course.name}</h5>
                  <p>{course.description}</p>
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
    </div>
  );
};

export default StudentDashboard;
