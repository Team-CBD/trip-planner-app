import React from 'react'
import CardElement from '../components/Card'
import TripForm from '../components/TripForm'

import '../styles/style.css'
import API from '../utils/api';
import Register from "../components/Register";

class Home extends React.Component {
  state = {
    trips: [],
    
      destination: "",
      startDate: "",
      endDate: ""
    
  }
  // getTrip = () => {
  //   API.getTrips().then(res => {
  //     console.log(res)
  //   })
  // }
  addTrip = () => {
    const data = {
      destination: this.state.destination,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }
    console.log(this.state.trips);
    API.addTrips(data).then(res => {
      console.log(res)
    })
  }
  
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.addTrip();
    this.setState({ destination: "", startDate: "", endDate: "" });

  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-7 justify-content-center">
              <h2 className="text-dark">Dashboard</h2>

              <CardElement />

            </div>

            <div className="col-md">
              <div className="sidebar">
              <div className="fb-login mt-3 pt-3">
                <Register />
                </div>
                <div className="mt-4 pt-3">
                <TripForm destination = {this.state.destination}
                handleChange = {this.handleChange}
                startDate = {this.state.startDate}
                endDate = {this.state.endDate}
                handleSubmit = {this.handleSubmit}
                />
               </div>
                <h4 className="text-center text-dark pt-3"> </h4>
                


                </div>
            </div>
          </div>

        </div>
        </div>
     
    );
  }

}
export default Home;