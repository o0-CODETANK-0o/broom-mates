// import * as actions from "./action-types"

// export const CREATE_WG = ()=>({
//    type:actions.CREATE_WG
// })




const registerUserAction = (payload) => {
   return {
     type: 'REGISTER_USER',
     payload: payload,
   };
 };
 
 export default registerUserAction;