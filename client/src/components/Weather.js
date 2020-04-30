import React, { useState } from "react";
import "../styles/weather.css";
import "../styles/style.css";
import "../styles/Nav.css";

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

    function required() {
        var empt = document.forms["form"]["text"].value;
        if (empt == "") {
            alert("Please input a Value");
            return false;
        }
        else {
            return true;
        }
    }
    
    return (
        <div className="row">

            <div className="card col-sm-3 bg-light wSearch neu">
                <div className="card-title pt-2">Five Day Forecast</div>
                <div className="justify-content-center col-sm-4 p-2">

                    <form id="form" name="form" onSubmit={getForecast,required}>
                        <input
                            type="text" id="text" name="text" className="textInput m-2 p-2 neuflip"
                            placeholder="Enter City"
                            maxLength="50"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <br />
                        <button className="btn btn-default neu"type="submit">Search</button>
                    </form>
                </div>
            </div>


            <div className="col-sm-9 row">
                {query.map((item, index) => (
                    <div>
                        {index % 9 === 0 &&
                            <div className="row">
                                <div className="card wCard col shadow ml-3 p-2 m-4">
                                    <div className="col">{item.dt_txt.split(' ')[0]}</div>
                                    <div className="">{Math.round(item.main.temp_max)}°</div>
                                    <div className="conditions"> {item.weather[0].description.toUpperCase()}</div>
                                    <div className=""> {item.main.humidity}% Humidity</div>
                                    <div className="">
                                        <img className="icon justify-content-center" src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="wthr img" />
                                    </div>
                                </div>
                            </div>

                        }
                    </div>
                ))}
            </div>

        </div>

    );
}

export default Forecast;

