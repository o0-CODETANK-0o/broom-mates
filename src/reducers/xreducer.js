const xReducer = (state = { x: 0 }, action) => {
  switch (action.type) {
    case 'X_ACTION':
      return { ...state, x: action.payload };
    case 'RESET_CARO':
      return { ...state, x: 0 };
    default:
      return state;
  }
};

export default xReducer;
