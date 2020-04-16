import React, { Component, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import API from "../utils/api";
//import TripEventForm from './TripEventForm';

// class TripEvents extends Component {
//     constructor(props) {
//         super(props);

//         this.onChangeTrip = this.this.onChangeTrip.bind(this);
//         this.onChangeName = this.this.onChangeName.bind(this);
//         this.onChangeDescription = this.this.onChangeDescription.bind(this);
//         this.onChangeDate = this.this.onChangeDate.bind(this);
//         this.onSubmit = this.this.onSubmit.bind(this);

//         this.state = {
//             trip: '',
//             name: '',
//             description: '',
//             date: ''
//         }

//         const setTrip = useState({})

//         const {id} = useParams()
//         useEffect(() => {
//             API.getTrip(id)
//             .then(res => setTrip(res.data))
//             .catch(err => console.log(err));
//         }, []);
        
//     }


//     componentDidMount() {
//         this.setState({
//             trip: id
//         })
//     }

//     onChangeTrip(e) {
//         this.setState ({
//             trip: e.target.value
//         })
//     }

//     onChangeName(e) {
//         this.setState ({
//             name: e.target.value
//         })
//     }

//     onChangeDescription(e) {
//         this.setState ({
//             description: e.target.value
//         })
//     }

//     onChangeDate(date) {
//         this.setState ({
//             date: date
//         })
//     }

//     onSubmit(e) {
//         e.preventDefault();

//         const tripEvent = {
//             name: this.state.name,
//             description: this.state.description,
//             date: this.state.date,
//         }
//         console.log(tripEvent);

//         window.location = '/trip/' + id
//     }

    render() {
        return (
            <div className='container'>
               
                {/* <div className = "eventList">
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

                <div className = "eventForm">
                    <h4 className="text-dark pt-3">Create Events</h4>
                    <form onSubmit={this.onSubmit}>
                    <input className="neuflip m-2 p-2" 
                        type="text" id="eventName" placeholder="Name of Event"
                        name="name"
                        onChange={this.onChangeName}
                        value={this.name}
                        />
                        <br/>
                        <input className="neuflip m-2 p-2" 
                        type="text" id="description" placeholder="Description of Event"
                        name="description"
                        onChange={this.onChangeDescription}
                        value={this.description}
                        />
                        <br/>
                        <input type="date"
                        className="neuflip m-2 p-2"
                        placeholder="Date of Event"
                        name="date"
                        onChange={this.onChangeDate}
                        value={this.date} /><br/>
                        <button id="submit" className="btn neu">Add Event</button>
                    </form>
                </div>
            </div>
      } */}
      </div>
)}