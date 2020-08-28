import registerUserAction from "../actions/registerUserAction"

const registerUserReducer=(state=userName, action)=>{

switch(action.type){
    case"REGISTER_USER":
console.log(state)
    ;
    default:
        return state
    ;
}
}

export default registerUserReducer