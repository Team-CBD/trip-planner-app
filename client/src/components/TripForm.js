import React, { useState, useEffect } from 'react';
//import DeleteBtn from './DeleteBtn';
import API from '../utils/api';
import { Link } from 'react-router-dom';
//import { TripList, TripListSingle } from "./TripList";
import '../styles/style.css';


function TripForm() {
  const [/*trips, */setTrips, destination, startDate, endDate] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadTrips()
  })

  function loadTrips() {
    API.getTrips()
    .then(res => 
      setTrips(res.data)
    )
    .catch(err => console.log(err));
  }

  // function deleteTrip(id) {
  //   API.deleteTrip(id)
  //     .then(res => loadTrips())
  //     .catch(err => console.log(err));
  // }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.destination && formObject.startDate && formObject.endDate) {
      API.addTrip({
        destination: formObject.destination,
        startDate: formObject.startDate,
        endDate: formObject.endDate,
      })
      .then(res => loadTrips())
      .catch(err => console.log(err));
    }
  };

  return(
    <div className = "container">
      <div className = "tripForm">
        <h4 className="text-dark">Create Trip</h4>
        <form onSubmit={handleFormSubmit}>
          <input className="neuflip m-2 p-2" 
            type="text" id="destination" placeholder="Destination"
            name="destination"
            onChange={event => handleInputChange(event)}
            value={destination}
            />
            <br/>
            <input type="date"
            className="neuflip m-2 p-2"
            placeholder="Start Date"
            name="startDate"
            value={startDate}
            onChange={handleInputChange} /><br/>
            <input type="date"
            className="neuflip m-2 p-2"
            placeholder="End Date"
            name="endDate"
            value={endDate}
            onChange={handleInputChange} /><br/>
            <Link to="/EventCreate"><button onSubmit={handleFormSubmit} id="submit" className="btn neu">Next</button></Link>
        </form>
      </div>

      
    </div>
  )


}



export default TripForm;