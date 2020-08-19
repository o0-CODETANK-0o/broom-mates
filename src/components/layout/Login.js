import React from 'react';

import Speaker from './Speaker';

const Login = () => {
  return (
    <div className='border'>
      <div className='header'>
        <h1 className='text'>login</h1>
        <div className='underline'></div>
      </div>
      <div className='content'>
        <h2 className='text'>enter name</h2>
        <input type='text' className='input input-purple text' />
              <h2 className='text'>enter password</h2>
        <input type='text' className='input input-purple  text' />
        <button className='input input-green'>
          <p className='text'>login</p>
        </button>
      </div>
      <div className='footer'>
        <Speaker />
      </div>
    </div>
  );
};

export default Login;
