import { createStore } from 'redux';
import rootReducer from '../reducers/';

const initialState = {
  show: { registerwg1: true, registerwg2: false, TasksManager: false },
  registerFlat: {
    name:'',
    createdBy:'',
    tasks: {
      kitchen: {
        broomFloor: false,
        mopFloor: false,
        cookingStation: false,
        ovenAndPlates: false,
        cleanFridge: false,
        cleanBins: false,
        cleanSink: false,
        cleanWindows: false,
        cleanKnobs: false,
        removeSpiders:false
      },
      bathroom: {
        broomFloor: false,
        mopFloor: false,
        cleanBins: false,
        cleanSink: false,
        cleanWindows: false,
        cleanMirror: false,
        cleanShower: false,
        cleanToilet: false,
        cleanKnobs: false,
        changeCarpet: false,
        removeSpiders:false
      },
      livingRoom: {
        broomFloor: false,
        mopFloor: false,
        cleanWindows: false,
        cleanCouch: false,
        dustSurface: false,
        cleanKnobs: false,
        removeSpiders:false
      },
      entrance: {
        broomFloor: false,
        mopFloor: false,
        cleanKnobs: false,
        removeSpiders:false,
        changeCarpet: false
      }
  },
    admin: {
      surname:'',
      avatar:'',
      points: 0,
      active: false
    },
    playerTwo: {
      surname:'',
      avatar:'',
      points: 0,
      active: false
    },
    playerThree: {
      surname:'',
      avatar:'',
      points: 0,
      active: false
    },
    playerFour: {
      surname:'',
      avatar:'',
      points: 0,
      active: false
    }
  }
};

export const store = createStore(rootReducer, initialState);

