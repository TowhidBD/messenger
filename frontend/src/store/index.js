import {configureStore, compose, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({

});

const middleware = [thunkMiddleware]