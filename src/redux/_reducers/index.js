import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { InitialSignupForm, InitialRescuePasswordForm, InitialSigninForm } from '../_actions';
import authReducer from './authReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    ...createForms({
        signupForm: InitialSignupForm,
        rescuePasswordForm: InitialRescuePasswordForm,
        signinForm: InitialSigninForm
    })
});

export default rootReducer;