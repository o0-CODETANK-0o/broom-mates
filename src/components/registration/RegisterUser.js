import React from 'react';
import Speaker from '../layout/Speaker';
import { useSelector, useDispatch } from 'react-redux';

import Caro from './Caro';


const RegisterUser =() => {
const userName=useSelector(state=>state.registerUserReducer.userName)
  const dispatch=useDispatch()






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
            <input type='text' className='input input-green text' onChange={onChange} />
            <h2 className='text'>type</h2>
            {/* <select onChange={ (e) => setAvatar(e.target.value) } type='select' className='input input-green text '> */}
            <select type='select' className='input input-green text '>

              <option value='human'>human</option>
              <option value='drag'>drag</option>
              <option value='bots'>bots</option>
            </select>
  
            <Caro avatar={avatar}
            // className="carousel"
            />
  
              <button className='input input-green'>
                <p className='text'>create</p>
              </button>
              <button className='input input-green'>
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
