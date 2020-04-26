import React, { useState/*, useEffect */} from 'react';
//import DeleteBtn from './DeleteBtn';
import API from '../utils/api';
import GoogleSearchBox from './GoogleSearchBox';
//import { Redirect } from 'react-router';

function TripForm() {

  //const [setTrips] = useState({})
  //const [tripId] = useState({})
  const [formObject, setFormObject] = useState({});
  //const [Redirect, setRedirect] = useState({});
  
  function loadTrip(id) {
    API.findOneTrip(id)
    .then(res => {
      console.log("@@", res._id);
      return (
        document.location = `/trip/${res._id}`
      )
    })
    .catch(err => console.log(err));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.destination && formObject.startDate && formObject.endDate) {

      
      API.addTrip({
        destination: formObject.destination,
        startDate: formObject.startDate,
        endDate: formObject.endDate
      })
      .then(res => {
        console.log("**", res.data._id);
        //tripId = res.data._id;
        loadTrip(res.data._id)
      })
    }
  };

    function handleInputChange(event) {
    const { name, value } = event.target;
    console.log("***", name);
    console.log("*", value);
    setFormObject({...formObject, [name]: value})
  };


 
  return(
    <div className = "container">
      <div className = "tripForm">
        <h4 className="text-dark pt-3">Create Trip</h4>
        <form onSubmit={handleFormSubmit}>
          <GoogleSearchBox className="neuflip m-2 p-2" 
            type="text" id="destination" placeholder="Destination"
            name="destination"
            onChange={handleInputChange}
            />
            <br/>
            <input type="date"
            className="neuflip m-2 p-2"
            placeholder="Start Date"
            name="startDate"
            onChange={handleInputChange} /><br/>
            <input type="date"
            className="neuflip m-2 p-2"
            placeholder="End Date"
            name="endDate"
            onChange={handleInputChange} /><br/>
            {/* <Link to={`/trip/${tripId}`}> */}
              <button id="submit" className="btn neu">Next</button>
            {/* </Link> */}
        </form>
      </div>

      
    </div>
  )
}


export default TripForm;