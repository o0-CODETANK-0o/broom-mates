const registerUserAction = (payload) => {
   return {
     type: 'REGISTER_USER',
     payload: payload,
   };
 };
 
export const CreateWG = (name, email)=>{
   return{
      type: 'CREATE_WG',
      payload: { name, email }
   };
};

export default registerUserAction;
