import React, { useState, useEffect } from 'react';
import DeleteBtn from './DeleteBtn';
import API from '../utils/api';
import { Link } from 'react-router-dom';
import { TripList, TripListSingle } from "./TripList";
import '../styles/style.css';


function Trip() {
  const [trips, setTrips, destination, startDate, endDate] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadTrips()
  }, [])

  function loadTrips() {
    API.getTrips()
    .then(res => 
      setTrips(res.data)
    )
    .catch(err => console.log(err));
  }

  function deleteTrip(id) {
    API.deleteTrip(id)
      .then(res => loadTrips())
      .catch(err => console.log(err));
  }

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

      <div className = "tripList row pt-3">
        {trips.length ? (
          <TripList>
            {trips.map(trip => (
              
              <TripListSingle key={trip._id} className="col-sm-6">
                <Link to={"/api/trips/" + trip._id}>
                  {trip.destination} From: {trip.startDate} To: {trip.endDate}
                </Link>
                <DeleteBtn onClick={() => deleteTrip(trip._id)} />
              </TripListSingle>
              
            ))}
          </TripList>
        ) : (
          <div>...</div>
        )}
      </div>
    </div>
  )


}



export default Trip;