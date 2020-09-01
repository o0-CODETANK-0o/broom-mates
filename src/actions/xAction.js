export const xAction = (payload) => {
  return {
    type: 'X_ACTION',
    payload,
  };
};

export const resetCaro = () => {
  return {
    type: 'RESET_CARO',
  };
};
