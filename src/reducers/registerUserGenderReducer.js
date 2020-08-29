import action from '../actions/registerUserGenderAction';






const registerUserGenderAction = (state={gender:"human",
avatar:"babyMale"},action) => {

  switch (action.type) {
    
        case"REGISTER_USER_GENDER":
        console.log(` payload : ${action.payload}`)
        return {...state,gender:action.payload}

       


     ;

      default:return state;
  }
};



export default registerUserGenderAction