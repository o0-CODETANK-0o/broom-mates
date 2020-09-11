const userInviteAction = (name, email) => {
  return async (dispatch) => {
    const contact = await postContact(name, email);
    dispatch({
      type: 'CONTACT_SUCCESS',
      payload:contact
    });
  };
};



export default userInviteAction;


const postContact = async (name, email) => {
const url = `http://localhost:5000/contact`;

try {
  const response = await fetch(url, {
    method: 'POST',
   
    headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name,email }),
  });

  const data = await response.json();
  return data;
} catch (error) {
  return error;
}
};