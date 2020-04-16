import React from "react";
import "../styles/style.css";
import Home from '../routes/home';
import Friends from '../routes/friends';
import EventCreate from '../routes/EventCreate';
import Converter from '../routes/converter';
import Weather from '../routes/weather';
import TripEventForm from '../routes/TripEventForm';

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
      <Route path="/EventCreate">
        <EventCreate />
      </Route>
      <Route path="/friends">
        <Friends />
      </Route>
      <Route path="/converter">
        <Converter />
      </Route>
      <Route path="/weather">
        <Weather />
      </Route>
      <Route path="/trip/:id">
        <TripEventForm />
      </Route>
    </Switch>
  
    );
  };

export default Main;
