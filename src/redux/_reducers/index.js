import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { InitialSignupForm } from '../_actions';
import signupReducer from './signupReducer';


const rootReducer = combineReducers({
    signup: signupReducer,
    ...createForms({
        signupForm: InitialSignupForm
    })
});

export default rootReducer;