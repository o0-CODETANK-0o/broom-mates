import { combineReducers } from 'redux';

import registerUserNameReducer from './registerUserNameReducer';
import xreducer from './xreducer';
import avatarReducer from './avatarReducer';

import genderReducer from './genderReducer';








const rootReducer = combineReducers({
  registerUserNameReducer,
  genderReducer,
  avatarReducer,
  xreducer,
});

export default rootReducer;
