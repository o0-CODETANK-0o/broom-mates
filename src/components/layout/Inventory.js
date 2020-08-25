import React from 'react';
import Speaker from '../layout/Speaker';

import broom from '../../assets/broom.png';
import { Link } from 'react-router-dom';
const Inventory = () => {
  return (
    <div className=' border'>
      <div className='header '>
        <div className='underline'></div>
        <h1 className='text'>inventory of balazs</h1>
        <div className='underline'></div>
      </div>

      <div className='content '>
      <div className="user-gallery">
    <Link to="userdetails">
    <div className="user">
        <img src={broom} className="avatar" alt=""/>
        <p className=" text details">power broom</p>
        <p className=" text details">x2</p>
    </div>
    </Link>
    <div className="user">
        <img src={broom} className="avatar" alt=""/>
        <p className=" text details">power broom</p>
        <p className=" text details">x2</p>
    </div>
    <div className="user">
        <img src={broom} className="avatar" alt=""/>
        <p className=" text details">power broom</p>
        <p className=" text details">x2</p>
    </div>
    <div className="user">
        <img src={broom} className="avatar" alt=""/>
        <p className=" text details ">power broom</p>
        <p className=" text details">x2</p>
    </div>
</div>




        <Link to='userdetails'>
          <button className='input input-green'>
            <p className=' text '>back to profile</p>
          </button>
        </Link>
      </div>

      <div className='footer'>
        <Speaker />
      </div>
    </div>
  );
};

export default Inventory;
