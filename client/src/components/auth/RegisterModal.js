import React, { Component } from 'react';
import {
  Button,
  Modal,
  Nav,
  Form,
  Alert
} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
//import { Link } from 'react-router-dom';

class RegisterModal extends Component {
  state = {
    modal: false,
    fName: '',
    lName: '',
    email: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { fName, lName, email, password } = this.state;

    // Create user object
    const newUser = {
      fName,
      lName,
      email,
      password
    };

    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <div>
        <Nav.Link onClick={this.toggle} href='#'>
          Register
        </Nav.Link>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Modal.Header toggle={this.toggle}>Register</Modal.Header>
          <Modal.Body>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <Form.Group>
                <label for='fName'>First Name</label>
                <input
                  type='text'
                  name='fName'
                  id='fName'
                  placeholder='First Name'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <label for='lName'>Last Name</label>
                <input
                  type='text'
                  name='lName'
                  id='lName'
                  placeholder='Last Name'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <label for='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <label for='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Register
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(RegisterModal);