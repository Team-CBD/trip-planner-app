import axios from 'axios';
//For production
//const server = "https://travel-lynx.herokuapp.com";
//For dev
const server = "http://localhost:8080";

// const googleApiKey = process.env.GOOGLE_API_KEY;

export default {
    getTrips: () => axios.get(`${server}/api/trip/`),
    addTrip: (trip) => axios.post(`${server}/api/trip/`, trip),
    deleteTrip: (id) => axios.delete(`${server}/api/trip/${id}`).then(result => result.data),
    findOneTrip: (id) => axios.get(`${server}/api/trip/${id}`).then(result => result.data),
    updateTrip: (id) => axios.post(`${server}/api/trip/${id}`).then(result => result.data),
    
    getEvents: (id) => axios.get(`${server}/api/trip/${id}/daysEvent/`),
    addEvents: (id, newEvent) => axios.post(`${server}/api/trip/${id}/daysEvent/`, newEvent),
    findOneEvent: (id, eventId) => axios.get(`${server}/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),
    updateEvent: (id, eventId) => axios.patch(`${server}/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),
    deleteEvent: (id, eventId) => axios.delete(`${server}/api/trip/${id}/daysEvent/${eventId}`).then(result => result.data),

    getFriends: () => axios.get(`${server}/api/friends/`),
    addFriend: (friend) => axios.post(`${server}/api/friends/`, friend),
    deleteFriend: (id) => axios.delete(`${server}/api/friends/${id}`),
    findOneFriend: (id) => axios.get(`${server}/api/friends/${id}`),
    updateFriend: (id) => axios.post(`${server}/api/friends/${id}`)

    // getPhoto: (googleQuery) => {
    //     return axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${googleQuery}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${googleApiKey}`);
        
    // }

    // register: (data) => axios.post("/api/user/", data),
    // login: (data) => axios.post("/api/auth/login", data)
};
//sample for route call to frontend
