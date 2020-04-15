import axios from 'axios';


export default {
    getTrips: () => axios.get("api/trips/"),
    addTrip: (trip) => axios.post("api/trips/", trip),
    deleteTrip: (id) => axios.delete("api/trips/" + id),
    findOneTrip: (id) => axios.get("api/trips/" + id),
    updateTrip: (id) => axios.post("api/trips/" + id),
    
    getEvents: () => axios.get("api/daysEvent"),
    addEvent: (newEvent) => axios.post("api/daysEvent", newEvent),
    findOneEvent: (id) => axios.get("api/daysEvent/" + id),
    updateEvent: (id) => axios.post("api/daysEvent/" + id),
    deleteEvent: (id) => axios.delete("api/daysEvent/" +id),

    getFriends: () => axios.get("api/friends/"),
    addFriend: (friend) => axios.post("api/friends/", friend),
    deleteFriend: (id) => axios.delete("api/friends/" + id),
    findOneFriend: (id) => axios.get("api/friends/" + id),
    updateFriend: (id) => axios.post("api/friends/" + id)
};
//sample for route call to frontend