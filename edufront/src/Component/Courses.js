// src/components/Courses.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = () => {
  const courseList = [
    { id: 1, name: 'C++' },
    { id: 2, name: 'Java' },
    { id: 3, name: '.NET' },
    { id: 4, name: 'Python' },
    { id: 5, name: 'JavaScript' },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Available Courses</h2>
      <div className="row">
        {courseList.map(course => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title text-center">{course.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
