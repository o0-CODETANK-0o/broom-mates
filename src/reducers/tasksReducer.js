const initialState = {
    items: [
        {
            status: false,
            _id: '5e4e852c9b28370008805bc8',
            text: 'Empty and clean trash cans',
            date: '2020-02-20T13:10:04.229Z'
            },
            {
            status: false,
            _id: '5e4e852c9b28370008805bc6',
            text: 'Clean cooking plates',
            date: '2020-02-20T13:10:04.229Z',
            },
            {
            status: false,
            _id: '5e4e852c9b28370008805bc5',
            text: 'Clean shelves',
            date: '2020-02-20T13:10:04.229Z',
            },
            {
            status: false,
            _id: '5e4e852c9b28370008805bc4',
            text: 'Vacuum kitchen floors',
            date: '2020-02-20T13:10:04.229Z',
            }
    ],
    modalData : {show : false, displayText : '', id: null}
};

const tasksReducer = (state = initialState, action) => {

    if (action.type === 'UPDATE_TASK') {
        const items = state.items.map((item) => {
            if (item._id === action.payload) {
                item.status = !item.status;
            }
            return item;
        })
        return Object.assign({}, state, {
            modalData: { show: false },
            items : items
        });
    } else if (action.type === 'UNVALIDATE_TASK') {
        alert(`you can't unvalidate a task`);
        return state;    
    } else if (action.type === 'SHOW_MODAL') {
        return { ...state, modalData: action.payload }
    } 
    return state;
};

export default tasksReducer
