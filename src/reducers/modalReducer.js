const initialState = {
    action: null,
    show : false, 
    displayText : '', 
    id: null
};

const modalReducer = (state = initialState, action) => {
    if (action.type === 'SHOW_MODAL') {
        return action.payload;
    }
    return state;
};

export default modalReducer;