import React, { Component } from "react";
import Form from "./Form";


class TripData extends Component {
    constructor(props) {
        super(props);
        this.state = {
        trips: [
            {city: "Florence, Italy", description: "We are eating pasta", date: "2020-05-13"},
            {city: "London, England", description: "Going to watch Chelsea football", date: "2020-06-12"}
        ]    
    };
    this.addTrip = this.addTrip.bind(this);
} 
  
    addTrip(trip){
        this.setState(state => ({
            trips: [...state.trips, trip]
        }))
    }

    renderTrips() {
        return (
          <ul>
            {this.state.trips.map(trips => (
              <li>
                {trips.city}, {trips.description} {trips.date}
              </li>
            ))}
          </ul>
        );
      }
      render() {
        return (
          <div>
            <h1>Trips</h1>
            {this.renderTrips()}
            <Form addTrip={this.addTrip} />
          </div>
        );
      }









}

export default TripData;