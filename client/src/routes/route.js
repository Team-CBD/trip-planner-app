import React from "react";

import {

  Link
} from "react-router-dom";

export default function route() {
  return (
   

      <div className="nav-wrapper white-text container">

        <ul className="row">
          <li className="col-sm">
            <Link to="/">About</Link>
          </li>
          <li className="col-sm">
            <Link to="/tripcreate">Trip Tool</Link>
          </li>
          
          <li className="col-sm">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        
        <hr />


       
      </div>

  );

}
