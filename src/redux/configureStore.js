import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './_reducers';


export const ConfigureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk, logger)
    );

    return store;
};