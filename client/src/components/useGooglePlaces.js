import React, { useState, useEffect } from 'react';
import axios from 'axios';


function useGooglePlaces(placeId) {
    const googleApiKey = process.env.GOOGLE_API_KEY;
    // console.log("@@@@@@", googleApiKey);
   
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(false);

    var config = {
        headers: {'Access-Control-Allow-Origin': true}
    };
    
    useEffect(() =>{
      
                axios.get(
                    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_phone_number,photo,geometry&key=${googleApiKey}`, config
                )
                .then(data => console.log("$$$$$", data))
                }, [placeId])
    return (
        <div>
            
        </div>
    )
}

export default useGooglePlaces;