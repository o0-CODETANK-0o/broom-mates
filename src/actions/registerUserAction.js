
 const registerUserAction = (name,token,currentAvatar) => {
   console.log("im here")
   console.log(token)
  return async (dispatch) => {
    const contact = await postContact(name,token,currentAvatar);
    dispatch({
      type: 'REGISTER_USER',
      payload:{
        name,token,currentAvatar
      }
    });
  };
  
};

export default registerUserAction

const postContact = async (name, token,currentAvatar) => {
// const url = `https://wagowsky.herokuapp.com/contact`;
const url = `http://localhost:5000/registeruser`;
try {
  const response = await fetch(url, {
    method: 'PATCH',
   
    headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name,token,currentAvatar}),
  });

  const data = await response.json();
  return data;
} catch (error) {
  return error;
}
};