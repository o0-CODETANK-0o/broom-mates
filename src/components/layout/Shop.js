import React from 'react';
import Speaker from '../layout/Speaker';
import broom from '../../assets/broom.png';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className=' border '>
      <div className='header '>
        <h1 className='text'>shop</h1>
        <h2 className='text'>your credits:375</h2>
      </div>

      <div className='content unflex'>
        <div className='underline'></div>

        <h2 className='text'>weapons</h2>

        <div className='underline'></div>
        <div className='weapons'>
            <div className="left">
          <img src={broom} className='avatar' alt='' />
          <button className="text input input-green">buy</button>
          </div>
            <div className="right">
          <img src={broom} className='avatar' alt='' />
          <button className="text input input-green">buy</button>
          </div>
          </div>
          <div className='underline'></div>
          <h2 className='text'>armor</h2>
          <div className='underline'></div>
        
        <img src={broom} className='avatar' alt='' />
        <div className='underline'></div>
        <h2 className='text'>armor</h2>
        <div className='underline'></div>

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

export default Shop;
