import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { InitialSignupForm, InitialRescuePasswordForm, 
    InitialSigninForm, InitialUpdatePasswordForm, InitialNewUserForm } from '../_actions';
import authReducer from './authReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    ...createForms({
        signupForm: InitialSignupForm,
        rescuePasswordForm: InitialRescuePasswordForm,
        signinForm: InitialSigninForm,
        updatePasswordForm: InitialUpdatePasswordForm,
        newUserForm: InitialNewUserForm
    })
});

export default rootReducer;