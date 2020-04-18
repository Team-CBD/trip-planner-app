import React, { useState, useEffect } from 'react';
import DeleteBtn from './DeleteBtn';
import API from '../utils/api';
import { Link } from 'react-router-dom';
import { TripList, TripListSingle } from "./TripList";
import '../styles/style.css';


function Trip() {
  const [trip, setTrips] = useState([])

  useEffect(() => {
    loadTrips()
  }, [])

  function loadTrips() {
    API.getTrips()
    .then(res => {
      console.log(res.data);
      setTrips(res.data)
    })
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
        {trip.length ? (
          <TripList>
            {trip.map(trip => (
             <TripListSingle key={trip._id} className="col-sm-6">
             <div className="col">
               
                <Link to={"/trip/" + trip._id}>
                <h3>{trip.destination}</h3><br/>

                <b>From: {trip.startDate}</b><br/><b>To: {trip.endDate}</b>
                </Link>
                <DeleteBtn onClick={() => deleteTrip(trip._id)} />
              
              </div>
              </TripListSingle>
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