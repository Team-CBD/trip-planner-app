import axios from 'axios';

export default {
    getTrips: () => axios.get("/trips"),
    addTrips: (trip) => axios.post("/trips/add", trip),

    getUser: () => axios.get("api/users"),
    addUser: (user) => axios.post("api/users")
};

//sample for route call to frontend