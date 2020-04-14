import React, { useState/*, useEffect */} from 'react';
//import DeleteBtn from './DeleteBtn';
import API from '../utils/api';
import { Link } from 'react-router-dom';
import '../styles/style.css';


function TripForm() {
  const [/*trips, */setTrips /*, destination, startDate, endDate*/] = useState([])
  const [formObject, setFormObject] = useState({})
  


  function loadTrips() {
    API.getTrips()
    .then(res => 
      setTrips(res.data)
    )
    .catch(err => console.log(err));
  }

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
            onChange={event => handleInputChange(event)}
            value={'destination'}
            />
            <br/>
            <input type="date"
            className="neuflip m-2 p-2"
            placeholder="Start Date"
            name="startDate"
            value={'startDate'}
            onChange={handleInputChange} /><br/>
            <input type="date"
            className="neuflip m-2 p-2"
            placeholder="End Date"
            name="endDate"
            value={'endDate'}
            onChange={handleInputChange} /><br/>
            <Link to="/EventCreate"><button id="submit" className="btn neu">Next</button></Link>
        </form>
      </div>

      
    </div>
  )


}



export default TripForm;