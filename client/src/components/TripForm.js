import React from "react";
import {

  Link
} from "react-router-dom";

function TripForm ({ destination, handleChange, startDate, endDate, handleSubmit }) {

        return(
           <div>
             <h4 className="text-dark">Create Trip</h4>
              <form onSubmit={handleSubmit}>
                <input className="neuflip m-2 p-2" 
                  type="text" id="destination" placeholder="Trip Name"
                  name="destination"
                  onChange={event => handleChange(event)}
                  value={destination}
                  />
                  <br/>
                  <input type="date"
                  className="neuflip m-2 p-2"
                  placeholder="Start Date"
                  name="startDate"
                  value={startDate}
                  onChange={handleChange} /><br/>
                  <input type="date"
                  className="neuflip m-2 p-2"
                  placeholder="End Date"
                  name="endDate"
                  value={endDate}
                  onChange={handleChange} /><br/>
                  <Link to="/EventCreate"><button id="submit" className="btn buttonz neu">Next</button></Link>
              </form>
           </div>
        );
    }


export default TripForm;