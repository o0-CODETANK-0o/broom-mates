import React from 'react';
import Speaker from '../layout/Speaker';



import Caro from "./Caro"
import { useSelector,useDispatch } from 'react-redux';
import registerUserNameAction from "../../actions/registerUserNameAction"
import registerUserGenderAction from "../../actions/registerUserGenderAction"



const RegisterUser =() => {

// const userName=useSelector((state)=>state.registerUserNameReducer.name)
// console.log(userName)
const userGender=useSelector((state)=>state.registerUserGenderReducer.gender)
console.log(userGender)

const state=useSelector((state)=>state)
console.log(state)
  const dispatch=useDispatch()
 

let newGender
let newName
const onChange=(e)=>{
e.preventDefault()
// e.target.name==="name"? newName=e.target.value:pickGender(e);
newName=e.target.value
}

const pickGender=(e)=>{
  newGender=e.target.value
  dispatch(registerUserGenderAction(newGender))
}


const onSubmit=(e,onChange)=>{
  e.preventDefault()

  dispatch(registerUserNameAction(newName))

  
}


const clearAll=(e,onChange)=>{
onChange(e.target.value="")

}


return (
  <div className='border'>
    <div className='header'>
      <div className='header-register-user'>
       u <h1 className='text'>character</h1>
        <h1 className='text'>creation</h1>
      </div>
      <div>
        <div className='underline'></div>
        <div className='underline'></div>
      </div>
    </div>

    <div className='content '>
      <form>
        <h2 className='text'>name</h2>
        <input type='text' name="name" className='input input-green text' onChange={onChange} />
        <h2 className='text'>type</h2>
               <select type='select' name="gender"  className='input input-green text '   onChange={pickGender} >

          
          <option value='human' >human</option>
          <option value='drag'>drag</option>
          <option value='bots'>bots</option>
        </select>

        <Caro />

          <button type="submit" className='input input-green' onClick={onSubmit}>
            <p className='text'>create</p>
          </button>
          <button className='input input-green' onClick={clearAll}>
            <p className='text'>clear</p>
          </button>
      </form>
    </div>

    <div className='footer'>
      <Speaker />
    </div>
  </div>
);

}


export default RegisterUser;


