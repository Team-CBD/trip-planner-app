import React from 'react'
import CardElement from '../components/Card'
import TripForm from '../components/TripForm'
import FriendsList from '../components/FriendsList'
import '../styles/style.css'
import API from '../utils/api';


class Home extends React.Component {
  state = {
    trips: [],
    
      destination: "",
      startDate: "",
      endDate: ""
    
  }
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
            <div className="col-md-7 offset-1 justify-content-center">
              <h2 className="text-dark">Dashboard</h2>

              <CardElement />

            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <TripForm destination = {this.state.destination}
                handleChange = {this.handleChange}
                startDate = {this.state.startDate}
                endDate = {this.state.endDate}
                handleSubmit = {this.handleSubmit}
                />
                <h4 className="text-center text-dark pt-3">Friends List</h4>
                <FriendsList />


              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }

}
export default Home;