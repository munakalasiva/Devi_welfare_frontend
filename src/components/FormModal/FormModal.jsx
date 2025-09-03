// src/components/FormModal.jsx
import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./FormModal.css"; // custom styles

const FormModal = ({ show, handleClose, title, children, onSubmit }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title className="custom-modal-title">{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="custom-modal-body">{children}</Modal.Body>

      <Modal.Footer className="custom-modal-footer">
        <Button
          variant="light"
          onClick={handleClose}
          className="custom-btn cancel-btn"
        >
          Cancel
        </Button>
        {/* <Button
          variant="primary"
          type="submit"
          form="donationForm"
          onClick={onSubmit}
          className="custom-btn submit-btn"
        >
          Submit
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
