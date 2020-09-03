

export const CreateWG = (name, email)=>{
   return{
      type: 'CREATE_WG',
      payload: { name, email, tasks }
   };
};

