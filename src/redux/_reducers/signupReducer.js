import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_LOADING,
} from '../ActionTypes';

export default function(state = { }, action) {
    switch(action.type) {
        case SIGNUP_SUCCESS:
            return { ...state, registered: true, isLoading: false, error: false, payload: { result: action.payload.message} };
        case SIGNUP_FAILURE:
            return { ...state, registered: false, isLoading: false, error: true, payload: { result: action.payload.message}  };
        case SIGNUP_LOADING:
            return { ...state, registered: false, isLoading: true, error: false, payload: {}};
        default:
            return state;
    }
}

