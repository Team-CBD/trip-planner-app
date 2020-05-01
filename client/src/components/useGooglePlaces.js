import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

function useGooglePlaces(placeId) {
    // const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    // console.log("@@@@@@", GOOGLE_API_KEY);
   
    // const [results, setResults] = useState({});
    // const [loading, setLoading] = useState(false);

    var config = {
        headers: {'Access-Control-Allow-Origin': true}
    };
    
    useEffect(() =>{
            const placeData = 
                    axios.get(
                        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_phone_number,photo,geometry&key=AIzaSyAfsZaShB8XquLKzIJ9N3f_-gqJ0EqLUTk`
                    )  ;                  
                    //.then(data => console.log("$$$$$", data))
                    console.log("!!!!!!")
        
    }, [])
                    
        
    
    return (
        <div>
            
        </div>
    )
}

export default useGooglePlaces;

///ChIJa147K9HX3IAR-lwiGIQv9i4
//https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJa147K9HX3IAR-lwiGIQv9i4&fields=name,rating,formatted_phone_number,photo,geometry&key=AIzaSyAfsZaShB8XquLKzIJ9N3f_-gqJ0EqLUTk


//https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAE9ZtQB-I1CA6PC9RdMyXAJvfnDK9HOhQCL6GFlKG6GWLAiKEiV6l5CC4WGohzmoxramfSgBJHcU7xOpQ1I9rxBE5_8AdIxpZtYpay_BZwZJxBsZPpgLrY7qaCmjBb5-0EhDEzvDIBHsk7rvLgUWiBHvNGhSW7JPcXPPIpJanG_3pAtXiDQ_gew&key=AIzaSyAfsZaShB8XquLKzIJ9N3f_-gqJ0EqLUTk