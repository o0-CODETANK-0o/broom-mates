const userInviteReducer = (state = {
    burger:false
}, action) => {
  switch (action.type) {
    case 'TOGGLE_BURGER':
        
        console.log(state)


      return {...state,burger:!state.burger}

      default:return state;
  }
};



export default userInviteReducer