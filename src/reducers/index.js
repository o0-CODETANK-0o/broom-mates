import { combineReducers } from 'redux';

import registerUserNameReducer  from "./registerUserNameReducer"; 
import registerUserGenderReducer  from "./registerUserGenderReducer"; 
import tasksReducer from './tasksReducer';


// const InitialState={
// name:registerUserNameReducer.name,
// gender:registerUserGenderReducer.gender


// }



 const rootReducer = combineReducers(
     {
        registerUserNameReducer,
        registerUserGenderReducer,
        tasksReducer
        }
    );

export default rootReducer;
