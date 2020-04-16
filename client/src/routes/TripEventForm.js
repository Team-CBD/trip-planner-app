import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/api";
import { TripList, TripListSingle } from "../components/TripList";
import DeleteBtn from "../components/DeleteBtn";

function TripEventsForm(props) {
  const [trip, setTrip ] = useState([]);
  const [daysEvent, setEvents] = useState([]);
  const [formObject, setFormObject] = useState({});

  const {id} = useParams()
  useEffect((id) => {
  
    API.findOneTrip(id)
      .then(res => setTrip(res.data))
      .catch(err => console.log(err));
  }, [id]);

  useEffect(() => {
    loadEvents()
  })

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
            Destination: {trip.destination} 
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

        <div>
            {daysEvent.length ? (
                <TripList>
                    {daysEvent.map(Event => (
                        <TripListSingle key={Event._id}>
                            {Event.date} - {Event.name}: {Event.description}
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

export default TripEventsForm;
