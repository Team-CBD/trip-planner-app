import axios from 'axios';


export default {
    getTrips: () => axios.get("api/trips/"),
    addTrip: (trip) => axios.post("api/trips/", trip),
    deleteTrip: (id) => axios.delete("api/trips/" + id),
    findOneTrip: (id) => axios.get("api/trips/" + id),
    
    getUser: () => axios.get("api/users/login"),
    addUser: (user) => axios.post("api/users/register", user)
};
//sample for route call to frontend