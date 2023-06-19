import { createStore, applyMiddleware, combineReducers, compose } from '@reduxjs/toolkit';
import { counterReducer } from '../reducers/counterReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    counterReducer: counterReducer,
});

const reduxDevTools = 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    
);