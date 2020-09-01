

const registerUserNameReducer = (state = { name: '' }, action) => {
  switch (action.type) {
    case 'REGISTER_USER_NAME':
      return { ...state, name: action.payload };

    default:
      return state;
  }
};

export default registerUserNameReducer;
