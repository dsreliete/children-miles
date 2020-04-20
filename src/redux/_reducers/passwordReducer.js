import {
    RESET_PASSWORD_LOADING,
    RESET_PASSWORD_LOADING_CANCEL,
    RESET_PASSWORD,
    RESET_PASSWORD_FAILURE,
    VERIFY_REQUEST_PASSWORD,
    VERIFY_REQUEST_PASSWORD_FAILURE,
    SEND_EMAIL_UPDATE_PASSWORD_ERROR,
    SEND_EMAIL_UPDATE_PASSWORD
} from '../ActionTypes';

export const Password = (state = { }, action) => {
    switch(action.type) {
        case RESET_PASSWORD_LOADING:
            return { ...state, isLoading: true };
        case RESET_PASSWORD_LOADING_CANCEL:
            return { ...state, isLoading: false, error: false, resetPassword: false, sendUpdatePassword: false, verifyRequestPassword: false };
        case RESET_PASSWORD:
            return { ...state, resetPassword: true, isLoading: false, payload: { reset: action.payload } };
        case RESET_PASSWORD_FAILURE:
            return { ...state, resetPassword: false, isLoading: false, payload: { resetError: action.payload } };
        case SEND_EMAIL_UPDATE_PASSWORD:
            return {...state, sendUpdatePassword: true, isLoading: false, payload: { sendUpdatePassword: action.payload }}
        case SEND_EMAIL_UPDATE_PASSWORD_ERROR:
            return {...state, sendUpdatePassword: false, isLoading: false, payload: { sendUpdateError: action.payload }}
        case VERIFY_REQUEST_PASSWORD:
            return { ...state, verifyRequestPassword: true, isLoading: false, payload: { verifyRequestPassword: action.payload} };
        case VERIFY_REQUEST_PASSWORD_FAILURE:
            return { ...state, verifyRequestPassword: false, isLoading: false, payload: { verifyRequestError: action.payload } }; 
        default:
            return state;
    }
}

