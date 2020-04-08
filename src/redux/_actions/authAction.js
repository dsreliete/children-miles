import { authService } from '../../_services';
import * as ActionTypes from '../ActionTypes';
import { history } from '../../history';

export const signUp = (user) => dispatch => {
    dispatch(loading());

    authService.signupUser(user)
    .then(result => {
            if(result.success){
                dispatch(signupSuccess(result))
                //redirecionar para link com msg de sucesso envio de email para verificacao e botao resend verification email
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
            dispatch(authenticate)
            localStorage.setItem('userId', result.user._id);
            localStorage.setItem('family', result.user.family);
            localStorage.setItem('token', result.token);
            history.push("/home")
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

export const requestPassword = (email) => dispatch => {
    dispatch(loading());

    authService.requestNewPassword(email)
    .then(result => {
        if(result.success) {
            dispatch(sendRequestUpdatePasswordSuccess(result))
        } else {
            dispatch(sendRequestUpdatePasswordError(result))
        }
    },
    error => sendRequestUpdatePasswordError(error))
    .catch(err => {
        console.log(err)
    });
}

export const verifyEmailTofetchUserAndUpdatePassword = (token) => dispatch => {
    dispatch(loading());

    authService.verifyEmailAndUpdatePassword(token)
    .then(result => {
        if(result.success) {
            
            dispatch(verifyRequestPasswordSuccess(result))
        } else {
            dispatch(verifyRequestPasswordError(result))
            alert(JSON.stringify(result))
        }
    },
    error => dispatch(verifyRequestPasswordError(error)))
    .catch(err => {
        console.log(err)
    });
}

export const changePassword = (userId, password) => dispatch => {
    dispatch(loading());
    
    authService.updatePassword(userId, password)
    .then(result => {
        if(result.success) {
            dispatch(resetPassword(result))
            history.push("/signin")
        } else {
            dispatch(resetPasswordError(result))
        }
    },
    error => resetPasswordError(error))
    .catch(err => {
        console.log(err)
    });
}

const unauthenticate = (result) => ({
    type: ActionTypes.UNAUTH_USER,
    payload: result
});

const authenticate = (result) => ({
    type: ActionTypes.AUTH_USER,
    payload: result
});

const loading = () => ({
    type: ActionTypes.LOADING
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

const sendRequestUpdatePasswordError = (error) => ({
    type: ActionTypes.SEND_EMAIL_UPDATE_PASSWORD_ERROR,
    payload: error
})

const sendRequestUpdatePasswordSuccess = (result) => ({
    type: ActionTypes.SEND_EMAIL_UPDATE_PASSWORD,
    payload: result
})

const verifyRequestPasswordError = (error) => ({
    type: ActionTypes.VERIFY_REQUEST_PASSWORD_FAILURE,
    payload: error
})

const verifyRequestPasswordSuccess = (result) => ({
    type: ActionTypes.VERIFY_REQUEST_PASSWORD,
    payload: result
})

const resetPassword = result => ({
    type: ActionTypes.RESET_PASSWORD,
    payload: result
})

const resetPasswordError = error => ({
    type: ActionTypes.RESET_PASSWORD_FAILURE,
    payload: error
})

export const signupAction = {
    signUp, 
    resendEmailVerification, 
    verifyEmailTofetchUserAndAuth, 
    login, 
    logout, 
    requestPassword, 
    verifyEmailTofetchUserAndUpdatePassword, 
    changePassword
};