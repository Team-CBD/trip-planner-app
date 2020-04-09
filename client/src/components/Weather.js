import React, { useState } from "react";
import "./weather.css";

const Forecast = () => {
    
    let [city, setCity] = useState("");

    let [query, setQuery] = useState([]);

    function getForecast(e) {

        e.preventDefault();
        

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${"749b68101d8a7b49d61948de98b46bfc&units=imperial"}`)
       
        .then(res => res.json())
        
        .then(res => setQuery(res.list))
        .catch(err => console.error(err));
           
    }
        console.log(setQuery);
    return (
        <div>
        <h4 className="text-dark">Find Current Weather Conditions</h4>
        
        <div>
        <form onSubmit={getForecast}>
                <input
                    type="text" className="textInput"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                     />

                <button className="Button" type="submit">Get Forecast</button>

            </form>

            <div className="weather">
                 {query.map((item) => (
                     <div>
                     {/* <p><strong>{item.city.name}</strong></p> */}
                     <p>{Math.round(item.main.temp)} degrees out with {item.weather.description} (Clouds, rain, etc is supposed to go here).</p>
                     <img className="icon" src ={`http://openweathermap.org/img/w/${item.weather.icon}.png`} alt="wthr img" />
                        </div>
                        ))}
               </div>
        </div>
        
    </div>

    );
 }
 
 export default Forecast;