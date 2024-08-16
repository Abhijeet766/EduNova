import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SuccessStories = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const navigate = useNavigate();

  const stories = [
    {
      name: 'Amit Sharma',
      course: 'Advanced Java',
      story: 'Amit started with basic programming knowledge. After completing the Advanced Java course, he landed a position as a software engineer at a major IT firm. His success highlights the power of persistence and advanced learning.'
    },
    {
      name: 'Priya Patel',
      course: 'Data Structures using C++',
      story: 'Priya was initially intimidated by complex data structures. Through diligent study in the Data Structures using C++ course, she excelled in her exams and was offered an internship at a prestigious tech company.'
    },
    {
      name: 'Ravi Kumar',
      course: 'C++ Programming',
      story: 'Ravi had no prior programming experience but developed a strong foundation in C++ through the course. He now works as a junior developer, applying his skills in real-world projects and continuously advancing in his career.'
    },
    {
      name: 'Sneha Reddy',
      course: 'Java Programming',
      story: 'Sneha improved her Java skills significantly through our course. She secured a role as a Java developer in a renowned software company and has been recognized for her contributions to critical projects.'
    },
    {
      name: 'Rohan Verma',
      course: '.Net Development',
      story: 'Rohan transitioned from a different career to software development. The .Net course helped him gain the necessary skills, leading to his current role as a .Net developer where he enjoys solving complex business problems.'
    },
    {
      name: 'Meera Joshi',
      course: 'MySQL',
      story: 'Meera enhanced her database management skills with our MySQL course. She now manages large-scale databases for a major e-commerce platform, ensuring efficient data handling and performance optimization.'
    },
    {
      name: 'Vikram Singh',
      course: 'Data Structures using Java',
      story: 'Vikram’s journey through the Data Structures using Java course led him to excel in coding interviews and secure a position as a software developer. His strong understanding of data structures has been key to his success.'
    },
    {
      name: 'Neha Kapoor',
      course: 'C++ Programming',
      story: 'Neha’s dedication to mastering C++ paid off when she received a scholarship for advanced studies. Her proficiency in C++ has opened doors to exciting opportunities in both academic and professional fields.'
    },
  ];

  const handleShowModal = (story) => {
    setSelectedStory(story);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStory(null);
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
        <h2 className="mb-0">Success Stories</h2>
        <Button 
          variant="secondary" 
          onClick={handleBack} 
          className="position-absolute top-0 end-0 mt-3 me-3"
        >
          Back
        </Button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {stories.map((story, index) => (
          <div className="p-3" key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{story.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{story.course}</Card.Subtitle>
                <Card.Text>
                  {story.story.substring(0, 100)}...
                </Card.Text>
                <Button variant="primary" onClick={() => handleShowModal(story)}>View More</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedStory?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedStory?.story}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SuccessStories;
