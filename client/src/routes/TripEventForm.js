import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/api";
import { TripList, TripListSingle } from "../components/TripList";
import DeleteBtn from "../components/DeleteBtn";
import '../styles/style.css';

function TripEventsForm(props) {
  const [trip, setTrip ] = useState(false);
  const {id} = useParams();
 
    useEffect(() => {
      console.log(id);
      if(!trip) {
      API.findOneTrip(id)
      .then(res => {
          console.log(res);
          setTrip(res)
        }
          )
      }
      // eslint-disable-next-line
      }, [id]);

  
  const [daysEvent, setEvents] = useState({});
  const [formObject, setFormObject] = useState({});


  useEffect(() => {
    loadEvents(id)
  }, [id]);

  function loadEvents(id) {
    API.getEvents(id)
      .then(res => 
        setEvents(res.data)
      )
  };

  function deleteEvent(id) {
    API.deleteEvent(id)
      .then(res => loadEvents())
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
    }
  };
  
console.log(trip);
  return (
    <div className = "container">
      <div className="row">
      <div className = "card shadow-sm mt-5 pt-3 col-sm-6 offset-3">
        <h3 className = "card-title">
            Destination: {trip.destination} 
        </h3>
        <h5 className = "card-body">
            From: {trip.startDate}<br/> To: {trip.endDate}
        </h5>
        </div>
        </div>
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
