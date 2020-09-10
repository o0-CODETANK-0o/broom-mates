import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
// import AuthReducer from './authReducer';

import xreducer from './xreducer';
import avatarReducer from './avatarReducer';
import registerUserNameReducer  from "./registerUserNameReducer"; 
// import registerUserGenderReducer  from "./registerUserGenderReducer"; 
import tasksReducer from './tasksReducer';
import modalReducer from './modalReducer';
import genderReducer from './genderReducer';

const rootReducer = combineReducers({
  registerUserNameReducer,
  genderReducer,
  avatarReducer,
  tasksReducer,
  modalReducer,
  xreducer,
  form: formReducer
});

export default rootReducer;
