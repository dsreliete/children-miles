import { authService } from '../../_services';
import * as ActionTypes from '../ActionTypes';
import { history } from '../../history';

export const signUp = (user) => dispatch => {
    dispatch(loading());

    authService.signupUser(user)
    .then(result => {
            if(result.success){
                dispatch(signupSuccess(result))
                history.push(`/resendEmail/:${user.email}`)
            } else {
                dispatch(signupError(result))
            }
        },
        error => dispatch(signupError(error))
    )
    .catch(err => {
        console.log(err)
    });
}

export const resendEmailVerification = (email) => dispatch => {
    dispatch(loading());

    authService.resendEmail(email)
    .then(result => {
        if(result.success) {
            dispatch(resendEmailSuccess(result))
        } else {
            dispatch(resendEmailFailure(result))
        }
    },
    error => dispatch(resendEmailFailure(error))  
    )
    .catch(err => {
        console.log(err)
    });
}

export const verifyEmailTofetchUserAndAuth = (token) => dispatch => {
    dispatch(loading());

    authService.verifyEmailAndAuth(token)
    .then(result => {
        if(result.success) {
            dispatch(authenticate);
            history.push("/signin")
        } else if(!result.success && result.user){
            dispatch(verifyEmailErrorAnotherTry(result))
        } else {
            dispatch(verifyEmailError(result))
        }
    },
    error => {
        dispatch(verifyEmailError(error))
    })
    .catch(err => {
        console.log(err)
    });
}

export const login = (username, password) => dispatch => {
    dispatch(loading());
    
    authService.login(username, password)
    .then(result => {
        if(result.success) {
            localStorage.setItem('userId', result.user._id);
            localStorage.setItem('family', result.user.family);
            localStorage.setItem('token', result.token);
            history.push("/home")
            dispatch(authenticate)
        } else {
            dispatch(signinError(result))
        }
        
    },
    error => dispatch(signinError(error))  
    )
    .catch(err => {
        console.log(err)
    });
}

export const logout = () => dispatch => {
    dispatch(loading());

    authService.logout()
    .then(result => {
        dispatch(unauthenticate)
        localStorage.removeItem('user');
        history.push("/signin")
    },
    error => {
        dispatch(unauthenticate) 
        localStorage.removeItem('user');
        history.push("/signin")
    })
    .catch(err => {
        console.log(err)
    });
}

export const cancelComponents = () => dispatch => {
    dispatch(cancel())
}

const cancel = () => ({
    type: ActionTypes.AUTH_LOADING_CANCEL
})

const unauthenticate = (result) => ({
    type: ActionTypes.UNAUTH_USER,
    payload: result
});

const authenticate = (result) => ({
    type: ActionTypes.AUTH_USER,
    payload: result
});

const loading = () => ({
    type: ActionTypes.AUTH_LOADING
});

const signinError = (error) => ({
    type: ActionTypes.SIGNIN_FAILURE,
    payload: error
})

const signupSuccess = (response) => ({
    type: ActionTypes.SIGNUP_SUCCESS,
    payload: response
})

const signupError = (error) => ({
    type: ActionTypes.SIGNUP_FAILURE,
    payload: error
})

const resendEmailFailure = (error) => ({
    type: ActionTypes.RESEND_EMAIL_FAILURE,
    payload: error
})

const resendEmailSuccess = (result) => ({
    type: ActionTypes.RESEND_EMAIL,
    payload: result
})

const verifyEmailError = (error) => ({  
    type: ActionTypes.VERIFY_EMAIL_ERROR,
    payload: error
})

const verifyEmailErrorAnotherTry = (error) => ({
    type: ActionTypes.VERIFY_EMAIL_ERROR_ASK_AGAIN,
    payload: error
})

export const signupAction = {
    signUp, 
    resendEmailVerification, 
    verifyEmailTofetchUserAndAuth, 
    login, 
    logout,
    cancelComponents
};