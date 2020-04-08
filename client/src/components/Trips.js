import React, { Component } from "react";
import Form from "./Form.js";
// eslint-disable-next-line
import Gmap from "./GoogleMap";

class TripData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [
        { city: "Florence, Italy", description: "We are eating pasta", date: "2020-05-13" },
        { city: "Rome, Italy", description: "Seeing the sites", date: "2020-05-15" },
        { city: "London, England", description: "Going to watch Chelsea football", date: "2020-09-12" },
        { city: "Sussex, England", description: "Going to watch the Duke and Duchess", date: "2020-09-13" }
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
          <li className="col card shadow-sm center m-2 p-2">
            <div className="card-title">{trips.city}</div> {trips.description}<br /> {trips.date}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (


      <div className="justify-content-center">
        <Form addTrip={this.addTrip} />
        <div className="row">

          <div id="map" className="map col-sm-5 pt-5 offset-1">
            <div id="floating-panel">
              <input id="address" type="textbox" value=""></input>
              <input id="submit" type="button" value="Geocode"></input>
            </div>
            <Gmap />
          </div>
          <div className="col-sm-5">
            {this.renderTrips()}
          </div>

        </div>
      </div>
    );
  }

}

export default TripData;