import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { InitialSignupForm, InitialRescuePasswordForm, 
    InitialSigninForm, InitialUpdatePasswordForm } from '../_actions';
import authReducer from './authReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    ...createForms({
        signupForm: InitialSignupForm,
        rescuePasswordForm: InitialRescuePasswordForm,
        signinForm: InitialSigninForm,
        updatePasswordForm: InitialUpdatePasswordForm
    })
});

export default rootReducer;