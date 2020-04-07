import React from "react";
import "../styles/style.css";
import Home from '../routes/home';
import Friends from '../routes/friends';
import TripCreate from '../routes/tripcreate';
import {
  Switch,
  Route
} from "react-router-dom";

function Main () {
    return (
     
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/tripcreate">
        <TripCreate />
      </Route>
      <Route path="/friends">
        <Friends />
      </Route>
    </Switch>
  
    );
  };

export default Main;
