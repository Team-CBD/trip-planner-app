import axios from 'axios';


export default {
    getTrips: () => axios.get("api/trips"),
    addTrips: (trip) => axios.post("api/trips/add", trip),
    getUser: () => axios.get("api/users/login"),
    addUser: (user) => axios.post("api/users/register", user)
};
//sample for route call to frontend