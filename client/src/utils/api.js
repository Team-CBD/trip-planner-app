import axios from 'axios';


export default {
    getTrips: () => axios.get("api/trip/"),
    addTrip: (trip) => axios.post("api/trip/", trip),
    deleteTrip: (id) => axios.delete("api/trip/" + id),
    findOneTrip: (id) => axios.get("api/trip/" + id),
    updateTrip: (id) => axios.post("api/trip/" + id),
    
    getEvents: () => axios.get("api/trip/daysEvent"),
    addEvent: (newEvent) => axios.post("api/trip/daysEvent", newEvent),
    findOneEvent: (id) => axios.get("api/trip/daysEvent/" + id),
    updateEvent: (id) => axios.patch("api/trip/daysEvent/update/" + id),
    deleteEvent: (id) => axios.delete("api/trip/daysEvent/" +id),

    getFriends: () => axios.get("api/friends/"),
    addFriend: (friend) => axios.post("api/friends/", friend),
    deleteFriend: (id) => axios.delete("api/friends/" + id),
    findOneFriend: (id) => axios.get("api/friends/" + id),
    updateFriend: (id) => axios.post("api/friends/" + id)
};
//sample for route call to frontend