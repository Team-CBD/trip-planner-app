import React, { useState } from "react";
import "../styles/weather.css";

const Forecast = () => {
    
    let [city, setCity] = useState("");

    let [query, setQuery] = useState([]);


    function getForecast(e) {

        e.preventDefault();
        

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${"749b68101d8a7b49d61948de98b46bfc&units=imperial"}`)
       
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

            <div className="weather row justify-content-center">
                 {query.map((item,index) => (
                     <div>
                         {index % 9 === 0 &&
                     <div className="col-sm-12 mt-4">
                         <div className="card neu justify-content-center">
                         <h4 className="col-sm">{item.dt_txt.split(' ')[0]}</h4><h5>{Math.round(item.main.temp_max)}°</h5><p className="col-sm"> {item.weather[0].description}</p><p className="col-sm"> {item.main.humidity}% Humidity</p>
                         <div className="row">
                     <img className="icon offset-3 justify-content-center" src ={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="wthr img" />
                      </div>
                      </div>
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

 