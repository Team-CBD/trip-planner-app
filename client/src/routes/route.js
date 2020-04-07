import React from "react";

import {

  Link
} from "react-router-dom";

export default function route() {
  return (
   

      <div className="nav-wrapper container">

        <ul className="row">
          <li className="col-sm">
            <Link to="/">Home</Link>
          </li>
          <li className="col-sm">
            <Link to="/tripcreate">Trip</Link>
          </li>
          <li className="col-sm">
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        
        <hr />


       
      </div>

  );

}
