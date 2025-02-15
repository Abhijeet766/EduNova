import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModelEnroll() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Enrolled Successfully</Modal.Title>
        </Modal.Header>

        {/* <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body> */}

        <Modal.Footer>
          <Button variant="secondary" >Close</Button>
          {/* <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModelEnroll;