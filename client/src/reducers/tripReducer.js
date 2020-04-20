import {
    GET_TRIP,
    ADD_TRIP,
    UPDATE_TRIP,
    DELETE_TRIP,
    TRIP_LOADING
} from '../actions/types';

const initialState = {
    trips: [

    ]
}

export default function(state= initialState, action) {
    switch(action.type) {
        case GET_TRIP:
            return {
                ...state
            }
        default:
            return state;
    }
}