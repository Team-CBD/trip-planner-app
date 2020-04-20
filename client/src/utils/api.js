import axios from 'axios';


export default {
    getTrips: () => axios.get("http://localhost:8080/api/trip/"),
    addTrip: (trip) => axios.post("http://localhost:8080/api/trip/", trip),
    deleteTrip: (id) => axios.delete("http://localhost:8080/api/trip/" + id).then(result => result.data),
    findOneTrip: (id) => axios.get("http://localhost:8080/api/trip/" + id).then(result => result.data),
    updateTrip: (id) => axios.post("http://localhost:8080/api/trip/" + id).then(result => result.data),
    
    getEvents: (id) => axios.get(`http://localhost:8080/api/trip/${id}/daysEvent/`),
    addEvents: (id, newEvent) => {
        console.log("adding events");
        axios.post(`http://localhost:8080/api/trip/${id}/daysEvent/`, newEvent);
        console.log(id);
    },
    findOneEvent: (id, eventId) => axios.get(`http://localhost:8080/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),
    updateEvent: (id, eventId) => axios.patch(`http://localhost:8080/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),
    deleteEvent: (id, eventId) => axios.delete(`http://localhost:8080/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),

    getFriends: () => axios.get("http://localhost:8080/api/friends/"),
    addFriend: (friend) => axios.post("http://localhost:8080/api/friends/", friend),
    deleteFriend: (id) => axios.delete("http://localhost:8080/api/friends/" + id),
    findOneFriend: (id) => axios.get("http://localhost:8080/api/friends/" + id),
    updateFriend: (id) => axios.post("http://localhost:8080/api/friends/" + id),

    addUser: (data) => axios.post("http://localhost:8080/api/users/register", data),
    getUser: (data) => axios.post("http://localhost:8080/api/auth/login", data)
};
//sample for route call to frontend