import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { InitialSignupForm, InitialRescuePasswordForm, 
    InitialSigninForm, InitialUpdatePasswordForm, InitialNewUserForm } from '../_actions';
import authReducer from './authReducer';
import { Password }  from './passwordReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    password: Password,
    ...createForms({
        signupForm: InitialSignupForm,
        rescuePasswordForm: InitialRescuePasswordForm,
        signinForm: InitialSigninForm,
        updatePasswordForm: InitialUpdatePasswordForm,
        newUserForm: InitialNewUserForm
    })
});

export default rootReducer;