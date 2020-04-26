import React, { useState } from 'react';
import PlacesAutocomplete, { 
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';

function GoogleSearchBox(props) {
    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
        console.log(results);
    }

    return (
        <div>
            <PlacesAutocomplete 
                value={address} 
                onChange={setAddress, props.handleInputChange} 
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input {...getInputProps()} />
                        <div>
                            {loading ? <div>...loading</div> : null}
                        
                            {suggestions.map((suggestion) =>{
                                const style = {
                                    backgroundColor: suggestion.active ? "#50C1E9" : "#fff"
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
    )
}

export default GoogleSearchBox;