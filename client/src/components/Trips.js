import React, { Component } from "react";
import Form from "./TripForm.js";
// eslint-disable-next-line
import Gmap from "./Gmap";
import Weather from "./Weather";
import API from '../utils/api';

class TripData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      currentTrip: {}
    };
  }

  addTrip = (trip) => {
    this.setState(state => ({
      trips: [...state.trips, trip],
      currentTrip: trip
    }))
    API.addTrips(this.state.trip).then(res => {
        console.log(res)
    }) 
  }

  renderTrips = () => {
    return (
      <ul className="card-body">
        {this.state.trips.map(trips => (
          <li key={trips.city} className="col card neu center m-2 p-2">
            <div className="card-title">{trips.city}</div> {trips.description}<br /> {trips.date}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (


      <div className="justify-content-center ">

        <div className="row">
          <div className="col-sm-6">
            <Form addTrip={this.addTrip} />
          </div>
          <div className="col-sm-5">
            <Gmap />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
          {this.renderTrips()}
          </div>
          <div className="col-sm-5">
          <Weather />
          </div>
        </div>
      </div>
    );
  }

}

export default TripData;