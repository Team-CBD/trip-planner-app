import React from "react";
import TripData from "../components/Trips";

function TripCreate() {
    return (
        <div className="container shadow-sm white radius-1">
            <h1 className="pb">Trip Tool</h1>
            <TripData />
        </div>


    );
}

export default TripCreate;