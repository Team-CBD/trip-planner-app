import React, { Component } from "react";
import Form from "./Form";


class TripData extends Component {
    constructor(props) {
        super(props);
        this.state = {
        trips: [
            {city: "Florence, Italy", description: "We are eating pasta", date: "2020-05-13"},
            {city: "Rome, Italy", description: "Seeing the sites", date: "2020-05-15"},
            {city: "London, England", description: "Going to watch Chelsea football", date: "2020-09-12"},
            {city: "Sussex, England", description: "Going to watch the Duke and Duchess", date: "2020-09-13"}
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
          <ul className="card-body col-sm-6">
            {this.state.trips.map(trips => (
              <li className="col card center m-2 p-2">
                <div className="card-title">{trips.city}</div> {trips.description}<br/> {trips.date}
              </li>
            ))}
          </ul>
        );
      }
      render() {
        return (
          <div>
            
            <div className="container">
            <Form addTrip={this.addTrip} />
            {this.renderTrips()}
            
            </div>
          </div>
        );
      }









}

export default TripData;