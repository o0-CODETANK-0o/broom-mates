export const avatarAction = (counter, items) => {
  return {
    type: 'AVATAR_SAVING',
    payload: {
      counter,
      items,
    },
  };
};

export const resetCounter = () => {
  return {
    type: 'RESET_COUNTER',
  };
};
