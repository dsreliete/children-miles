import { signupService } from '../../_services';
import * as ActionTypes from '../ActionTypes';

export const signUp = (user) => dispatch => {
    dispatch(signupLoading());

    signupService.signupUser(user)
    .then(
        result => dispatch(signupSuccess(result)),
        error => dispatch(signupError(error))
    )
    .catch(err => {
        console.log(err)
    });
}

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

export const signupAction = {
    signUp
};