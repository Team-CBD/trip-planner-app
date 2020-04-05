import React from "react";
//import logo from '../logo.svg';
import Router from '../routes/route';
import "../styles/Nav.css";

function Nav() {
  return (
<nav className="nav-wrapper navbar-expand-lg navbar-light">

        <div id="logotext" className="App-logo brand-logo right">
          <a className="headtext" href="index.html">Brad<a className="headtextblk" href="index.html">|<a className="headtextgold" href="index.html">J</a></a>
          </a>
        </div>

        <button className="navbar-toggler left" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse row" id="navbarNav">
          <div className="navbar-nav">
          <Router />
          </div>
        </div>
    </nav>
  );
}
export default Nav;

