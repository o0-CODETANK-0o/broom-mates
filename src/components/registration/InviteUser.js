import React, { useState } from 'react';
// import Speaker from '../layout/Speaker';
import {  useDispatch } from 'react-redux';
import userInviteAction from '../../actions/userInviteAction';

const InviteUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  console.log(`name:${name}`);
  console.log(`email ${email}`);
  return (
    <div className='border'>
      <div className='header'>
        <div className='header-register-user'>
          <h1 className='text'>Invite your</h1>
          <h1 className='text'>mates</h1>

        </div>
        <div>
          <div className='underline'></div>
          <div className='underline'></div>
        </div>
      </div>

      <div className='content '>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(userInviteAction(name, email));
          }}
        >
          <h2 className='text'>name</h2>
          <input
            type='text'
            name='name'
            className='input input-green text'
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
          />
          <h2 className='text'>EMAIL</h2>
          <input
            type='email'
            name='email'
            className='input input-green text'
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
          <button className='input input-green'>
            <p className='text'>Invite</p>
          </button>
        </form>
      </div>

      {/* <div className='footer'>
        <Speaker />
      </div> */}
    </div>
  );
};

export default InviteUser;

