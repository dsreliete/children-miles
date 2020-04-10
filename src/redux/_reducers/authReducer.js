import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    AUTH_LOADING,
    RESEND_EMAIL,
    RESEND_EMAIL_FAILURE,
    VERIFY_EMAIL_ERROR,
    SIGNIN_FAILURE,
    AUTH_USER,
    UNAUTH_USER
} from '../ActionTypes';

export default function(state = { }, action) {
    switch(action.type) {
        case SIGNUP_SUCCESS:
            return { ...state, signup: true, isLoading: false, error: false, payload: { signup: action.payload } };
        case SIGNUP_FAILURE:
            return { ...state, signup: false, isLoading: false, error: true, payload : { signupError: action.payload } };
        case AUTH_LOADING:
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
        default:
            return state;
    }
}

