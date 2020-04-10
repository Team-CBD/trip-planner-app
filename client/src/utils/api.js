import axios from 'axios';

export default {
    getTrips: () => axios.get("/trips"),
    addTrips: (trip) => axios.post("/trips",trip)

    
};

//sample for route call to frontend