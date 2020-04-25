import React from 'react';
import Trip from '../components/Trip';
import TripForm from '../components/TripForm';
import '../styles/style.css';
import RegisterModal from '../components/auth/RegisterModal';
import LoginModal from '../components/auth/LoginModal';
import Logout from '../components/auth/Logout';
//import { Logout } from '../actions/authActions';

// import API from '../utils/api';
// import Trip from "../components/Trip";
//import ModalElement from "../components/Modals";



class Home extends React.Component {
  state = {
    trips: [],

    destination: "",
    startDate: "",
    endDate: ""


  }


  render() {
    return (

      <div className="container mt-5">

        <h2 className="ptitle text-dark">Dashboard</h2>
            <RegisterModal />
            <Logout />
            <LoginModal />


        <div className="row">
          <div className="fb-login mt-3 pt-3 col-sm-6">
            
            <TripForm />
          </div>
          <div className="col-md-6">

            <Trip />

          </div>

        </div>
      </div>
    );
  }

}
export default Home;

