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

  //***startDay and endDay are not landing on the correct day as input its one day behind */
 function generateTrips() {
   console.log("generateTrips");
   return trip.map(trip => {
      let newStartDate = trip.startDate.split("T")[0];
      let [startYr, startMon, startDay] = newStartDate.split("-");
      // console.log(newStartDate);
      // console.log(startDay, startMon, startYr);
      let formatStartDate= `${startMon} / ${startDay} / ${startYr}`;
      let newEndDate = trip.endDate.split("T")[0];
      let [endYr, endMon, endDay] = newEndDate.split("-");
      
      let formatEndDate= `${endMon} / ${endDay} / ${endYr}`;
     return (
      <TripListSingle key={trip._id} >
        <div className="col">
          
        <Link to={"/trip/" + trip._id}>
          <h3>{trip.destination}</h3><br/>
          <img className="rdImg neu mb-4" alt="trip-pic" width="100%" height="auto" src={"https://source.unsplash.com/random/?city,"+ trip.destination}></img>
          <b>{formatStartDate}  ꟷ  {formatEndDate}</b>
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