import babyMale from '../assets/male-portraits/baby.png';
import lemmy from '../assets/male-portraits/lemmy.png';
import spencer from '../assets/male-portraits/spencer.png';
import squeegie from '../assets/male-portraits/squeegie.png';
import babyGirl from '../assets/female-portraits/babygirl.png';
import laverne from '../assets/female-portraits/laverne.png';
import lea from '../assets/female-portraits/lea.png';
import sammy from '../assets/female-portraits/sammy.png';

const genderReducer = (
  state = {
    currentGender: 'human',
    items: [],
    bots: [babyGirl, laverne, lea, sammy],
    drag: [laverne, spencer, lea, squeegie],
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
