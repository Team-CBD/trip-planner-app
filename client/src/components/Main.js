import React from "react";
import "../styles/style.css";
import About from '../routes/about';
import Contact from '../routes/contact';
import CreateTrip from '../routes/tripcreate';
import {
  Switch,
  Route
} from "react-router-dom";

function Main () {
    return (
     
      <Switch>
      <Route exact path="/">
        <About />
      </Route>
      <Route path="/tripcreate">
        <CreateTrip />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  
    );
  };

export default Main;
