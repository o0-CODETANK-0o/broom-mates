import { combineReducers } from 'redux';


const flatReducer = (registerFlat, action) => {
    return [
        {name:'', email:''}
    ];
};

const createdFlatReducer = (selectedFlat=null, action) => {
    if(action.type === 'CREATE_WG') {
        return action.payload;
    }
    return createdFlatReducer
};

export default combineReducers({
     newFlat: flatReducer,
     createdNewFlat: createdFlatReducer
 });

 
