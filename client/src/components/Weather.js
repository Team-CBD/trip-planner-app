import React, { useState } from "react";
import "../styles/weather.css";
import "../styles/style.css";

const Forecast = () => {
    // eslint-disable-next-line
    let [city, setCity] = useState("");
    // eslint-disable-next-line
    let [state, setState] = useState("");
    // eslint-disable-next-line
    let [query, setQuery] = useState([]);


    function getForecast(e) {

        e.preventDefault();


        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&appid=${"749b68101d8a7b49d61948de98b46bfc&units=imperial"}`)

            .then(res => res.json())

            .then(res => setQuery(res.list))
            .catch(err => console.error(err));

    }
    console.log(query);
    return (
        <div>
            <div className="row">
            <div className="card bg-light wSearch neu">
                <div className="card-title pt-2">Five Day Forecast</div>
            <div className="justify-content-center col-sm-4 p-2">
                
                <form onSubmit={getForecast}>
                    <input
                        type="text" className="textInput m-2 p-2 neuflip"
                        placeholder="Enter City"
                        maxLength="50"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <br />
                    <button className="btn btn-default neu" type="submit">Search</button>
                </form>
                </div>
            </div>
        

            <div className="col-sm-6">
                {query.map((item, index) => (
                    <div>
                        {index % 9 === 0 &&
                          <div className="row">
                                <div className="card wCard col-sm shadow ml-3 pt-2 mt-4">
                                    <div className="col">{item.dt_txt.split(' ')[0]}</div>
                                    <div className="col">{Math.round(item.main.temp_max)}°</div>
                                    <div className="col"> {item.weather[0].description.toUpperCase()}</div>
                                    <div className="col"> {item.main.humidity}% Humidity</div>
                                    <div className="col">
                                        <img className="icon offset-3 justify-content-center" src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="wthr img" />
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

