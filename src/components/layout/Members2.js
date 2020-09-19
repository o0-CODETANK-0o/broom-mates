import React from 'react';
import Speaker from '../layout/Speaker';
import skater from '../../assets/skater.png';
import { Link } from 'react-router-dom';
import AddUser from './AddUser';

const Members2 = () => {
  return (
    <div className=' border'>
      <div className='header '>
        <h1 className=' text details'>WG name</h1>
        <div className='underline'></div>
      </div>

      <div className='content '>
        <div className='user-gallery'>
          <Link to='userdetails'>
            <div className='user'>
              <img src={skater} className='avatar' alt='' />
              <p className=' text details'>Balazs</p>
              <p className=' text details'>xp 375</p>
            </div>
          </Link>
          <Link to='inviteuser'>
            <div className='user'>
              <AddUser />
            </div>
          </Link>
        </div>

        <Link to='shop'>
          <button className='input input-green'>
            <p className=' text '>shop</p>
          </button>
        </Link>
        <button className='input input-green'>
          <p className=' text '>enter arena</p>
        </button>
      </div>

      <div className='footer'>
        <Speaker />
      </div>
    </div>
  );
};

export default Members2;
