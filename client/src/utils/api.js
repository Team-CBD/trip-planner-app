import Axios from 'axios';


export default {
    getTrips: () => Axios.get("api/trips/"),
    addTrip: (trip) => Axios.post("api/trips/", trip),
    deleteTrip: (id) => Axios.delete("api/trips/" + id),
    findOneTrip: (id) => Axios.get("api/trips/" + id),
    updateTrip: (id) => Axios.post("api/trips/update/" + id),
    
    getEvents: () => Axios.get("api/daysEvent"),
    addEvent: (newEvent) => Axios.post("api/daysEvent", newEvent),
    findOneEvent: (id) => Axios.get("api/daysEvent/" + id),
    updateEvent: (id) => Axios.post("api/daysEvent/update/" + id),
    deleteEvent: (id) => Axios.delete("api/daysEvent/" +id),

    getFriends: () => Axios.get("api/friends/"),
    addFriend: (friend) => Axios.post("api/friends/", friend),
    deleteFriend: (id) => Axios.delete("api/friends/" + id),
    findOneFriend: (id) => Axios.get("api/friends/" + id),
    updateFriend: (id) => Axios.post("api/friends/" + id)
};
//sample for route call to frontend