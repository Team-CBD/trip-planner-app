import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "../utils/api";
import { TripList, TripListSingle } from "../components/TripList";
import DeleteBtn from "../components/DeleteBtn";

function TripEventsForm(props) {
  const [trip, setTrip ] = useState(false);
  const {id} = useParams();
 
    useEffect(() => {
      //console.log(id);
      if(!trip) {
        API.findOneTrip(id)
          .then(res => {
              //console.log(res);
              setTrip(res)
          })
        .then(() => {
          loadEvents(id)
        })
      }
    }, [trip, id]);

  
  const [daysEvents, setEvents] = useState({});
  const [formObject, setFormObject] = useState({});



  function loadEvents(id) {
    //console.log("id: " + id);
    API.getEvents(id)
      .then(res => {
        
        setEvents(res.data.daysEvent);
        //console.log("load : " + res);
        //console.log(res.data.daysEvent);
    })
  };

  function deleteEvent(eventId) {
    API.deleteEvent(id, eventId)
      .then(res => loadEvents(id))
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.description && formObject.date) {
      const newEvent = {
        name: formObject.name,
        description: formObject.description,
        date: formObject.date
      }
      //const id = (id);
      // console.log(id.toString());
      // let idString = id.toString();
      //console.log(newEvent);
      API.addEvents(id, newEvent)
       .then(res => loadEvents(id))
    }
  };

  function generateEvents() {
    console.log("generateEvents");
    return daysEvents.map(Event => {
      let eventDate = new Date(Event.date);
      let eventDateMonth = eventDate.getMonth()+1;
      let eventDateDay = eventDate.getDate();
      let eventDateYear = eventDate.getFullYear();
      let eventDateString = eventDateMonth+"/"+eventDateDay+"/"+eventDateYear;
      
      return (
        <TripListSingle key={Event._id}>
          {eventDateString} - {Event.name}: {Event.description}
          <DeleteBtn onClick={() => deleteEvent(Event._id)} />
        </TripListSingle>
      ) 
    }
    
    )
  }
  
//console.log(trip);
  return (
    <div className = "container">
      <div className="row justify-content-center">
      <div className = "card shadow mt-5 pt-3">
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
                type="text" id="name" placeholder="Name of Event"
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
                <button id="submit" className="btn neu">Add Event</button>
            </form>
        </div>

        <div>
            {daysEvents.length ? (
                <TripList>
                  {generateEvents()}
                    {/* {daysEvents.map(Event => {
                        <TripListSingle key={Event._id}>
                            {Event.date} - {Event.name}: {Event.description}
                            <DeleteBtn onClick={() => deleteEvent(Event._id)} />
                        </TripListSingle>
                    })} */}
                </TripList>
            ) : (
                <h3>No Events Added</h3>
            )}
        </div>
    </div>
    
    );
  }

export default TripEventsForm;
