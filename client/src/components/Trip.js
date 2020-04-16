import React, { useState, useEffect } from 'react';
import DeleteBtn from './DeleteBtn';
import API from '../utils/api';
import { Link } from 'react-router-dom';
import { TripList, TripListSingle } from "./TripList";
import '../styles/style.css';


function Trip() {
  const [trips, setTrips] = useState([])

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

  
  return(
    <div className = "container">

      <div className = "tripList pt-3">
        {trips.length ? (
          <TripList>
            {trips.map(trip => (
              <div className="col">
              <TripListSingle key={trip._id}>
                <Link to={"/EventCreate/" + trip._id}>
                  <h3>{trip.destination}</h3><br/>From: {trip.startDate}<br/>To: {trip.endDate}
                </Link>
                <DeleteBtn onClick={() => deleteTrip(trip._id)} />
              </TripListSingle>
              </div>
            ))}
          </TripList>
        ) : (
          <div>No Trips Saved</div>
        )}
      </div>
    </div>
  )


}



export default Trip;