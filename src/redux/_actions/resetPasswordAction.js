import { resetPasswordService } from '../../_services';
import * as ActionTypes from '../ActionTypes';
import { history } from '../../history';

export const requestPassword = (email) => dispatch => {
    dispatch(loading());

    resetPasswordService.requestNewPassword(email)
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

    resetPasswordService.verifyEmailAndUpdatePassword(token)
    .then(result => {
        if(result.success) {
            
            dispatch(verifyRequestPasswordSuccess(result))
        } else {
            dispatch(verifyRequestPasswordError(result))
        }
    },
    error => dispatch(verifyRequestPasswordError(error)))
    .catch(err => {
        console.log(err)
    });
}

export const changePassword = (userId, password) => dispatch => {
    dispatch(loading());
    
    resetPasswordService.updatePassword(userId, password)
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

export const cancelComponents = () => dispatch => {
    dispatch(cancel())
}

const cancel = () => ({
    type: ActionTypes.AUTH_LOADING_CANCEL
})

const loading = () => ({
    type: ActionTypes.RESET_PASSWORD_LOADING
});

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
    requestPassword, 
    verifyEmailTofetchUserAndUpdatePassword, 
    changePassword,
    cancelComponents
};