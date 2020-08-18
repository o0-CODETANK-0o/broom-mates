import { createStore } from 'redux';
import rootReducer from '../reducers/';

const initialState = {
  show: { registerwg1: true, registerwg2: false },
};

export const store = createStore(rootReducer, initialState);

// export default store;
