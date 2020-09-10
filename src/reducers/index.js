import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
// import AuthReducer from './authReducer';

import xreducer from './xreducer';
import avatarReducer from './avatarReducer';
import registerUserNameReducer  from "./registerUserNameReducer"; 
import userInviteReducer  from "./userInviteReducer"; 

import tasksReducer from './tasksReducer';

import genderReducer from './genderReducer';

const rootReducer = combineReducers({
  userInviteReducer,
  registerUserNameReducer,
  genderReducer,
  avatarReducer,
  tasksReducer,
  xreducer,
  form: formReducer
});

export default rootReducer;
