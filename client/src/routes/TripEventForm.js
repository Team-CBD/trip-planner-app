import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "../utils/api";
import { TripList, TripListSingle } from "../components/TripList";
import DeleteBtn from "../components/DeleteBtn";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
//import useGooglePlaces from "../components/useGooglePlaces";
// import Gmap from '../components/Gmap';

function TripEventsForm(props) {
  const [trip, setTrip] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    //console.log(id);
    if (!trip) {
      API.findOneTrip(id)
          .then(res => {
              setStartDate(res.startDate);
              setEndDate(res.endDate);
              // console.log("!!", startDate, endDate);
              // console.log("&&", res);
              setTrip(res)
          })
        .then(() => {
          loadEvents(id);
        })
      }
      // eslint-disable-next-line
    }, [trip]);

  const [daysEvents, setEvents] = useState({});
  const [formObject, setFormObject] = useState({});
  const [name, setName] = useState({});




  function loadEvents(id) {
    //console.log("id: " + id);
    API.getEvents(id)
      .then(res => {
        //console.log("hello");
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
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (name && formObject.description && formObject.date) {
      const newEvent = {
        name: name,
        description: formObject.description,
        date: formObject.date
      }
      API.addEvents(id, newEvent)
       .then(res => {
          document.location = `/trip/${id}`;
          loadEvents(id)})
    }
  };
// eslint-disable-next-line
    const [address, setAddress] = useState("");
    // eslint-disable-next-line
    const [placeId, setPlaceId] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });

    //useGooglePlaces(placeId);

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
        console.log("===", results);
        console.log("===", coordinates);

        console.log("@@@", results[0].place_id);
        setPlaceId(results[0].place_id);

        setName(results[0].formatted_address);
    };

  



  //***startDay and endDay are not  landing on the correct day as input its one day behind */
  function generateTripHeader() {
      //console.log("genHeader");

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
            <img className="evImg neu mb-4" alt="trip-pic" width="100%" height="auto" src={"https://source.unsplash.com/random/?city,"+ trip.destination}></img>
            <h5>{formatStartDate}  ꟷ  {formatEndDate}</h5>
          </div>
        )
      };
  };

  //***eventDateDay are not landing on the correct day as input its one day behind */
  function generateEvents() {
    //console.log("generateEvents");
    return daysEvents.map(Event => {
      let newDate = Event.date.split("T")[0];
      let [Yr, Mon, Day] = newDate.split("-");

      let formatDate = `${Mon}/${Day}/${Yr}`;

      // let eventDate = new Date(Event.date);
      // let eventDateMonth = eventDate.getMonth()+1;
      // let eventDateDay = eventDate.getDate();
      // let eventDateYear = eventDate.getFullYear();
      // let eventDateString = eventDateMonth+"/"+eventDateDay+"/"+eventDateYear;

      return (
        <TripListSingle key={Event._id}>
          <h4>{Event.name}</h4>
          <img className="rdImg neu mb-4" alt="trip-pic" width="100%" height="auto" src={"https://source.unsplash.com/random/?city,"+ Event.name}></img>
          {formatDate} : {Event.description}
          <DeleteBtn onClick={() => deleteEvent(Event._id)} />
        </TripListSingle>
      )
    }

    )
  }

  //console.log(trip);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card shadow mt-5 bg-light pt-3">
          {generateTripHeader()}


          <div className="eventForm col-sm-12">

          <div className="col-12 col-sm-12">
            <p>
              <button className="btn neu btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                New Event
              </button>
            </p>
            <div className="collapse pb-4" id="collapseExample">
              <div className="card neu card-body">
            <form onSubmit={handleFormSubmit}>
              <div>
                <PlacesAutocomplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                      <input {...getInputProps()}
                        className="neuflip border p-2"
                        type="text"
                        id="name"
                        placeholder="Place"
                        name="name"

                      />
                      <div>
                        {loading ? <div>...loading</div> : null}

                        {suggestions.map((suggestion) => {
                          const style = {
                            backgroundColor: suggestion.active ? "#368cbf" : "#fff"
                          };

                          return (
                            <div {...getSuggestionItemProps(suggestion, { style })}>
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </PlacesAutocomplete>
              </div>
              {/* <input className="neuflip m-2 p-2" 
                  type="text" id="name" placeholder="Name of Event"
                  name="name"
                  onChange={handleInputChange}
              /> */}
              <br />
              <input className="neuflip m-2 p-2 border textarea"
                type="textarea" rows="4" cols="50" id="description" placeholder="Description of Event"
                name="description"
                onChange={handleInputChange}
              />
              <br />
              <input type="date"
                className="neuflip m-2 p-2"
                placeholder="Date of Event"
                name="date"
                onChange={handleInputChange}
              />
              <br />
              <button id="submit" className="btn neu">Add Event</button>
            </form>
          </div>
            </div>
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
    </div>

  );
}

export default TripEventsForm;
