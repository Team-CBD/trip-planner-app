import React from "react";

import {

  Link
} from "react-router-dom";

export default function route() {
  return (
   

      <div className="nav-wrapper white-text container">

        <ul className="row">
          <li className="col-sm">
            <Link to="/">Home</Link>
          </li>
          <li className="col-sm">
            <Link to="/tripcreate">Trip</Link>
          </li>
          <li className="col-sm">
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
        
        <hr />


       
      </div>

  );

}
