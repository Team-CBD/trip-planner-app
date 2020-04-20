import { GET_ERRORS, CLEAR_ERRORS} from '../actions/types';

const initialState = {
    msg: {},
    status: null,
    id: null
}

export default function(state = initialState, actions) {
    switch(actions.type) {
        case GET_ERRORS:
            return {
                msg: actions.payload.msg,
                status: actions.payload.status,
                id: actions.payload.id
            };
        case CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            };
        default:
            return state;
    }
}