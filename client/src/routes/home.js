import React, { Component } from 'react';
import Trip from '../components/Trip';
import TripForm from '../components/TripForm';
import '../styles/style.css';
//import AppNavbar from '../components/AppNavbar';



class Home extends Component {
  state = {
    trips: [],

    destination: "",
    startDate: "",
    endDate: ""
  }



  render() {

    return (

      <div className="container mt-5">
        {/* <AppNavbar /> */}
        <h2 className="ptitle text-dark">Dashboard</h2>


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

