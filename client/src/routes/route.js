import React from "react";

import {

  Link
} from "react-router-dom";

export default function route() {
  return (
   

      <div className="nav-wrapper white-text row">

        <ul>
          <li className="col s3 left">
            <Link to="/">About</Link>
          </li>
          <li className="col s4 left">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          
          <li className="col s3 left">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        
        <hr />


       
      </div>

  );

}
