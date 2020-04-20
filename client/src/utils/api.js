import axios from 'axios';


export default {
    getTrips: () => axios.get("https://travel-lynx.herokuapp.com/api/trip/"),
    addTrip: (trip) => axios.post("https://travel-lynx.herokuapp.com/api/trip/", trip),
    deleteTrip: (id) => axios.delete("https://travel-lynx.herokuapp.com/api/trip/" + id).then(result => result.data),
    findOneTrip: (id) => axios.get("https://travel-lynx.herokuapp.com/api/trip/" + id).then(result => result.data),
    updateTrip: (id) => axios.post("https://travel-lynx.herokuapp.com/api/trip/" + id).then(result => result.data),
    
    getEvents: (id) => axios.get(`https://travel-lynx.herokuapp.com/api/trip/${id}/daysEvent/`),
    addEvents: (id, newEvent) => axios.post(`https://travel-lynx.herokuapp.com/api/trip/${id}/daysEvent/`, newEvent),
    findOneEvent: (id, eventId) => axios.get(`https://travel-lynx.herokuapp.com/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),
    updateEvent: (id, eventId) => axios.patch(`https://travel-lynx.herokuapp.com/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),
    deleteEvent: (id, eventId) => axios.delete(`https://travel-lynx.herokuapp.com/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),

    getFriends: () => axios.get("https://travel-lynx.herokuapp.com/api/friends/"),
    addFriend: (friend) => axios.post("https://travel-lynx.herokuapp.com/api/friends/", friend),
    deleteFriend: (id) => axios.delete("https://travel-lynx.herokuapp.com/api/friends/" + id),
    findOneFriend: (id) => axios.get("https://travel-lynx.herokuapp.com/api/friends/" + id),
    updateFriend: (id) => axios.post("https://travel-lynx.herokuapp.com/api/friends/" + id),

    addUser: (data) => axios.post("https://travel-lynx.herokuapp.com/api/users/register", data),
    getUser: (data) => axios.post("https://travel-lynx.herokuapp.com/api/auth/login", data)
};
//sample for route call to frontend