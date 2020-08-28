import { combineReducers } from 'redux';

import registerUserNameReducer  from "./registerUserNameReducer"; 
import registerUserGenderReducer  from "./registerUserGenderReducer"; 


// const InitialState={
// name:registerUserNameReducer.name,
// gender:registerUserGenderReducer.gender


// }



 const rootReducer=combineReducers(
     {
        registerUserNameReducer,
        registerUserGenderReducer
        }
        );

export default rootReducer;
