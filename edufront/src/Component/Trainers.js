import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const Trainers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [trainers, setTrainers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch trainers from the backend
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('https://localhost:7055/api/Registration/saveTrainer');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };

    fetchTrainers();
  }, []);

  const handleShowModal = (trainer) => {
    setSelectedTrainer(trainer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTrainer(null);
  };

  return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
        <h2 className="mb-0">Meet Our Trainers</h2>
        <Button variant="secondary" onClick={() => navigate('/')}>Back</Button>
      </header>

      <div className="row">
        {trainers.map((trainer, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm border-light">
              <div className="card-body">
                <h5 className="card-title">{trainer.firstName} {trainer.lastName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{trainer.specialization}</h6>
                <p className="card-text">{trainer.address ? trainer.address.substring(0, 100) : "No description available"}...</p>
                <Button variant="primary" onClick={() => handleShowModal(trainer)}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for trainer details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTrainer?.firstName} {selectedTrainer?.lastName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Expertise:</h5>
          <p>{selectedTrainer?.specialization}</p>
          <h5>Description:</h5>
          <p>{selectedTrainer?.address}</p>
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

export default Trainers;
