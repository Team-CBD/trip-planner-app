import axios from 'axios';

export default {
    getTrips: () => axios.get("/trips"),
    addTrips: () => axios.add("/trips")

    
};

//sample for route call to frontend