import {
    GET_TRIP,
    ADD_TRIP,
    UPDATE_TRIP,
    DELETE_TRIP,
    TRIP_LOADING
} from './types';

export const getTripsAction = () => {
    return {
        type: GET_TRIP
    };
};