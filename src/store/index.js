import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import rootReducer from '../reducers';

export const store = createStore(rootReducer);

