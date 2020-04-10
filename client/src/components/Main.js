import React from "react";
import "../styles/style.css";
import Home from '../routes/home';
import Friends from '../routes/friends';
import TripCreate from '../routes/tripcreate';
import Converter from '../routes/converter';

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
      <Route path="/converter">
        <Converter />
      </Route>
    </Switch>
  
    );
  };

export default Main;
