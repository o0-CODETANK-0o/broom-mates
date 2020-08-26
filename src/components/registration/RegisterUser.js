import React, { useState } from 'react';
import Speaker from '../layout/Speaker';

import Caro from './Caro';
import { Link } from 'react-router-dom';

const RegisterUser = () => {

  let [avatar, setAvatar] = useState("male");

  return (
    <div className=' border'>
      <div className='header '>
        <h1 className='text'>character creation</h1>
        <div className='underline'></div>
      </div>

      <div className='content '>
        <h2 className='text'>name</h2>
        <input type='text' className='input input-green text' />
        <h2 className='text'>type</h2>
        <select onChange={(e) => setAvatar(e.target.value) } type='select' className='input input-green text '>
          <option value='male'>male</option>
          <option value='female'>female</option>
          <option value='broom'>drag</option>
          <option value='bots'>bots</option>
        </select>

        <Caro avatar={avatar}
        // className="carousel"
        />

        <Link to="members4">
          <button className='input input-green'>
            <p className='text'>confirm</p>
          </button>
        </Link>
   

      </div>

      <div className='footer'>
        <Speaker />
      </div>
    </div>
  );
};

export default RegisterUser;
