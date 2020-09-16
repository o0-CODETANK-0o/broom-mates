

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
