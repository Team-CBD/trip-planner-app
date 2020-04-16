import React, { useState/*, useEffect */} from 'react';
//import DeleteBtn from './DeleteBtn';
import API from '../utils/api';
import { Link } from 'react-router-dom';
import '../styles/style.css';


function TripForm() {
  const [setTrips] = useState([])
  const [formObject, setFormObject] = useState({})
  
  function loadTrip() {
    API.findOneTrip()
    .then(res => 
      setTrips(res.data)
    )
    .catch(err => console.log(err));
  }

  function refreshPage() {
    window.location.reload(false);
  }
  
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.destination && formObject.startDate && formObject.endDate) {

      
      API.addTrip({
        destination: formObject.destination,
        startDate: formObject.startDate,
        endDate: formObject.endDate
      })
      .then(res => loadTrip())
      .catch(err => console.log(err));
      window.location.reload(false);
      refreshPage();
    }
  };

    function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };


 
  return(
    <div className = "container">
      <div className = "tripForm">
        <h4 className="text-dark pt-3">Create Trip</h4>
        <form onSubmit={handleFormSubmit}>
          <input className="neuflip m-2 p-2" 
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
            <Link to="/trip"><button onClick={handleFormSubmit} id="submit" className="btn neu">Next</button></Link>
        </form>
      </div>

      
    </div>
  )


}



export default TripForm;