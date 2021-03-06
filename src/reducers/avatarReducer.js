// import babyMale from '../assets/male-portraits/baby.png';
// import lemmy from '../assets/male-portraits/lemmy.png';
// import spencer from '../assets/male-portraits/spencer.png';
// import squeegie from '../assets/male-portraits/squeegie.png';
// import babyGirl from '../assets/female-portraits/babygirl.png';
// import laverne from '../assets/female-portraits/laverne.png';
// import lea from '../assets/female-portraits/lea.png';
// import sammy from '../assets/female-portraits/sammy.png';

const avatarReducer = (
  state = {
    counter: 0,
    saved: 0,
  },
  action
) => {
  switch (action.type) {
    case 'AVATAR_SAVING':
      return {
        ...state,
        counter: action.payload.counter,
        saved:
          action.payload.counter === action.payload.items.length - 1
            ? action.payload.items[action.payload.items.length - 1]
            : action.payload.items[action.payload.counter],
      };

    case 'RESET_COUNTER':
      return {
        ...state,
        counter: 0,
        saved: 0,
      };

    default:
      return state;
  }
};

export default avatarReducer;
