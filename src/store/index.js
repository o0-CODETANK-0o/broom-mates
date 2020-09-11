import { createStore,  applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import rootReducer from '../reducers';
import thunk from "redux-thunk"
export const store = createStore(rootReducer,applyMiddleware(thunk));

