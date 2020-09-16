const registerUserPasswordReducer = (state = '', action) => {
    if (action.type === 'SUBMIT_EMAIL') {
        return action.payload
    }
    return state;
};

export default registerUserPasswordReducer;