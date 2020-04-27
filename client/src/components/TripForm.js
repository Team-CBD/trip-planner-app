import React, { useState } from 'react';
import API from '../utils/api';
import PlacesAutocomplete, { 
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';

function TripForm() {

  const [formObject, setFormObject] = useState({});
  const [destination, setDestination] = useState({});
  //const [placeId, setPlaceId] = useState("");
  
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
    if (destination && 
        formObject.startDate && 
        formObject.endDate) {
      
      API.addTrip({
        destination: destination,
        startDate: formObject.startDate,
        endDate: formObject.endDate,
        //placeId: placeId
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

  const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });

    const handleSelect = async (value) => {
        console.log("!!", value)
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
        console.log("$^^", results);
        //setPlaceId(results[0].place_id);
        setDestination(results[0].formatted_address);
    };

 
  return(
    <div className = "container">
      <div className = "tripForm">
        
        <form onSubmit={handleFormSubmit}>
        <div>
            <PlacesAutocomplete 
                value={address} 
                onChange={setAddress} 
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input {...getInputProps()} 
                            className="neuflip m-2 p-2"
                            type="text" 
                            id="destination" 
                            placeholder="Destination"
                            name="destination"
                            
                        />
                        <div>
                            {loading ? <div>...loading</div> : null}
                        
                            {suggestions.map((suggestion) =>{
                                const style = {
                                    backgroundColor: suggestion.active ? "#368cbf" : "#fff"
                                };

                                return (
                                    <div {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            
            </PlacesAutocomplete>
        </div>
          
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