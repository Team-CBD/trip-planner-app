import React, { useState }from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Register from "./Register";
import Login from "./Login";
import '../styles/style.css'



function ModalElement() {
    const [login, setLogin] = useState(false); 
    const [register, setRegister] = useState(false);
  
    const handleLoginClose = () => setLogin(false);
    const handleRegisterClose = () => setRegister(false);

    const handleLogin = () => setLogin(true);
    const handleRegister = () => setRegister(true);
  
    return (
        <>
        <Button className="neu buttonz" variant="primary" onClick={handleLogin}>
          Login
        </Button>
  
        <Modal show={login} onHide={handleLoginClose}backdrop="false">
          <Modal.Header closeButton>
            <Modal.Title>Welcome Back</Modal.Title>
          </Modal.Header>
          <Modal.Body><Login /></Modal.Body>
          <Modal.Footer>
            <Button className="neu buttonz text-dark" variant="secondary" onClick={handleLoginClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Button className="neu buttonz ml-2" variant="primary" onClick={handleRegister}>
          Register
        </Button>
  
        <Modal show={register} onHide={handleRegisterClose} backdrop="false">
          <Modal.Header closeButton>
            <Modal.Title>Welcome to our Team</Modal.Title>
          </Modal.Header>
          <Modal.Body><Register /></Modal.Body>
          <Modal.Footer>
            <Button className="neu buttonz text-dark"variant="secondary" onClick={handleRegisterClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default ModalElement;
