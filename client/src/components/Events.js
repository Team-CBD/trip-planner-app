import React, { Component } from "react";
import EventForm from "./EventForm.js";
// eslint-disable-next-line
import Gmap from "./Gmap";
//import Weather from "./Weather";

class EventData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [
        { number: 1, city: "Rome, Italy", description: "We are eating pasta and visiting the Colosseum.", date: "2020-05-13" }
      ]
    };
    this.addTrip = this.addTrip.bind(this);
  }

  addTrip(trip) {
    this.setState(state => ({
      trips: [...state.trips, trip]
    }))
  }

  renderTrips() {
    return (
      <ul className="card-body">
        {this.state.trips.map(trips => (
          <li key={trips.city} className="row card neu center m-2 p-2">
            <div className="col">{trips.number}</div><div className="card-title col">{trips.city}</div> {trips.description}<br /> {trips.date}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (


      <div className="justify-content-center ">
        <h4 className="text-dark pt-3">Events</h4>
        <div className="row">
          <div className="col-sm-6">
            <Gmap />
          </div>
          <div className="col-sm-6">
            {this.renderTrips()}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <EventForm addTrip={this.addTrip} />
          </div>

        </div>
      </div>
    );
  }

}

export default EventData;