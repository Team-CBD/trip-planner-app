import React from "react";
//import logo from '../logo.svg';
import Router from '../routes/route';
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">

        <button className="navbar-toggler  neu" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-brand" />
        </button>

        <div className="collapse navbar-collapse row" id="navbarNav">
          <div className="navbar-nav block">
            <Router />
          </div>
        </div>
    </nav>
  );
}
export default Nav;

