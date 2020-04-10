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
        console.log(query);
    return (
        <div>
        <h4>Five Day Forecast</h4>
        
        <div>
        <form onSubmit={getForecast}>
                <input
                    type="text" className="textInput m-2 p-2 neuflip"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                     />
                <br />
                <button className="btn neu" type="submit">Search</button>
            </form>

            <div className="weather">
                 {query.map((item,index) => (
                     <div>
                         {index % 9 === 0 &&
                     <div>
                     <p><strong>{Math.round(item.main.temp)}°</strong> with {item.weather[0].description}</p>
                     <img className="icon" src ={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="wthr img" />
                      </div>
                            }
                        </div>
                        ))}
               </div>
        </div>
        
    </div>

    );
 }
 
 export default Forecast;

 