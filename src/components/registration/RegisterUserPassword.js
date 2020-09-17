import React, { useState } from 'react';
import { useParams} from 'react-router-dom'
import {  useDispatch } from 'react-redux';
import registerUserAction from '../../actions/registerUserAction';

const InviteUser = ({token}) => {
  let [password, setPassword] = useState('');
  let [password2, setPassword2] = useState('');

console.log(token)
  const dispatch = useDispatch();


  return (
    <div className='border'>
      <div className='header'>
        <div className='header-register-user'>
          <h1 className='text'>character</h1>
          <h1 className='text'>creation</h1>
        </div>
        <div>
          <div className='underline'></div>
          <div className='underline'></div>
        </div>
      </div>

      <div className='content '>
        <form
         onSubmit= { password===password2? (e) => {
            e.preventDefault();
            dispatch(registerUserAction(password));
          }:null}
        >
          <h2 className='text'>name</h2>
          <input
            type='password'
            name='password'
            className='input input-green text'
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
          <h2 className='text'>EMAIL</h2>
          <input
            type='password'
            name='password2'
            className='input input-green text'
            onChange={(e) => {
              e.preventDefault();
              setPassword2(e.target.value);
            }}
          />
          <button className='input input-green'>
            <p className='text'>Invite</p>
          </button>
        </form>
      </div>

     
    </div>
  );
};

export default InviteUser;
