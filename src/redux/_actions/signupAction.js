import { signupService } from '../../_services';
import * as ActionTypes from '../ActionTypes';
import { history } from '../../history';

export const signUp = (user) => dispatch => {
    dispatch(signupLoading());

    signupService.signupUser(user)
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
    dispatch(signupLoading());

    signupService.resendEmail(email)
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

export const verifyEmailTofetchUser = (token) => dispatch => {
    dispatch(signupLoading());

    signupService.verifyEmail(token)
    .then(result => {
        if(result.success) {
            dispatch(signupAuth);
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

const signupAuth = (result) => ({
    type: ActionTypes.AUTH_USER,
    payload: result
});

const signupLoading = () => ({
    type: ActionTypes.SIGNUP_LOADING
});

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
    signUp, resendEmailVerification, verifyEmailTofetchUser
};