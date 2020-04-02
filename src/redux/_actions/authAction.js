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

export const requestChangePassword = (email) => dispatch => {
    dispatch(loading());

    authService.requestNewPassword(email)
    .then(result => {
        if(result.success) {
            
        } else {
            
        }
    },
    error => console.log(error)  
    )
    .catch(err => {
        console.log(err)
    });
}

export const changePassword = (email) => dispatch => {
    dispatch(loading());

    authService.updatePassword(email)
    .then(result => {
        if(result.success) {
            sendSuccessfullUpdatePasswordMessage()
        } else {
            
        }
    },
    error => console.log(error)  
    )
    .catch(err => {
        console.log(err)
    });
}

const sendSuccessfullUpdatePasswordMessage = () => {

}

export const verifyEmailTofetchUser = (token) => dispatch => {
    dispatch(loading());

    authService.verifyEmail(token)
    .then(result => {
        if(result.success) {
            dispatch(authenticate);
            localStorage.setItem('user', result.user);
            history.push("/home")
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
            localStorage.setItem('user', result.user);
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

export const signupAction = {
    signUp, resendEmailVerification, verifyEmailTofetchUser, login, logout, requestChangePassword, changePassword
};