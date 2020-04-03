import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOADING,
    RESEND_EMAIL,
    RESEND_EMAIL_FAILURE,
    VERIFY_EMAIL_ERROR,
    SIGNIN_FAILURE,
    AUTH_USER,
    UNAUTH_USER,
    RESET_PASSWORD,
    RESET_PASSWORD_FAILURE,
    VERIFY_REQUEST_PASSWORD_SUCCESS,
    VERIFY_REQUEST_PASSWORD_FAILURE,
    SEND_EMAIL_UPDATE_PASSWORD_ERROR,
    SEND_EMAIL_UPDATE_PASSWORD
} from '../ActionTypes';

export default function(state = { }, action) {
    switch(action.type) {
        case SIGNUP_SUCCESS:
            return { ...state, signup: true, isLoading: false, error: false, payload: { signup: action.payload } };
        case SIGNUP_FAILURE:
            return { ...state, signup: false, isLoading: false, error: true, payload : { signupError: action.payload } };
        case LOADING:
            return { ...state, signup: false, isLoading: true, error: false };
        case RESEND_EMAIL:
            return { ...state, signup: false, isLoading: false, error: false, resend: true, payload: { resend: action.payload } };
        case RESEND_EMAIL_FAILURE:
            return { ...state, signup: false, isLoading: false, error: false, resend: false, payload: { resendError: action.payload } };
        case VERIFY_EMAIL_ERROR:
            return { ...state, verify: false, payload: { verifyEmail: action.payload } };
        case SIGNIN_FAILURE:
            return { ...state, signin: false, isLoading: false, payload: { signinError: action.payload } };
        case AUTH_USER:
            return { ...state, authenticated: true, payload: { auth: action.payload } };
        case UNAUTH_USER:
            return { ...state, authenticated: false, payload: { unauth: action.payload } };
        case RESET_PASSWORD:
            return { ...state, resetPassword: true, isLoading: false, payload: { reset: action.payload } };
        case RESET_PASSWORD_FAILURE:
            return { ...state, resetPassword: false, isLoading: false, payload: { resetError: action.payload } };
        case SEND_EMAIL_UPDATE_PASSWORD:
            return {...state, sendUpdatePassword: true, isLoading: false, payload: { sendUpdatePassword: action.payload }}
        case SEND_EMAIL_UPDATE_PASSWORD_ERROR:
            return {...state, sendUpdatePassword: false, isLoading: false, payload: { sendUpdatePasswordError: action.payload }}
        case VERIFY_REQUEST_PASSWORD_SUCCESS:
            return { ...state, verifyRequestPassword: true, isLoading: false, payload: { verifyRequestPassword: action.payload} };
        case VERIFY_REQUEST_PASSWORD_FAILURE:
            return { ...state, verifyRequestPassword: false, isLoading: false, payload: { verifyRequestPasswordError: action.payload } }; 
        default:
            return state;
    }
}

