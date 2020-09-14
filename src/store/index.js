import { createStore, combineReducers } from 'redux'
import rootReducer from '../reducers';

export const store = createStore(rootReducer);

// import { createStore,  applyMiddleware } from 'redux'
// import { reducer as formReducer } from 'redux-form'
// import rootReducer from '../reducers';
// import thunk from "redux-thunk"
// export const store = createStore(rootReducer,applyMiddleware(thunk));