

const registerUserGenderAction = (payload) => {

    console.log("Action GENDER called")
      return {
        
        type: 'REGISTER_USER_GENDER',
        payload:payload,
      };
    };
    
    export default registerUserGenderAction;