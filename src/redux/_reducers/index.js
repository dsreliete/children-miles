import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { InitialSignupForm, InitialRescuePasswordForm, 
    InitialSigninForm, InitialUpdatePasswordForm, InitialNewUserForm } from '../_actions';
import authReducer from './authReducer';
import resetPasswordReducer from './resetPasswordReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    resetPassword: resetPasswordReducer,
    ...createForms({
        signupForm: InitialSignupForm,
        rescuePasswordForm: InitialRescuePasswordForm,
        signinForm: InitialSigninForm,
        updatePasswordForm: InitialUpdatePasswordForm,
        newUserForm: InitialNewUserForm
    })
});

export default rootReducer;