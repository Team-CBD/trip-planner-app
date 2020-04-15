import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import { TripList, TripListSingle } from "./TripList";
import DeleteBtn from "./DeleteBtn";

function TripEvents(props) {
  const [trip, setTrip, daysEvents, setEvents] = useState({});
  const [formObject, setFormObject] = useState({});

  const {id} = useParams()
  useEffect(() => {
    API.getTrip(id)
      .then(res => setTrip(res.data))
      .catch(err => console.log(err));
  }, []);

  function loadEvents() {
    API.getEvents()
      .then(res => 
        setEvents(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteEvent(id) {
    API.deleteEvent(id)
      .then(res => loadEvents())
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.description && formObject.date) {
      API.addEvent({
        name: formObject.name,
        description: formObject.description,
        date: formObject.date
      })
        .then(res => loadEvents())
        .catch(err => console.log(err));
    }
  };
  

  return (
    <div className = "container">
        <h1>
            {trip.destination} 
        </h1>
        <h2>
            From: {trip.startDate} To: {trip.endDate}
        </h2>


        <div className = "eventForm">
            <h4 className="text-dark pt-3">Create Events</h4>
            <form onSubmit={handleFormSubmit}>
            <input className="neuflip m-2 p-2" 
                type="text" id="eventName" placeholder="Name of Event"
                name="name"
                onChange={handleInputChange}
                />
                <br/>
                <input className="neuflip m-2 p-2" 
                type="text" id="description" placeholder="Description of Event"
                name="description"
                onChange={handleInputChange}
                />
                <br/>
                <input type="date"
                className="neuflip m-2 p-2"
                placeholder="Date of Event"
                name="date"
                onChange={handleInputChange} /><br/>
                <button onClick={handleFormSubmit} id="submit" className="btn neu">Add Event</button>
            </form>
        </div>

        <div className = "eventList">
            {daysEvents.length ? (
                <TripList>
                    {daysEvents.map(daysEvent => (
                        <TripListSingle key={daysEvent._id}>
                            {daysEvent.date} - {daysEvent.name}: {dayEvent.description}
                            <DeleteBtn onClick={() => deleteEvent(Event._id)} />
                        </TripListSingle>
                    ))}
                </TripList>
            ) : (
                <h3>No Events Added</h3>
            )}
        </div>
    </div>
    );
  }

export default TripEvents;
