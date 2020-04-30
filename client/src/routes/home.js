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

      <div className="mt-5">
        {/* <AppNavbar /> */}
        <h2 className="ptitle text-dark">Dashboard</h2>


        
          <div className="col col-sm center">
            <p>
              <button className="btn neu btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Add Trip
              </button>
            </p>
            <div className="collapse col col-sm" id="collapseExample">
              <div className="card neu card-body">
              <TripForm />
            </div>
            </div>
          </div>
          <div className="col col-sm">

            <Trip />

          </div>

        
      </div>
    );
  }

}



export default Home;

