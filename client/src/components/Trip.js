import React, { useState, useEffect } from 'react';
import DeleteBtn from './DeleteBtn';
import API from '../utils/api';
import { Link } from 'react-router-dom';
import { TripList, TripListSingle } from "./TripList";
import '../styles/style.css';


function Trip() {
  const [trip, setTrips] = useState({})

  useEffect(() => {
    loadTrips()
  }, [])

  function loadTrips() {
    API.getTrips()
    .then(res => {
      console.log(res.data);
      setTrips(res.data);
    })
    .catch(err => console.log(err));
  }

  function deleteTrip(id) {
    API.deleteTrip(id)
      .then(res => loadTrips())
      .catch(err => console.log(err));
  }

  
 function generateTrips() {
   console.log("generateTrips");
   return trip.map(trip => {
     let startDate = new Date(trip.startDate);
     let startMonth = startDate.getMonth()+1;
     let startDay = startDate.getDate();
     let startYear = startDate.getFullYear();
     let startDateString = startMonth+"/"+startDay+"/"+startYear;
     let endDate = new Date(trip.endDate);
     let endMonth = endDate.getMonth()+1;
     let endDay = endDate.getDate();
     let endYear = endDate.getFullYear();
     let endDateString = endMonth+"/"+endDay+"/"+endYear;
     return (
      <TripListSingle key={trip._id} >
        <div className="col">
          
        <Link to={"/trip/" + trip._id}>
          <h3>{trip.destination}</h3><br/>
          <img className="rdImg neu mb-4" alt="trip-pic" width="100%" height="auto" src={"https://source.unsplash.com/random/?city,"+ trip.destination}></img>
          <b>From: {startDateString}</b><br/><b>To: {endDateString}</b>
        </Link>
          <DeleteBtn onClick={() => deleteTrip(trip._id)} />
       
       </div>
       </TripListSingle>
     ) 
   }
   
   )
 }

  return(
    <div className = "container">

      <div className = "tripList pt-3">
        {trip.length ? (
          <TripList>
            {/* {trip.map(trip => (
             <TripListSingle key={trip._id} >
             <div className="col">
               
             <Link to={"/trip/" + trip._id}>
                <h3>{trip.destination}</h3><br/>
                <img className="rdImg neu mb-4" alt="trip-pic" width="100%" height="auto" src="https://source.unsplash.com/random/?city,UK"></img>
                <b>From: {trip.startDate}</b><br/><b>To: {trip.endDate}</b>
                
                <DeleteBtn onClick={() => deleteTrip(trip._id)} />
                </Link>
              </div>
              </TripListSingle>
            ))} */}
            {generateTrips()}
          </TripList>
        ) : (
          <div>No Trips Saved</div>
        )}
      </div>
    </div>
  )


}



export default Trip;

// function randomImg(city, dest}) {
//   var dest = trip.destination;
//   document.getElementById('rdTmgr').innerHTML = '<img src="https://source.unsplash.com/random/?'+city+','+dest+'">';
// }


// <img id="rdImg" width="100%" height="auto" onChange="randomImg(city,dest);"></img>

//<Link to={"/trip/" + trip._id}></Link>