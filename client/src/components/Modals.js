import React, { useState }from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Register from "./Register";
import Login from "./Login";



function ModalElement() {
    const [login, setLogin] = useState(false); 
    const [register, setRegister] = useState(false);
  
    const handleLoginClose = () => setLogin(false);
    const handleRegisterClose = () => setRegister(false);

    const handleLogin = () => setLogin(true);
    const handleRegister = () => setRegister(true);
  
    return (
        <>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
  
        <Modal show={login} onHide={handleLoginClose}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome Back</Modal.Title>
          </Modal.Header>
          <Modal.Body><Login /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleLoginClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Button variant="primary" onClick={handleRegister}>
          Register
        </Button>
  
        <Modal show={register} onHide={handleRegisterClose}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome to our Team</Modal.Title>
          </Modal.Header>
          <Modal.Body><Register /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleRegisterClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default ModalElement;