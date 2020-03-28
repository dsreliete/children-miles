import { signupService } from '../../_services';
import * as ActionTypes from '../ActionTypes';
import { history } from '../../history';

export const signUp = (user) => dispatch => {
    dispatch(signupLoading());

    signupService.signupUser(user)
    .then(
        result => {
            if(result.success){
                //redirecionar para link com msg de email eniavo para verificacao e botao resend verification
                history.push(`/signup/verifyEmail/:${result.token}`)
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