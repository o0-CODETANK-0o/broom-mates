
// import { reducer as formReducer } from 'redux-form'
 
import {createStore , applyMiddleware} from "redux"
import rootReducer from "../reducers"
import thunk from "redux-thunk"


const store=createStore(rootReducer,applyMiddleware(thunk))

export default store

