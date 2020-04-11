import axios from 'axios';

export default {
    getTrips: () => axios.get("api/trips"),
    addTrips: (trip) => axios.post("api/trips/add", trip),


    
};

//sample for route call to frontend