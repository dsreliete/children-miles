// import { signupService } from '../../_services';
import * as ActionTypes from '../ActionTypes';
import {baseUrl} from './baseUrl';

export const signUp = (user) => dispatch => {
    dispatch(signupLoading());

    fetch(`${baseUrl}/signup`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
            "Origin": baseUrl
        }
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else if (response.status !== 200 ) {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }   
    },
    error => { throw error; })
    .then(response => response.json())
    .then(response => dispatch(signupSuccess(response)))
    .catch(error => {
        const result = { message: "It is not possible to create a new family user. Try later!" };
        dispatch(signupError(result))
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