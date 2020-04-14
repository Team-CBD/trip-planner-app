import axios from 'axios';


export default {
    getTrips: () => axios.get("api/trips"),
    addTrip: (trip) => axios.post("api/trips/add", trip),
    deleteTrip: (id) => axios.delete("api/trips/" + id),

    getUser: () => axios.get("api/users/login"),
    addUser: (user) => axios.post("api/users/register", user)
};
//sample for route call to frontend