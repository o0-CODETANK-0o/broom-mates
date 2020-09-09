import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
// import AuthReducer from './authReducer';

import registerUserNameReducer from './registerUserNameReducer';
import xreducer from './xreducer';
import avatarReducer from './avatarReducer';

import genderReducer from './genderReducer';




const rootReducer = combineReducers({
  registerUserNameReducer,
  genderReducer,
  avatarReducer,
  xreducer,
  form: formReducer
});

export default rootReducer;
