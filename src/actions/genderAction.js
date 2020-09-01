export const genderAction = (currentGender, items) => {
  return {
    type: 'GENDER_SAVING',
    payload: {
      currentGender,
      items,
    },
  };
};
