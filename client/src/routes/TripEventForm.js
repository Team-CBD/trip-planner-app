import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "../utils/api";
import { TripList, TripListSingle } from "../components/TripList";
import DeleteBtn from "../components/DeleteBtn";

function TripEventsForm(props) {
  const [trip, setTrip ] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const {id} = useParams();
 
    useEffect(() => {
      //console.log(id);
      if(!trip) {
      API.findOneTrip(id)
          .then(res => {
              setStartDate(res.startDate);
              setEndDate(res.endDate);
              console.log("!!", startDate, endDate);
              console.log("&&", res);
              setTrip(res)
          })
        .then(() => {
          loadEvents(id);
        })
      }
    }, [trip, startDate, endDate, id]);

  
  const [daysEvents, setEvents] = useState({});
  const [formObject, setFormObject] = useState({});
  



  function loadEvents(id) {
    //console.log("id: " + id);
    API.getEvents(id)
      .then(res => {
        console.log("hello");
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
      API.addEvents(id, newEvent)
       .then(res => loadEvents(id))
    }
  };

  //***startDay and endDay are not landing on the correct day as input its one day behind */
  function generateTripHeader() {
      console.log("genHeader");

      if (startDate !== null && endDate !== null) { 
        let newStartDate = startDate.split("T")[0];
        let [startYr, startMon, startDay] = newStartDate.split("-");
        let formatStartDate= `${startMon} / ${startDay} / ${startYr}`;
        
        let newEndDate = endDate.split("T")[0];
        let [endYr, endMon, endDay] = newEndDate.split("-");
        let formatEndDate= `${endMon} / ${endDay} / ${endYr}`;


        return (
          <div className="col">
            <h3>{trip.destination}</h3><br/>
            <b>From: {formatStartDate}</b><br/><b>To: {formatEndDate}</b>
          </div>
        )
      };
  };

  //***eventDateDay are not landing on the correct day as input its one day behind */
  function generateEvents() {
    console.log("generateEvents");
    return daysEvents.map(Event => {
      let newDate = Event.date.split("T")[0];
      let [Yr, Mon, Day] = newDate.split("-");
      
      let formatDate= `${Mon}/${Day}/${Yr}`;
      
      // let eventDate = new Date(Event.date);
      // let eventDateMonth = eventDate.getMonth()+1;
      // let eventDateDay = eventDate.getDate();
      // let eventDateYear = eventDate.getFullYear();
      // let eventDateString = eventDateMonth+"/"+eventDateDay+"/"+eventDateYear;
      
      return (
        <TripListSingle key={Event._id}>
          {formatDate} - {Event.name}: {Event.description}
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
          {generateTripHeader()}
        
      
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
                  onChange={handleInputChange} 
              />
              <br/>
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
      </div>
    </div>
    
    );
  }

export default TripEventsForm;
