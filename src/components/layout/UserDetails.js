import React from 'react';
import Speaker from '../layout/Speaker';
import skater from '../../assets/skater.png';
import { Link } from 'react-router-dom';
const UserDetails = () => {
  return (
    <div className=' border'>
      <div className='header '>
        <div className='user user-header'>
          <img src={skater} className='avatar' alt='' />
          <span className='userdetails'>
            <p className=' text details  userdetail-text'>Balazs</p>
            <p className=' text details userdetail-text'>xp points</p>
            <p className=' text details totalpoints'> 375</p>
          </span>
        </div>
        <div className='underline'></div>
        <h1 className='text'>weekly tasks</h1>
        <div className='underline'></div>
      </div>

      <div className='content '>
        <div className='task-list'>
          <span className='task'>
            <input type='checkbox' />
            <p className='text'>vacuum kitchen floor</p>
          </span>
          <span className='task'>
            <input type='checkbox' />
            <p className='text'>vacuum kitchen floor</p>
          </span>
          <span className='task'>
            <input type='checkbox' />
            <p className='text'>vacuum kitchen floor</p>
          </span>
          <span className='task'>
            <input type='checkbox' />
            <p className='text'>vacuum kitchen floor</p>
          </span>
        </div>

        <div className='underline'></div>
        <h1 className='text'>monthly task</h1>
        <div className='underline'></div>

        <span className='task'>
          <input type='checkbox' />
          <p className='text'>vacuum kitchen floor</p>
        </span>
        <Link to='inventory'>
          <button className='input input-green'>
            <p className=' text '>inventory</p>
          </button>
        </Link>
        <Link to="validateprogress">
        <button className='input input-green'>
          <p className=' text '>validation status</p>
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

export default UserDetails;
