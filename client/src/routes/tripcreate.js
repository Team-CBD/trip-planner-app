import React from "react";
import TripData from "../components/Trips";
import Gmap from "../components/Gmap";



function TripCreate() {
    return (
        <div className="container">

            <TripData />
            <div className="col-lg-7 p-4">
            <Gmap />
            </div>
            
        </div>


    );
}

export default TripCreate;