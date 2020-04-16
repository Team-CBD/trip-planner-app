import React from 'react'
import CardElement from '../components/Card'
import TripForm from '../components/TripForm'
import '../styles/style.css'
//import API from '../utils/api';
//import Trip from "../components/Trip";
import ModalElement from "../components/Modals";



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

        <div className="row">
          <div className="fb-login mt-3 pt-3 col-sm-6">
            <ModalElement />
            <TripForm />
          </div>
          <div className="col-md-6">

            <CardElement />

          </div>

        </div>
      </div>
    );
  }

}
export default Home;

