import React, { Component } from "react";
import Form from "./Form";
import Gmap from "./Gmap";


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
          <ul className="card-body">
            {this.state.trips.map(trips => (
              <li className="col card shadow-sm center m-2 p-2">
                <div className="card-title">{trips.city}</div> {trips.description}<br/> {trips.date}
              </li>
            ))}
          </ul>
        );
      }
      render() {
        return (

            
            <div className="row justify-content-center">
            <Form addTrip={this.addTrip} />
            <div className="col-lg-5">
            {this.renderTrips()}
            </div>
            <div className="col-lg-7 p-4">
            <Gmap />
            </div>
            </div>
       
        );
      }









}

export default TripData;