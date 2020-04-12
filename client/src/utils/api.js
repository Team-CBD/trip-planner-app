import axios from 'axios';


export default {
    getTrips: () => axios.get("api/trips"),
    addTrips: (trip) => axios.post("api/trips/add", trip),
    getUser: () => axios.get("api/users"),
    addUser: (user) => axios.post("api/users", user),
    deleteTrips: (id) => axios.delete("api/trips/" + id)
};
//sample for route call to frontend