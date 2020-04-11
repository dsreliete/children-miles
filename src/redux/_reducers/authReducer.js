import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    AUTH_LOADING,
    AUTH_LOADING_CANCEL,
    RESEND_EMAIL,
    RESEND_EMAIL_FAILURE,
    VERIFY_EMAIL_ERROR,
    VERIFY_EMAIL_ERROR_ASK_AGAIN,
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
            return { ...state, signin: false, signup: false, isLoading: true, error: false, verify: false, resend: false};
        case AUTH_LOADING_CANCEL:
            return { ...state, signin: false, signup: false, isLoading: false, error: false , verify: false,resend: false};
        case RESEND_EMAIL:
            return { ...state, resend: true, isLoading: false, error: false, payload: { resend: action.payload } };
        case RESEND_EMAIL_FAILURE:
            return { ...state, resend: false, isLoading: false, error: true, payload: { resendError: action.payload } };
        case VERIFY_EMAIL_ERROR_ASK_AGAIN:
            return { ...state, verify: false, resend: true, error: true, payload: { verifyError: action.payload } };
        case VERIFY_EMAIL_ERROR:
            return { ...state, verify: false, resend: false, error: true, payload: { verifyError: action.payload } };
        case SIGNIN_FAILURE:
            return { ...state, signin: false, error: true, isLoading: false, payload: { signinError: action.payload } };
        case AUTH_USER:
            return { ...state, authenticated: true, payload: { auth: action.payload } };
        case UNAUTH_USER:
            return { ...state, authenticated: false, payload: { unauth: action.payload } }; 
        default:
            return state;
    }
}

