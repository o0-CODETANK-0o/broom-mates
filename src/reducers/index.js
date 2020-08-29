import { combineReducers } from 'redux';


const flatReducer = (emptyWg, action) => {
    return [
        {name:'', email:''}
    ];
};

const selectedFlatReducer = (selectedFlat=null, action) => {
    if(action.type === 'CREATE_WG') {
        return action.payload;
    }
    return selectedFlatReducer
};

export default combineReducers({
     newFlat: flatReducer,
     selectedNewFlat: selectedFlatReducer
 });

 
