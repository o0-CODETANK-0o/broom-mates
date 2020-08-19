import React from 'react';
import Speaker from '../layout/Speaker';
import broom from '../../assets/broom.png';
import { Link } from 'react-router-dom';

const ValidateProgress = () => {
  return (
    <div className=' border'>
      <div className='header '>
        <div className='underline'></div>
        <h1 className='text'>Mop kitchen floor</h1>
        <div className='underline'></div>
      </div>

      <div className='content '>

      <img src={broom} className='avatar' alt='' />
      <p className='text'>status</p>
      <br/>
      <p className='text'>work in progress</p><br/>
      <p className='text'>awaiting validation</p><br/>
      <p className='text'>status validated!!!</p>

      <Link to='members'>
        <button className='input input-green'>
          <p className=' text '>complete</p>
        </button>
      </Link>
      <Link to='members'>
        <button className='input input-green'>
          <p className=' text '>back to hub</p>
        </button>
      </Link>
      </div>
      <div className='footer'>
        <Speaker />
      </div>
    </div>
  );
};

export default ValidateProgress;
