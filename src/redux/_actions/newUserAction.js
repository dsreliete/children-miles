import { newUserService } from '../../_services';
import * as ActionTypes from '../ActionTypes';

export const createNewUserRole = (user) => dispatch => {
    dispatch(loading());
    
    newUserService.registerNewUserRole(user)
    .then(result => {
        if(result.success) {
            
        } else {
            
        }
    },
    error => console.log(error))
    .catch(err => {
        console.log(err)
    });
}

const loading = () => ({
    type: ActionTypes.LOADING
});

export const newUserAction = {
    createNewUserRole
};