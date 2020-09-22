import babyMale from '../assets/male-portraits/baby.png';
import lemmy from '../assets/male-portraits/lemmy.png';
import spencer from '../assets/male-portraits/spencer.png';
import squeegie from '../assets/male-portraits/squeegie.png';
import babyGirl from '../assets/female-portraits/babygirl.png';
import laverne from '../assets/female-portraits/laverne.png';
import lea from '../assets/female-portraits/lea.png';
import sammy from '../assets/female-portraits/sammy.png';
import bert from '../assets/bots-portraits/robobert-portrait.png';
import bob from '../assets/bots-portraits/robobob-portrait.png';
import brad from '../assets/bots-portraits/robobrad-portrait.png';
import trip from '../assets/bots-portraits/robotrip-portrait.png';
import celeste from '../assets/drags-portrait/celeste-portrait.png';
import harmony from '../assets/drags-portrait/harmony-portrait.png';
import panther from '../assets/drags-portrait/panther-portrait.png';
import vanessa from '../assets/drags-portrait/vanessa-portrait.png';

const genderReducer = (
  state = {
    currentGender: 'human',
    items: [],
    bots: [bert, brad, bob, trip],
    drag: [celeste, harmony, panther, vanessa],
    human: [
      babyMale,
      babyGirl,
      lemmy,
      laverne,
      spencer,
      lea,
      squeegie,
      sammy,
    ],
  },
  action
) => {
  switch (action.type) {
    case 'GENDER_SAVING':
      return {
        ...state,
        currentGender: action.payload.currentGender,
      };

    default:
      return state;
  }
};

export default genderReducer;
