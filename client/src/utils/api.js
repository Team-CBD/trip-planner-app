import axios from 'axios';


export default {
    getTrips: () => axios.get("https://travelynx.herokuapp.com/api/trip/"),
    addTrip: (trip) => axios.post("https://travelynx.herokuapp.com/api/trip/", trip),
    deleteTrip: (id) => axios.delete("https://travelynx.herokuapp.com/api/trip/" + id).then(result => result.data),
    findOneTrip: (id) => axios.get("https://travelynx.herokuapp.com/api/trip/" + id).then(result => result.data),
    updateTrip: (id) => axios.post("https://travelynx.herokuapp.com/api/trip/" + id).then(result => result.data),
    
    getEvents: (id) => axios.get(`https://travelynx.herokuapp.com/api/trip/${id}/daysEvent/`),
    addEvent: (id, newEvent) => axios.post((`https://travelynx.herokuapp.com/api/trip/${id}/daysEvent/`, newEvent)),
    findOneEvent: (id, eventId) => axios.get((`https://travelynx.herokuapp.com/api/trip/${id}/daysEvent/${eventId}`)).then(result => result.data),
    updateEvent: (id, eventId) => axios.patch((`https://travelynx.herokuapp.com/api/trip/${id}/daysEvent/${eventId}`)).then(result => result.data),
    deleteEvent: (id, eventId) => axios.delete(`https://travelynx.herokuapp.com/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),

    getFriends: () => axios.get("https://travelynx.herokuapp.com/api/friends/"),
    addFriend: (friend) => axios.post("https://travelynx.herokuapp.com/api/friends/", friend),
    deleteFriend: (id) => axios.delete("https://travelynx.herokuapp.com/api/friends/" + id),
    findOneFriend: (id) => axios.get("https://travelynx.herokuapp.com/api/friends/" + id),
    updateFriend: (id) => axios.post("https://travelynx.herokuapp.com/api/friends/" + id),

    addUser: (data) => axios.post("https://travelynx.herokuapp.com/api/users/register", data),
    getUser: (data) => axios.post("https://travelynx.herokuapp.com/api/auth/login", data)
};
//sample for route call to frontend