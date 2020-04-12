import axios from 'axios';


export default {
    getTrips: () => axios.get("api/trips"),
    addTrips: (trip) => axios.post("api/trips/add", trip),
    deleteTrips: (id) => axios.delete("api/trips/" + id),
    getUser: () => axios.get("api/users"),
    addUser: (user) => axios.post("api/users", user)
};
//sample for route call to frontend