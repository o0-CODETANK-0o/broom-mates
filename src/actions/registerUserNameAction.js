

const registerUserNameAction = (payload) => {

  console.log("Action NAME called")
    return {
      
      type: 'REGISTER_USER_NAME',
      payload:payload,
    };
  };
  
  export default registerUserNameAction;