import axios from 'axios';


export default {
    getTrips: () => axios.get("/api/trip/"),
    addTrip: (trip) => axios.post("/api/trip/", trip),
    deleteTrip: (id) => axios.delete("/api/trip/" + id).then(result => result.data),
    findOneTrip: (id) => axios.get("/api/trip/" + id).then(result => result.data),
    updateTrip: (id) => axios.post("/api/trip/" + id).then(result => result.data),
    
    getEvents: (id) => axios.get(`/api/trip/${id}/daysEvent/`),
    addEvents: (id, newEvent) => axios.post(`/api/trip/${id}/daysEvent/`, newEvent),
    findOneEvent: (id, eventId) => axios.get(`/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),
    updateEvent: (id, eventId) => axios.patch(`/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),
    deleteEvent: (id, eventId) => axios.delete(`/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),

    getFriends: () => axios.get("/api/friends/"),
    addFriend: (friend) => axios.post("/api/friends/", friend),
    deleteFriend: (id) => axios.delete("/api/friends/" + id),
    findOneFriend: (id) => axios.get("/api/friends/" + id),
    updateFriend: (id) => axios.post("/api/friends/" + id),

    addUser: (data) => axios.post("/api/users/register", data),
    getUser: (data) => axios.post("/api/auth/login", data)
};
//sample for route call to frontend