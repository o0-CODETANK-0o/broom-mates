import action from '../actions/registerUserGenderAction';






const registerUserGenderAction = (state={gender:""},action) => {
  switch (action.type) {
    
        case"REGISTER_USER_GENDER":
        
        return {...state,gender:action.payload}

       


     ;

      default:return state;
  }
};



export default registerUserGenderAction